import { Test, TestingModule } from '@nestjs/testing';
import { GuitarsController } from './guitars.controller';

describe('Guitars Controller', () => {
  let controller: GuitarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuitarsController],
    }).compile();

    controller = module.get<GuitarsController>(GuitarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
