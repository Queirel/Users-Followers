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
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const usersProjects_entity_1 = require("./usersProjects.entity");
const followers_entity_1 = require("../../followers/entities/followers.entity");
let UsersEntity = exports.UsersEntity = class UsersEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => followers_entity_1.FollowersEntity, (uf) => uf.followers),
    __metadata("design:type", followers_entity_1.FollowersEntity)
], UsersEntity.prototype, "followers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => followers_entity_1.FollowersEntity, (uf) => uf.following),
    __metadata("design:type", followers_entity_1.FollowersEntity)
], UsersEntity.prototype, "following", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usersProjects_entity_1.UsersProjectsEntity, (usersProjects) => usersProjects.user),
    __metadata("design:type", Array)
], UsersEntity.prototype, "projectsIncludes", void 0);
exports.UsersEntity = UsersEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UsersEntity);
//# sourceMappingURL=users.entity.js.map