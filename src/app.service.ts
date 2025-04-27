import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFruits(): string[] {
    return ['Apple', 'Banana', 'Orange'];

  }
}
