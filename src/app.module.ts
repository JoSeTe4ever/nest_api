import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuitarsService } from './guitars/guitars.service';
import { GuitarsController } from './guitars/guitars.controller';
import { GuitarsModule } from './guitars/guitars.module';

@Module({
  imports: [GuitarsModule],
  controllers: [AppController, GuitarsController],
  providers: [AppService, GuitarsService],
})
export class AppModule {}
