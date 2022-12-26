import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalesModule } from './modules/Locales/locales.module';

@Module({
  imports: [LocalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
