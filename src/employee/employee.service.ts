import { Injectable } from '@nestjs/common';
import { ProducerService } from 'src/kafka/producer/producer.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly _kafka: ProducerService) {}

  async create() {
    console.log('create call');
    this._kafka.produce({
      topic: 'create-employee',
      messages: [{ value: 'this is emplotyee create' }],
    });
  }
  async update() {
    console.log('update call');
    this._kafka.produce({
      topic: 'update-employee',
      messages: [{ value: 'this is emplotyee update' }],
    });
  }
}
