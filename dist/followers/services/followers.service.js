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
exports.FollowersService = void 0;
const common_1 = require("@nestjs/common");
const followers_entity_1 = require("../entities/followers.entity");
const data_source_1 = require("../../config/data.source");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("../../users/entities/users.entity");
let FollowersService = exports.FollowersService = class FollowersService {
    constructor(followersRepository, userRepository) {
        this.followersRepository = followersRepository;
        this.userRepository = userRepository;
    }
    async findFollowers() {
        return await this.followersRepository.find();
    }
    async createFollower(body) {
        return await this.followersRepository.save(body);
    }
    async seedFollowers(body) {
        const users = await this.userRepository.find();
        const userQuantity = users.length;
        const quantity = body.quantity;
        console.log(quantity);
        await data_source_1.AppDS.initialize();
        const queryRunner = data_source_1.AppDS.createQueryRunner();
        await queryRunner.query('TRUNCATE TABLE "followers" CASCADE');
        for (let xUser = 0; xUser < userQuantity; xUser++) {
            for (let xFollow = 0; xFollow < quantity; xFollow++) {
                const follow = {
                    follower_id: users[xUser].id,
                    following_id: users[Math.floor(Math.random() * userQuantity)].id,
                };
                console.log(follow);
                await this.followersRepository.save(follow);
            }
        }
        await data_source_1.AppDS.destroy();
        const records = quantity * userQuantity;
        console.log(records);
        return `Seed complete. ${records} records created. Now ${userQuantity} users follow ${quantity} each`;
    }
};
exports.FollowersService = FollowersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(followers_entity_1.FollowersEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], FollowersService);
//# sourceMappingURL=followers.service.js.map