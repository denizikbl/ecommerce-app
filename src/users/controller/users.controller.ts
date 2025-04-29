import { Controller, Get, Post, Body, UsePipes, Put, ParseIntPipe, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CapitalizeNamePipe } from 'src/common/pipes/capitalize-name.pipe';
import { UseGuards } from '@nestjs/common';
import { SuperAdminGuard } from '../../auth/guards/super-admin.guard';


@Controller('users') 
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers(
        @Query('page') page = 1,
        @Query('limit') limit = 10,
        @Query('sort') sort = 'id',
        @Query('order') order: 'asc' | 'desc' = 'asc',
    ): any[] {
        return this.userService.getAllUsers(+page, +limit, sort, order);
    }

    @Post()
    @UsePipes(CapitalizeNamePipe)
    createUser(@Body() createUserDto: CreateUserDto): any {
        return this.userService.createUser(createUserDto);
    }
    
    @Put(':id')
    @UsePipes(CapitalizeNamePipe)
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): any {
        return this.userService.update(id, updateUserDto);
    }

    @UseGuards(SuperAdminGuard)
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): any {
        return this.userService.delete(id);
    }

   

}

