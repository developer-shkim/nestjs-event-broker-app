import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices';

@Controller()
export class NatsController {
  static messageList = ['message1'];

  @EventPattern('notify-something')
  eventHandler(@Payload() data: string, @Ctx() context: any) {
    console.log('before: ', NatsController.messageList);

    NatsController.messageList.push(data);

    console.log('after: ', NatsController.messageList);
  }
}
