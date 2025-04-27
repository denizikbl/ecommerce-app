import {IsString, IsEmail, IsEnum} from 'class-validator';
import {UserRole} from '../common/utils/constants/roles.enum';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsEnum(UserRole)
    role: UserRole;
}
