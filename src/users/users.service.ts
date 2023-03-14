import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  userName: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 0,
      name: 'Fish',
      userName: 'fish',
      password: 'fish1234',
    },
    {
      id: 1,
      name: 'Dish',
      userName: 'dish',
      password: 'dish1234',
    },
    {
      id: 2,
      name: 'Tish',
      userName: 'Tish',
      password: 'tish1234',
    },
    {
      id: 3,
      name: 'Rish',
      userName: 'rish',
      password: 'rish1234',
    },
  ];

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find((user) => user.userName === userName);
  }
}
