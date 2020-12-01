import { EntityManager } from "typeorm";
import { ImageDto } from "./dto/image.dto";
import { Image } from "./image.entity";
import { ImageService } from "./image.service";
import { Request } from 'express';
export declare class ImageController {
    private imageService;
    private entityManager;
    constructor(imageService: ImageService, entityManager: EntityManager);
    getAllByUserId(id: number): Promise<Image[]>;
    seeUploadedFile(image: any, res: any): any;
    createImage(file: any, request: Request): Promise<{
        originalname: any;
        filename: any;
    }>;
    updateImage(id: number, imageDto: ImageDto): Promise<import("typeorm").UpdateResult>;
    deleteClass(id: number): Promise<import("typeorm").UpdateResult>;
}
