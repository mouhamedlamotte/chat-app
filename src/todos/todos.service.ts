import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { kdebug } from 'src/utils/kdebug';

@Injectable()
export class TodosService {
private readonly prismaClient: PrismaClient= new PrismaClient();
  async getTodos() {
    try {
      const todos = await this.prismaClient.todo.findMany();
      return todos;
    } catch (error) {
      kdebug(error);
      return [];
    }
  }

  async createTodo(title: string, userId: string) {
    try {
      const todo = await this.prismaClient.todo.create({
        data: {
          title: title,
          userId: userId,
        },
      });
      return todo;
    } catch (error) {
      kdebug(error);
      return;
    }
  }

  async deleteTodo(id: string) {
    try {
      const todo = await this.prismaClient.todo.delete({
        where: {
          id: id,
        },
      });
      return todo;
    } catch (error) {
      kdebug(error);
      return;
    }
  }
}
