import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, this is a study API with NestJs, TypeORM and GraphQL!';
  }
}
