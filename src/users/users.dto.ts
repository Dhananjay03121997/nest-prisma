import { IsEmailTidy, IsNotBlankString } from "@nestjsi/class-validator"

export class usersDto {
    id: number
    username: string
    @IsNotBlankString()
    @IsEmailTidy()
    email: string
    @IsNotBlankString()
    password: string
    firstname: string
    lastname: string
}