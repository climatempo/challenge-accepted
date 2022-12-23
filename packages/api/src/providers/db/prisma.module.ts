import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
  ],
})
export class PrismaModule {}
