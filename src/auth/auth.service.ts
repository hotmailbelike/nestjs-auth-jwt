import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(userName);

    if (user && user.password === password) {
      const { password, ...others } = user;
      return others;
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, id: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
