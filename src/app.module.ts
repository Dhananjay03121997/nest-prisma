import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [PrismaModule, UsersModule, PersonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
