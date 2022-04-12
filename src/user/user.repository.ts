import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async findAllUser(): Promise<User[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }
    async findUserByName(name: string): Promise<User> {
        try {
            //console.log(name);
            return await this.findOneOrFail({
                where: { name: name }
            });
        } catch (error) {
            return error;
        }
    }

    async findUserById(id: number) {
        try {
            return await this.findOneOrFail(id);
        } catch (error) {
            return error;
        }
    }

    async addEntity(dto: CreateUserDto): Promise<User> {
        //console.log(dto);
        try {
            const entity = this.create({
                name: dto.name,
                email: dto.email,
                password: dto.password,
            });
            await this.save(entity);
            return entity;

        } catch (error) {
            return error;
        }
    }

    async updateEntity(id: number, dto: UpdateUserDto): Promise<User> {
        try {
            await this.update(id, dto);
            return await this.findOneOrFail(id);
        } catch (error) {
            return error;
        }
    }
}