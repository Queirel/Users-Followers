"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const faker_1 = require("@faker-js/faker");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
const usersProjects_entity_1 = require("../entities/usersProjects.entity");
const data_source_1 = require("../../config/data.source");
const followers_entity_1 = require("../../followers/entities/followers.entity");
let UsersService = exports.UsersService = class UsersService {
    constructor(userRepository, userProjectRepository) {
        this.userRepository = userRepository;
        this.userProjectRepository = userProjectRepository;
    }
    async createUser(body) {
        body.password = await bcrypt.hash(body.password, +process.env.HASH_SALT);
        return await this.userRepository.save(body);
    }
    async seedUser(body) {
        const quantity = body.quantity;
        await data_source_1.AppDS.initialize();
        const queryRunner = data_source_1.AppDS.createQueryRunner();
        await queryRunner.query('TRUNCATE TABLE "users" CASCADE');
        const userArray = [];
        for (let iterations = 0; iterations < quantity; iterations++) {
            const username = faker_1.faker.internet.userName();
            const password = faker_1.faker.internet.password();
            const user = { username, password };
            userArray.push(user);
        }
        if (userArray.length > 29999) {
            await this.userRepository.save(userArray, { chunk: 30000 });
        }
        await this.userRepository.save(userArray, { chunk: 30000 });
        await data_source_1.AppDS.destroy();
        return `${quantity} users created`;
    }
    async findUsers() {
        console.time('Execution Time');
        const users = await this.userRepository
            .createQueryBuilder('users')
            .addSelect(['users.id', 'users.username', 'followers.following_id'])
            .leftJoinAndMapMany('users.followers', followers_entity_1.FollowersEntity, 'followers', 'followers.follower_id = users.id')
            .getManyAndCount();
        console.timeEnd('Execution Time');
        return users;
    }
    async findUserById(id) {
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .where({ id })
                .leftJoinAndSelect('user.projectsIncludes', 'projectsIncludes')
                .getOne();
            if (!user) {
            }
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async relationToProject(body) {
        try {
            return await this.userProjectRepository.save(body);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async findBy({ key, value }) {
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .addSelect('user.password')
                .where({ [key]: value })
                .getOne();
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async updateUser(body, id) {
        try {
            const user = await this.userRepository.update(id, body);
            if (user.affected === 0) {
            }
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async deleteUser(id) {
        try {
            const user = await this.userRepository.delete(id);
            if (user.affected === 0) {
            }
            return user;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('some error');
        }
    }
    async findUserByUsername(username) {
        return await this.userRepository.findOne({ where: { username } });
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usersProjects_entity_1.UsersProjectsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map