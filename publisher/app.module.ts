import { Module } from '@nestjs/common';
import { NatsController } from './nats.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_TEST',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [NatsController],
  providers: [],
})
export class AppModule {}
