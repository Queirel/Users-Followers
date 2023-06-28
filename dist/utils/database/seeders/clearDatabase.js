"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../../config/data.source");
async function clearDatabase() {
    await data_source_1.AppDS.initialize();
    const queryRunner = data_source_1.AppDS.createQueryRunner();
    await queryRunner.startTransaction();
    try {
        await queryRunner.query('TRUNCATE TABLE "users" CASCADE');
        await queryRunner.commitTransaction();
    }
    catch (err) {
        console.error(err);
        await queryRunner.rollbackTransaction();
    }
    finally {
        await queryRunner.release();
    }
}
clearDatabase().then(() => console.log('Database cleared!'));
//# sourceMappingURL=clearDatabase.js.map