import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from '@plia/plia/user/api';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      global: true,
      secret: process.env.PRIVATE_KEY || 'SOMESTEVEDOHKEY',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
