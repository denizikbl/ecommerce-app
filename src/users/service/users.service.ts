import { Injectable } from '@nestjs/common';
import { dummyUsers } from '../common/utils/data';

@Injectable()
export class UsersService {
    private users = [...dummyUsers];

    getAllUsers() {
        return this.users;
    }
}
