export declare class User {
    id: number;
    name: string;
    email: string;
    photoUrl: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    constructor(partial: Partial<User>);
}
