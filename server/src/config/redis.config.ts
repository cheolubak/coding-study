import { registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { RedisOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

export default registerAs(
  'redis.config',
  (): RedisOptions => ({
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST,
      port: +(process.env.REDIS_PORT || 6379),
    },
  }),
);
