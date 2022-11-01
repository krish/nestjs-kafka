import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { KafkaModule } from 'src/kafka/kafka.module';
import { CreateConsumer } from './create.consumer';
import { UpdateConsumer } from './update.consumer';

@Module({
  imports: [KafkaModule],
  providers: [EmployeeService, CreateConsumer, UpdateConsumer],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
