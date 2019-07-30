import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { Guitar } from './models/guitar';

@Controller('guitars')
export class GuitarsController {
  constructor(private guitarService: GuitarsService) {}

  @Get()
  getProducts() {
    return this.guitarService.getGuitars();
  }

  @Get(':id')
  getProduct(@Param() params) {
    return this.guitarService.getGuitars();
  }

  @Post()
  createProduct(@Body() guitar: Guitar) {
    this.guitarService.createGuitar(guitar);
  }

  @Put()
  updateProduct(@Body() guitar: Guitar) {
    this.guitarService.updateGuitar(guitar);
  }

  @Delete()
  deleteProduct(@Body() guitar: Guitar) {
    this.guitarService.deleteGuitar(guitar.id);
  }
}
