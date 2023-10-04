import { Test, TestingModule } from '@nestjs/testing';
import { MdmVslCntrController } from '../../presentation/controllers';
import { MdmVslCntrService } from 'src/application/use-cases';

describe('MdmVslCntrController', () => {
  let controller: MdmVslCntrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MdmVslCntrController],
      providers: [MdmVslCntrService],
    }).compile();

    controller = module.get<MdmVslCntrController>(MdmVslCntrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
