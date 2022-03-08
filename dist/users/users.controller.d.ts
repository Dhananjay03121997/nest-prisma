import { PrismaService } from 'src/prisma/prisma.service';
import { usersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly prismaService;
    private readonly userService;
    constructor(prismaService: PrismaService, userService: UsersService);
    getUser({ id }: {
        id: any;
    }): Promise<{
        username: string;
        firstname: string;
        lastname: string;
        id: number;
    } | {
        message: string;
    }>;
    addUser({ username, email, password, firstname, lastname }: usersDto): Promise<{
        username: string;
        firstname: string;
        lastname: string;
        email: string;
    }>;
}
