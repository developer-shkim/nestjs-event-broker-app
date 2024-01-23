import {
  Controller,
  Inject,
  OnApplicationBootstrap,
  Post,
} from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NatsController {
  constructor(
    @Inject('NATS_TEST')
    private client: ClientProxy,
  ) {}

  @Post('notify')
  sendNotification() {
    this.client
      .emit<number>('notify-something', true)
      .subscribe((pubAck) => console.log('==== publisher ', pubAck));
  }
}
