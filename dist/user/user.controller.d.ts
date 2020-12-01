import { EntityManager } from "typeorm";
import { UserDto } from "./dto/user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    private entityManager;
    constructor(userService: UserService, entityManager: EntityManager);
    getOneUser(id: number): Promise<User>;
    getOneByEmail(email: string): Promise<User>;
    createUser(userDto: UserDto): Promise<import("typeorm").InsertResult>;
    updateClass(id: number, userDto: UserDto): Promise<import("typeorm").UpdateResult>;
}
