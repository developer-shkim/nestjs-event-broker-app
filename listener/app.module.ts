import { Module } from '@nestjs/common';
import { NatsController } from './nats.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [],
  controllers: [NatsController],
  providers: [],
})
export class AppModule {}
