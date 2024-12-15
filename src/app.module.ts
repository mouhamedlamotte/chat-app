import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UserModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
