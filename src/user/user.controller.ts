import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { EntityManager } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private entityManager: EntityManager
    ) {}

    @Get(':id')
    async getOneUser(
        @Param('id') id: number,
    ): Promise<User> {
        return await this.userService.getById(id)
    }

    @Post()
    async createUser(@Body() userDto: UserDto) {
        return await this.entityManager.transaction(async transactionManager => {
            return await this.userService.create(userDto, transactionManager);
        });
    }

    @Put(':id')
    async updateClass(
        @Param('id') id: number, 
        @Body() userDto: UserDto
    ) {
        return await this.entityManager.transaction(async transactionManager => {
            return await this.userService.update(id, userDto, transactionManager);
        });
    }
}