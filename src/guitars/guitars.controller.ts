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

@Controller('guitars')
export class GuitarsController {
  constructor(private guitarService: GuitarsService) {}

  @Get()
  getProducts() {
    return this.guitarService.getGuitars();
  }

  @Get(':id')
  getProduct(@Param() params) {
    return this.guitarService.getGuitars().filter(p => p.id == params.id);
  }

  @Post()
  createProduct(@Body() guitar: GuitarDto) {
    console.log('create product', guitar);
    this.guitarService.createGuitar(guitar);
  }

  @Put()
  updateProduct(@Body() guitar: GuitarDto) {
    console.log('update product', guitar);
    this.guitarService.updateGuitar(guitar);
  }

  @Delete()
  deleteProduct(@Body() guitar: GuitarDto) {
    console.log('delete product', guitar.id);
    this.guitarService.deleteGuitar(guitar.id);
  }
}
