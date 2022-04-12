import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STATUS_CODES } from 'http';
import { Repository } from 'typeorm';
import { CreateUserDto, QueryParamsDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserRepository) private readonly repository: UserRepository) { }

    async getAllUser(): Promise<User[]> {
        const result = await this.repository.findAllUser();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    async getUserByName(queryDto: QueryParamsDto): Promise<User> {
        const result = await this.repository.findUserByName(queryDto.name);
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    async getUserById(id: number): Promise<User> {
        const result = await this.repository.findUserById(id);
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    async addNewUser(dto: CreateUserDto): Promise<User> {
        //console.log(dto);
        const result = await this.repository.addEntity(dto);
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    async updateUser(id:number, dto:UpdateUserDto): Promise<User>{
        const result = await this.repository.updateEntity(id, dto);
        if(!result){
            throw new NotFoundException();
        }
        return result;
    }
}
