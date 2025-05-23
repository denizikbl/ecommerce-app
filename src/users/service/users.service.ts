import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { dummyUsers } from '../../common/utils/data';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [...dummyUsers];

    getAllUsers(page: number, limit: number, sort: string, order: 'asc' | 'desc') {
        let sortedUsers = [...this.users];
        
        // sorting
        sortedUsers.sort((a, b) => {
            const aValue = a[sort];
            const bValue = b[sort];

            if (order === 'asc') {
            return aValue > bValue ? 1 : -1;
            } else {
            return aValue < bValue ? 1 : -1;
            }
        });

        // pagination
        const start = (page - 1) * limit;
        const end = start + limit;

        return sortedUsers.slice(start, end);
    }

    createUser(createUserDto: CreateUserDto): any{
        const newUser = {
            id: this.users.length + 1,
            isActive: true,
            createdAt: new Date().toISOString(),
            birthdate: "2000-01-01",
            ...createUserDto,
        };
       this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto): any {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return null; // User not found
        }
        const updatedUser = { ...this.users[userIndex], ...updateUserDto };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }

   
    delete(id: number): any {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return {message: 'User with id ${id} not found'}
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return deletedUser[0]; // Return the deleted user
        
    }
}
