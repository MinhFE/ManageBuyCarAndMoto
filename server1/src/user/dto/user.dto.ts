import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    firstName: string;

    lastName: string;

    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    password: string;

    phoneNumber: string;

    address: string;
    
    role: string;
}

export class LoginUserDto {

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
} 