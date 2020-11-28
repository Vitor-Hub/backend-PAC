import { IsInt, IsString } from "class-validator"

export class ImageDto {
    @IsInt()
    userId: number

    @IsString()
    title: string
}