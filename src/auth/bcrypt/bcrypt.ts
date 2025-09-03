import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {

    async hashPassword(password: string): Promise<string> {
        let jump: number = 12;
        return await bcrypt.hash(password, jump)
    }

    async comparePassword(password: string, hashPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashPassword);
    }



}