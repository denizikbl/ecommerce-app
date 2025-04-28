import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../common/utils/constants/roles.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
