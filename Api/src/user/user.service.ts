import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

    @Inject()
    userRepository: UserRepository;

}
