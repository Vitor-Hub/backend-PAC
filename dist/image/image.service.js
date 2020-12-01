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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const image_entity_1 = require("./image.entity");
let ImageService = class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    async getAllByUserId(userId) {
        return await this.imageRepository.find({
            where: {
                userId,
                deletedAt: typeorm_2.IsNull()
            }
        });
    }
    async create(userId, fileName, title, entityManager) {
        let imageRepository = entityManager.getRepository(image_entity_1.Image);
        return await imageRepository.insert(new image_entity_1.Image({
            imageUrl: fileName,
            title,
            userId,
            createdAt: new Date(),
            updatedAt: new Date()
        }));
    }
    async update(id, imageDto, entityManager) {
        let imageRepository = entityManager.getRepository(image_entity_1.Image);
        let { title } = imageDto;
        return await imageRepository.update(id, {
            title,
            updatedAt: new Date()
        });
    }
    async delete(id, entityManager) {
        let imageRepository = entityManager.getRepository(image_entity_1.Image);
        return await imageRepository.update(id, { deletedAt: new Date(), updatedAt: new Date() });
    }
};
ImageService = __decorate([
    common_1.Injectable({ scope: common_1.Scope.REQUEST }),
    __param(0, typeorm_1.InjectRepository(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map