import { Test, TestingModule } from '@nestjs/testing';
import { MdmVslCntrController } from './mdm_vsl_cntr.controller';
import { MdmVslCntrService } from './mdm_vsl_cntr.service';

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
