import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuitarsService } from './guitars/guitars.service';
import { GuitarsController } from './guitars/guitars.controller';
import { GuitarsModule } from './guitars/guitars.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [GuitarsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
