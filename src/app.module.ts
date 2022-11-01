import { Module } from '@nestjs/common';

import { KafkaModule } from './kafka/kafka.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [KafkaModule, EmployeeModule],
})
export class AppModule {}
