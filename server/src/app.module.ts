import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database.module';
import { RedisModule } from './redis.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from './jwt.module';
import { CategoryModule } from './category/category.module';
import { GroupModule } from './group/group.module';
import { TagModule } from './tag/tag.module';
import { RegionModule } from './region/region.module';
import { CommunityModule } from './community/community.module';
import { FriendModule } from './friend/friend.module';
import { ReportModule } from './report/report.module';
import databaseConfig from './config/database.config';
import redisConfig from './config/redis.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, redisConfig],
    }),
    DatabaseModule,
    RedisModule,
    AuthModule,
    UserModule,
    JwtModule,
    CategoryModule,
    GroupModule,
    TagModule,
    RegionModule,
    CommunityModule,
    FriendModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
