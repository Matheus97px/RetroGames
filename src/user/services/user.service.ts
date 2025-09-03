import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.module";
import { Repository } from "typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private bcrypt: Bcrypt
    ) { }

    async findByUsername(username: string): Promise<User | null> {
        return await this.userRepository.findOne({
            where: { username}
        })
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findById(id: number): Promise<User> {

        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            throw new HttpException("User nao encontrado!", HttpStatus.NOT_FOUND);
        }

        return user;
    }

    async create(user: User): Promise<User> {

        const userExists = await this.findByUsername(user.username);

        if (userExists) {
            throw new HttpException("User ja cadastrado!", HttpStatus.BAD_REQUEST);
        }

        user.password = await this.bcrypt.hashPassword(user.password);
        return await this.userRepository.save(user);
    }

    async update(user: User): Promise<User> {
        await this.findById(user.id);
        const userExists = await this.findByUsername(user.username);

        if (userExists && userExists.id !== user.id) {
            throw new HttpException("User ja cadastrado!", HttpStatus.BAD_REQUEST);
        }

        user.password = await this.bcrypt.hashPassword(user.password);
        return await this.userRepository.save(user);
    }




    
}