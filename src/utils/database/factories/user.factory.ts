// import { hash } from 'bcrypt';
// import { UsersEntity as User } from 'src/users/entities/users.entity';
// import { setSeederFactory } from 'typeorm-extension';

// export default setSeederFactory(User, async (faker) => {
//   const user = new User();

//   user.username = faker.internet.userName();
//   // .userName(user.firstName, user.lastName)
//   // .toLowerCase();
//   user.password = await hash(faker.internet.password(), 10);

//   return user;
// });
