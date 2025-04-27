import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { AppService } from '../app.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AppService]
})
export class UsersModule {}
