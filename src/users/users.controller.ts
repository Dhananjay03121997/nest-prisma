import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { usersDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly prismaService: PrismaService,
        private readonly userService: UsersService){}

    @Get()
    getUser(@Param() {id}){
         return this.userService.findUser(id);
    }

    @Post()
    addUser(@Body() {username,
        email,
        password,
        firstname,
        lastname}:usersDto){
            return this.userService.addUser({username,
                email,
                password,
                firstname,
                lastname})
    }
}
