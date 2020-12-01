export declare class Image {
    id: number;
    userId: number;
    title: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    constructor(partial: Partial<Image>);
}
