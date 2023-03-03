import { CreateUserDto, LoginUserDto } from './../dto/user.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async register(userDto: CreateUserDto) {
        const user = await this.userService.create(userDto);

        const token = await this._createToken(user);

        return {
            user,
            ...token,
        }
    }

    async register2(userDto: CreateUserDto) {
        const user = await this.userService.create(userDto);

        const token = await this._createToken(user);

        return {
            user,
            ...token,
        }
    }

    async validateUser(email: string) {
        const user = await this.userService.findByEmail(email);

        if(!user) {
            throw new HttpException("Invalid token", HttpStatus.UNAUTHORIZED)
        }

        return user;
    }

    async login(loginUser: LoginUserDto) {
        const user = await this.userService.findByLogin(loginUser);
        const token = await this._createToken(user);

        return {
            email: user.email,
            ...token,
        }
    }

    async getCurrentUser(req: any) {
        try {
            const data = {user: null};
            if(req.user) {
                const user = await this.userService.findByEmail(req.user.email);

                data.user = {email: user.email}
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    }

    private async _createToken({email}, refresh = true) {
        const accessToken = this.jwtService.sign({email});

        if(refresh) {
            const refreshToken = this.jwtService.sign(
                {email}, 
                {
                    secret: process.env.SECRET_REFRESH,
                    expiresIn: process.env.EXPIRESIN_REFRESH,
                },
            )

            await this.userService.update(
                {email: email},
                {
                    refreshToken: refreshToken,
                }
            )

            return {
                expiresIn: process.env.EXPIRESIN,
                accessToken,
                refreshToken,
                expiresInRefresh: process.env.EXPIRESIN_REFRESH,
            }
        } else {
            return {
                expiresIn: process.env.EXPIRESIN,
                accessToken,
            }
        }
    }

}