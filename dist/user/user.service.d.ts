import { EntityManager, Repository } from "typeorm";
import { User } from "./user.entity";
import { UserDto } from "./dto/user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getById(id: number): Promise<User>;
    getByEmail(email: string): Promise<User>;
    create(userDto: UserDto, entityManager: EntityManager): Promise<import("typeorm").InsertResult>;
    update(id: number, userDto: UserDto, entityManager: EntityManager): Promise<import("typeorm").UpdateResult>;
}
