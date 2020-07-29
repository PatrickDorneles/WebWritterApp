import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository])
    ],
    providers: [UserService, UserResolver]
})
export class UserModule {}
