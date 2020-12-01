"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'backend-paciac.herokuapp.com',
    port: 5432,
    username: 'postgres',
    password: 'images',
    database: 'postgres',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map