"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDS = exports.DataSourceConfig = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
config_1.ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`,
});
exports.DataSourceConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'password',
    database: 'DB123456',
    entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    synchronize: false,
    migrationsRun: true,
    logging: false,
};
exports.AppDS = new typeorm_1.DataSource(exports.DataSourceConfig);
//# sourceMappingURL=data.source.js.map