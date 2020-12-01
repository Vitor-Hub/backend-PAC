"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getById(id) {
        return await this.userRepository.findOne({
            where: {
                id,
                deletedAt: typeorm_2.IsNull()
            }
        });
    }
    async getByEmail(email) {
        return await this.userRepository.findOne({
            where: {
                email,
                deletedAt: typeorm_2.IsNull()
            }
        });
    }
    async create(userDto, entityManager) {
        let userRepository = entityManager.getRepository(user_entity_1.User);
        let { email, name, photoUrl } = userDto;
        return await userRepository.insert(new user_entity_1.User({
            email,
            name,
            photoUrl,
            createdAt: new Date(),
            updatedAt: new Date()
        }));
    }
    async update(id, userDto, entityManager) {
        let userRepository = entityManager.getRepository(user_entity_1.User);
        let { email, name, photoUrl } = userDto;
        return await userRepository.update(id, {
            name,
            email,
            photoUrl,
            updatedAt: new Date()
        });
    }
};
UserService = __decorate([
    common_1.Injectable({ scope: common_1.Scope.REQUEST }),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map