import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/forecast/infra/database/database.module';
import { HttpModule } from './modules/forecast/infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
