import { Injectable } from '@nestjs/common';

@Injectable()
export class GuitarsService {

  getGuitars(): GuitarDto[] {
    return [];
  }

  createGuitar(guitar : GuitarDto){

  }

  updateGuitar(guitar : GuitarDto) {

  }

  deleteGuitar(id: number){
      
  }

}
