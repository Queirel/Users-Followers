"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersModule = void 0;
const common_1 = require("@nestjs/common");
const followers_controller_1 = require("./controllers/followers.controller");
const followers_service_1 = require("./services/followers.service");
const typeorm_1 = require("@nestjs/typeorm");
const followers_entity_1 = require("./entities/followers.entity");
const users_entity_1 = require("../users/entities/users.entity");
let FollowersModule = exports.FollowersModule = class FollowersModule {
};
exports.FollowersModule = FollowersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([followers_entity_1.FollowersEntity, users_entity_1.UsersEntity])],
        controllers: [followers_controller_1.FollowersController],
        providers: [followers_service_1.FollowersService],
    })
], FollowersModule);
//# sourceMappingURL=followers.module.js.map