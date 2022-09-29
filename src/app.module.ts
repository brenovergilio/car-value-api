import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { ReportosService } from './reportos/reportos.service';

@Module({
  imports: [UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService, ReportosService],
})
export class AppModule {}
