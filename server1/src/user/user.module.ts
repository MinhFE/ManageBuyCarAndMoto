import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';


import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './models/user.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserRepository } from './repository/user.repository';
import { AuthController } from './controllers/auth.controller';
import { JWTStrategy } from './jwt.strategy';
import { CheckUserMiddleware } from './middleware/checkUser.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "User",
        schema: userSchema
      }
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRETKEY'),
        signOptions: {
          expiresIn: configService.get('EXPIRESIN'),
        }
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, UserRepository, JWTStrategy],
})
export class UserModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckUserMiddleware)
      .forRoutes({path: 'auth/get-currentUser', method: RequestMethod.ALL})
  }
}
