import { Module } from '@nestjs/common';
import { GuitarsController } from './guitars.controller';
import { GuitarsService } from './guitars.service';

@Module({
    imports: [GuitarsModule],
    controllers: [GuitarsController],
    providers: [GuitarsService],
})
export class GuitarsModule {}
