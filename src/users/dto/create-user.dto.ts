import {IsString, IsEmail, IsEnum, IsNotEmpty} from 'class-validator';
import {UserRole} from '../common/utils/constants/roles.enum';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @IsString()
    password: string;

    @IsEnum(UserRole)
    role: UserRole;
}
