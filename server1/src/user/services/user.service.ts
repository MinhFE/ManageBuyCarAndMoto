import { userNotFound } from './../exceptions/userNotFound.exception';
import { CreateUserDto, LoginUserDto } from './../dto/user.dto';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from "bcrypt";
import {HttpException, HttpStatus} from "@nestjs/common"

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getAll() {
        return this.userRepository.findAll();
    }

    async create(userDto: CreateUserDto) {
        userDto.password = await bcrypt.hash(userDto.password, 10);

        const userInDB = await this.userRepository.findByCondition({email: userDto.email});

        if(userInDB) {
            throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
        }

        return await this.userRepository.create(userDto);
    }

    async deleteUser(id: any) {
        return this.userRepository.deleteOne(id);
    }

    async findByLogin({email, password}: LoginUserDto) {
        const user = await this.userRepository.findByCondition({email: email})

        if(!user) {
            throw new HttpException("User not found", HttpStatus.UNAUTHORIZED)
        }

        const is_equal = bcrypt.compareSync(password, user.password);

        if(!is_equal) {
            throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
        }

        return user;
    }

    async update(filter: any, update: any) {
        if(update.refreshToken) {
            update.refreshToken = await bcrypt.hash(
                this.reverse(update.refreshToken),
                10,
            )
        }

        return await this.userRepository.findByConditionAndUpdate(filter, update)
    }

    async findByEmail(email: string) {
        return await this.userRepository.findByCondition({email: email})
    }

    private reverse(s: any) {
        return s.split('').reverse().join('');
    }
}
