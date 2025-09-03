import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.module";
import { AuthModule } from "../auth/auth.module";
import { UserController } from "./controller/user.controller";
import { UserService } from "./services/user.service";


@Module({
    imports: [TypeOrmModule.forFeature([User]),forwardRef(() => AuthModule)],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}