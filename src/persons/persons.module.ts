import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PersonsService],
  imports: [PrismaModule],
  controllers: [PersonsController]
})
export class PersonsModule {}
