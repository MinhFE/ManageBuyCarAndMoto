import { Controller, UseGuards, Get, Req, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(AuthGuard())
    @Get('profile')
    async getProfile(@Req() req: any) {
        return await req.user;
    }

    @Get()
    async getAll() {
        return this.userService.getAll();
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: any) {
        return this.userService.deleteUser(id);
    }
}
