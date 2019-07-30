import { Module } from '@nestjs/common';
import { GuitarsController } from './guitars.controller';
import { GuitarsService } from './guitars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GuitarSchema } from './schema/guitar.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Guitar', schema: GuitarSchema }])],
    controllers: [GuitarsController],
    providers: [GuitarsService],
})
export class GuitarsModule {}
