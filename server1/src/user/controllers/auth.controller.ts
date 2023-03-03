import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { CreateUserDto, LoginUserDto } from "../dto/user.dto";
import { AuthService } from "../services/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.authService.register(createUserDto);
    }

    @Post('register2')
    async register2(@Body() createUserDto: CreateUserDto) {
        return await this.authService.register2(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto);
    }

    @Get('get-currentUser')
    async getCurrentUser(@Req() req: any) {
        return await this.authService.getCurrentUser(req);
    }
}