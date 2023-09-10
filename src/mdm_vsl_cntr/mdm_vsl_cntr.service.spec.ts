import { Test, TestingModule } from '@nestjs/testing';
import { MdmVslCntrService } from './mdm_vsl_cntr.service';

describe('MdmVslCntrService', () => {
  let service: MdmVslCntrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MdmVslCntrService],
    }).compile();

    service = module.get<MdmVslCntrService>(MdmVslCntrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
