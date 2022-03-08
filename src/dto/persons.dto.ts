import { FixedLength, IsEmailTidy, IsNotEmptyString } from "@nestjsi/class-validator";

export class Persons {
    id:      number;
    
    @IsEmailTidy()
    @IsNotEmptyString()
    email:   string;

    @IsNotEmptyString()
    name:    string;
}