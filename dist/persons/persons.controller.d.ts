import { PrismaService } from 'src/prisma/prisma.service';
import { Persons } from '../dto/index';
export declare class PersonsController {
    private readonly;
    constructor(readonly: PrismaService);
    findAll(): string;
    addPerson({ email, name }: Persons): string;
}
