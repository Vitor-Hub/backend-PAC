import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'backend-paciac.herokuapp.com',
    port: 5432,
    username: 'postgres',
    password: 'images',
    database: 'postgres',
    entities:  [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
}
