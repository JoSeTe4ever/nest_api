import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guitar } from './models/guitar';

@Injectable()
export class GuitarsService {

  constructor(@InjectModel('Guitar') private readonly guitarModel: Model<Guitar>) {

  }

  async getGuitars(): Promise<Guitar[]> {
    return await this.guitarModel.find().exec();
  }

  async createGuitar(createGuitarDto : Guitar){
    const createdGuitar = new this.guitarModel(createGuitarDto);
    return await createdGuitar.save();
  }

  updateGuitar(guitar : Guitar) {
    
  }

  deleteGuitar(id: string){
  }

}
