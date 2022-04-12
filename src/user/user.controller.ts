import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, QueryParamsDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @ApiOkResponse({ type: User, isArray: true })
    @ApiNotFoundResponse()
    @Get()
    getAllUser() {
        return this.userService.getAllUser();
    }

    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    @ApiQuery({ name: 'name', required: true })
    @Get('byName')
    getUserByName(@Query() query: QueryParamsDto) {
        return this.userService.getUserByName(query);
    }

    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id));
    }

    @ApiCreatedResponse({ type: User })
    @ApiBadRequestResponse()
    @Post('add')
    addNewUser(@Body() body: CreateUserDto) {
        return this.userService.addNewUser(body);
    }

    @ApiOkResponse({type:User})
    @ApiBadRequestResponse()
    @Patch('update/:id')
    updateUser(@Param('id') id:string, @Body() body:UpdateUserDto){
        return this.userService.updateUser(Number(id), body);
    }

}
