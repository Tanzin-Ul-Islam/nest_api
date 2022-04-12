import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt";
import { JwtConstants } from "./constants";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthRepository } from "./auth.repository";
import { AuthService } from "./auth.service";
@Module({
    imports:[
        TypeOrmModule.forFeature([AuthRepository]),
        JwtModule.register({
            secret: JwtConstants.secret,
            signOptions: { expiresIn: '1d' },
        })
    ],
    controllers:[AuthController],
    providers:[AuthService],
})
export class AuthModule  {
  
}