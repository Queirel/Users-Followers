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
exports.FollowersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../../users/dto/user.dto");
const followers_service_1 = require("../services/followers.service");
const followers_entity_1 = require("../entities/followers.entity");
const swagger_1 = require("@nestjs/swagger");
let FollowersController = exports.FollowersController = class FollowersController {
    constructor(followersService) {
        this.followersService = followersService;
    }
    async seedFollowers(body) {
        return await this.followersService.seedFollowers(body);
    }
    async createFollower(body) {
        await this.followersService.createFollower(body);
    }
    async findFollowers() {
        return await this.followersService.findFollowers();
    }
};
__decorate([
    (0, common_1.Post)('seed'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.QuantityDTO]),
    __metadata("design:returntype", Promise)
], FollowersController.prototype, "seedFollowers", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [followers_entity_1.FollowersEntity]),
    __metadata("design:returntype", Promise)
], FollowersController.prototype, "createFollower", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FollowersController.prototype, "findFollowers", null);
exports.FollowersController = FollowersController = __decorate([
    (0, swagger_1.ApiTags)('Followers'),
    (0, common_1.Controller)('followers'),
    __metadata("design:paramtypes", [followers_service_1.FollowersService])
], FollowersController);
//# sourceMappingURL=followers.controller.js.map