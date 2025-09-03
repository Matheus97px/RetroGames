import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Bcrypt } from '../bcrypt/bcrypt';
import { UserLogin } from '../entities/userlogin.entity';
import { UserService } from '../../user/services/user.service';


@Injectable()
export class AuthService{
    constructor(
        private usuarioService: UserService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ){ }

    async validateUser(username: string, password: string): Promise<any>{

        const buscaUsuario = await this.usuarioService.findByUsername(username)

        if(!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        const matchPassword = await this.bcrypt.comparePassword(password, buscaUsuario.password)

        if(buscaUsuario && matchPassword){
            const { password, ...resposta } = buscaUsuario
            return resposta
        }

        return null

    }

    async login(usuarioLogin: UserLogin){

        const payload = { sub: usuarioLogin.username }

        const buscaUsuario = await this.usuarioService.findByUsername(usuarioLogin.username)

        if(!buscaUsuario)
            throw new HttpException('Usuário nao encontrado!', HttpStatus.NOT_FOUND)

        return{
            id: buscaUsuario.id,
            name: buscaUsuario.name,
            username: usuarioLogin.username,
            password: '',
            foto: buscaUsuario.foto,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        }

    }
}