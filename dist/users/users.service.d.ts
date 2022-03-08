import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    addUser(user: any): Promise<{
        username: string;
        firstname: string;
        lastname: string;
        email: string;
    }>;
    findUser(id: any): Promise<{
        username: string;
        firstname: string;
        lastname: string;
        id: number;
    } | {
        message: string;
    }>;
}
