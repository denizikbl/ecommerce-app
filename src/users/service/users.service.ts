import { Injectable } from '@nestjs/common';
import { dummyUsers } from '../common/utils/data';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
    private users = [...dummyUsers];

    getAllUsers() {
        return this.users;
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
}
