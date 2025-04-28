import { Controller, Get, Post, Body, UsePipes, Put, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

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
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): any {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): any {
        return this.userService.delete(id);
    }

   

}

