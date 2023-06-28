import { AppDS as dataSource } from 'src/config/data.source';

async function clearDatabase() {
  await dataSource.initialize();

  const queryRunner = dataSource.createQueryRunner();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query('TRUNCATE TABLE "users" CASCADE');

    await queryRunner.commitTransaction();
  } catch (err) {
    console.error(err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
}

clearDatabase().then(() => console.log('Database cleared!'));
