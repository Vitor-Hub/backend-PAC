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
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_uploading_utils_1 = require("../utils/file-uploading.utils");
const typeorm_1 = require("typeorm");
const image_dto_1 = require("./dto/image.dto");
const image_service_1 = require("./image.service");
const multer_1 = require("multer");
let ImageController = class ImageController {
    constructor(imageService, entityManager) {
        this.imageService = imageService;
        this.entityManager = entityManager;
    }
    async getAllByUserId(id) {
        return await this.imageService.getAllByUserId(id);
    }
    seeUploadedFile(image, res) {
        return res.sendFile(image, { root: './files' });
    }
    async createImage(file, request) {
        let queryParams = Object.assign({}, request.query);
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        await this.entityManager.transaction(async (transactionManager) => {
            return await this.imageService.create(parseInt(queryParams.user[0], 10), response.filename, queryParams.title.toString(), transactionManager);
        });
        return response;
    }
    async updateImage(id, imageDto) {
        return await this.entityManager.transaction(async (transactionManager) => {
            return await this.imageService.update(id, imageDto, transactionManager);
        });
    }
    async deleteClass(id) {
        return await this.entityManager.transaction(async (transactionManager) => {
            return await this.imageService.delete(id, transactionManager);
        });
    }
};
__decorate([
    common_1.Get('/user/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getAllByUserId", null);
__decorate([
    common_1.Get(':imgpath'),
    __param(0, common_1.Param('imgpath')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ImageController.prototype, "seeUploadedFile", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multer_1.diskStorage({
            destination: './files',
            filename: file_uploading_utils_1.editFileName,
        }),
        fileFilter: file_uploading_utils_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "createImage", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, image_dto_1.ImageDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "updateImage", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "deleteClass", null);
ImageController = __decorate([
    common_1.Controller('image'),
    __metadata("design:paramtypes", [image_service_1.ImageService,
        typeorm_1.EntityManager])
], ImageController);
exports.ImageController = ImageController;
//# sourceMappingURL=image.controller.js.map