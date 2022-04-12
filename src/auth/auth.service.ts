import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthRepository } from "./auth.repository";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable({})
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository) private readonly repository: AuthRepository,
        private jwtService: JwtService
    ) { }
    async signIn(dto: LoginDto): Promise<any> {
        const result = await this.repository.signIn(dto);
        let access_token = null;
        //console.log(access_token);
        if (result) {
            const payload = { id: result.id, email: result.email };
            access_token = this.jwtService.sign(payload);

        } else {
            throw new NotFoundException();
        }
        return { res: result, token: access_token };
    }
    async signUp(dto: RegisterDto) {
        const result = await this.repository.signUp(dto);
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }
}