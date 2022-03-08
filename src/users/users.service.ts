import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prismaService: PrismaService) { }

    async addUser(user) {
        try {
            const { username,
                password,
                firstname,
                lastname,
            email } = user;
            const userData = await this.prismaService.users.create({
                data: {
                    username,
                    email,
                    password,
                    firstname,
                    lastname
                },
                select: {
                    username: true,
                    email:true,
                    firstname: true,
                    lastname: true
                }
            });
            return userData
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                throw new ConflictException('Duplicate Values');
            }
            throw error;
        }
    }

    async findUser(id){
        try {
            const user = await this.prismaService.users.findFirst({
                where:{
                    id
                },
                select:{
                    id:true,
                    username:true,
                    firstname:true,
                    lastname:true
                }
            });
            if (user) {
            return user;
            }
            return {message:'User not found.'};
        } catch (error) {
            throw error;
        }
    }
}
