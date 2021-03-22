import { EntityRepository, Repository } from 'typeorm';
import { SignUpUserDto } from './user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private newUser: User;

  public async signUp(dto: SignUpUserDto): Promise<void> {
    this.newUser = this.create(dto);
    await this.save(this.newUser);
  }

  public async findUserByEmail(email: string): Promise<User> {
    return await this.findOne({ email });
  }
}
