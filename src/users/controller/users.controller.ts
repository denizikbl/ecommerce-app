import { Controller, Get, Post, Body, UsePipes, } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users') 
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers(): any[] {
        return this.userService.getAllUsers();
    }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto): any {
        return this.userService.createUser(createUserDto);
    }

   

}
