import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url: 'postgresql://postgres:newpassword@localhost:5432/prisma?schema=public'
                }
            }
        })
    }
}