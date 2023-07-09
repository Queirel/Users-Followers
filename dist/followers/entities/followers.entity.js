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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/entities/users.entity");
let FollowersEntity = exports.FollowersEntity = class FollowersEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], FollowersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FollowersEntity.prototype, "follower_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FollowersEntity.prototype, "following_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (u) => u.followers),
    (0, typeorm_1.JoinColumn)({ name: 'follower_id' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], FollowersEntity.prototype, "followers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (u) => u.following),
    (0, typeorm_1.JoinColumn)({ name: 'following_id' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], FollowersEntity.prototype, "following", void 0);
exports.FollowersEntity = FollowersEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'followers' })
], FollowersEntity);
//# sourceMappingURL=followers.entity.js.map