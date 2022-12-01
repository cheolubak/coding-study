import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import redisConfig from './config/redis.config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'CATEGORY_SERVICE',
        useFactory: redisConfig,
      },
    ]),
  ],
})
export class RedisModule {}
