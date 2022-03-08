import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Persons } from '../dto/index';

@Controller('persons')
export class PersonsController {
    constructor(private readonly    : PrismaService) { }

    @Get()
    findAll() {
        return 'this.PrismaService.person.findMany()'
    }

    @Post()
    addPerson(@Body() { email, name }: Persons){
        return 'this.PrismaService.person.create({ data: { email, name } });'
    }
}
