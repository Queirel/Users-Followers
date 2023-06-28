// import { name, internet } from 'faker';
// import { UsersEntity } from 'src/users/entities/users.entity';
// import { UsersService } from 'src/users/services/users.service';

// const createUsers = async () => {
//   const users: Array<UsersEntity> = [];
//   for (const _ of Array.from({ length: 10 })) {
//     const username = name.firstName();
//     const password = internet.password();
//     const user: Partial<UsersEntity> = new UsersEntity();
//     users.push((await this.UsersService.(user)) as UsersEntity);
//   }
// };

// const createPosts = async (con: Connection, users: Array<UserEntity>) => {
//   const posts: Array<PostsEntity> = [];
//   for (const user of users) {
//     const body = lorem.paragraphs();
//     const post1: Partial<PostsEntity> = new PostsEntity(body);
//     const post2: Partial<PostsEntity> = new PostsEntity(body);
//     post1.user = user;
//     post2.user = user;
//     posts.push((await con.manager.save(post1)) as PostsEntity);
//     posts.push((await con.manager.save(post2)) as PostsEntity);
//   }
//   await readUsers(con);
//   await manyToManyCreate(con, posts);
// };

// const manyToManyCreate = async (con: Connection, posts: Array<PostsEntity>) => {
//   await createCat(con);
//   const categoriesRepository: Repository<CategoriesEntity> = con.getRepository(
//     CategoriesEntity
//   );
//   const categoriesPostsRepository: Repository<CategoriesPostsEntity> = con.getRepository(
//     CategoriesPostsEntity
//   );
//   const categories: Array<CategoriesEntity> = await categoriesRepository.find();
//   for (const post of posts) {
//     const someColumn = hacker.adjective();
//     const catPost = new CategoriesPostsEntity(
//       someColumn,
//       post,
//       random.arrayElement(categories)
//     );
//     await categoriesPostsRepository.save(catPost);
//   }
// };

// const createCat = async (con: Connection) => {
//   const categoriesRepository: Repository<CategoriesEntity> = con.getRepository(
//     CategoriesEntity
//   );
//   for (const _ of Array.from({ length: 10 })) {
//     const label = hacker.verb();
//     const categoryToSave: Partial<CategoriesEntity> = new CategoriesEntity(
//       label
//     );
//     await categoriesRepository.save(categoryToSave);
//   }
// };

// const readUsers = async (con: Connection) => {
//   const userRepository: Repository<UserEntity> = con.getRepository(UserEntity);
//   const data = await userRepository.find();
//   //   const data = await userRepository.find({ order: { birthDate: 'ASC' } });
//   //   const data = await userRepository.find({ take: 1, skip: 6 });
//   //   const data = await userRepository.findOne(8);
//   //   const data = await userRepository.find({ relations: ['posts'] });
//   //   const data = await userRepository.find({
//   //     where: { currentDate: Raw((alias) => `${alias} < NOW()`) },
//   //   });
//   writeFileSync('data.json', JSON.stringify(data, null, 2));
// };

// export { createUsers };

// import { hash } from 'bcrypt';
// import { DataSource } from 'typeorm';
// import { Seeder, SeederFactoryManager } from 'typeorm-extension';
// import { UsersEntity as User } from '../../../users/entities/users.entity';

// export default class UserSeeder implements Seeder {
//   public async run(
//     dataSource: DataSource,
//     factoryManager: SeederFactoryManager,
//   ): Promise<any> {
//     const repository = dataSource.getRepository(User);

//     const data = {
//       username: 'doctor',
//       password: await hash('123456789', 10),
//     };

//     const user = await repository.findOneBy({ username: data.username });

//     if (!user) {
//       await repository.insert([data]);
//     }

//     // ---------------------------------------------------

//     const userFactory = await factoryManager.get(User);
//     // save 10 factory generated entities, to the database
//     await userFactory.saveMany(10);
//   }
// }
