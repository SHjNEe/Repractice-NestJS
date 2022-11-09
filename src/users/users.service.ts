import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(email: string, password: string) {
    const user = this.userRepository.create({ email, password });
    return await this.userRepository.save(user);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    const user = this.userRepository.find({ where: { id } });
    return user;
  }

  find(email: string) {
    const user = this.userRepository.find({ where: { email } });
    return user;
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.userRepository.find({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    Object.assign(user, attrs);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.find({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return this.userRepository.remove(user);
  }
}
