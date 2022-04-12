import { User } from "src/user/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from 'bcrypt';
import { NotFoundException } from "@nestjs/common";

@EntityRepository(User)
export class AuthRepository extends Repository<User>{

    async signUp(dto: RegisterDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 12);
        try {
            const entity = this.create({
                name: dto.name,
                email: dto.email,
                password: hashedPassword,
            });
            await this.save(entity);
            return entity;

        } catch (error) {
            return error;
        }
    }

    async signIn(dto: LoginDto): Promise<User> {
        const { email, password } = dto;
        //console.log("login creds:", dto);
        try {
            const user = await this.findOneOrFail({ where: { email: email } });
            if (!user) {
                throw new NotFoundException('User not found!!');
            }
            if (!await bcrypt.compare(password, user.password)) {
                throw new NotFoundException('Password Not matched!!');
            }
            return user;
        } catch (error) {
            return error;
        }
    }


}