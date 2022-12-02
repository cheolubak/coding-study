import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database.module';
import { RedisModule } from './redis.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from './jwt.module';
import { FirebaseModule } from './firebase.module';
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
    FirebaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
