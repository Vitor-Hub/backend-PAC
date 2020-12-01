import { EntityManager, Repository } from "typeorm";
import { Image } from "./image.entity";
import { ImageDto } from "./dto/image.dto";
export declare class ImageService {
    private readonly imageRepository;
    constructor(imageRepository: Repository<Image>);
    getAllByUserId(userId: number): Promise<Image[]>;
    create(userId: number, fileName: string, title: string, entityManager: EntityManager): Promise<import("typeorm").InsertResult>;
    update(id: number, imageDto: ImageDto, entityManager: EntityManager): Promise<import("typeorm").UpdateResult>;
    delete(id: number, entityManager: EntityManager): Promise<import("typeorm").UpdateResult>;
}
