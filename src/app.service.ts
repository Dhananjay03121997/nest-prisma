import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServer(): string {
    return 'Server running on 3000!';
  }
}
