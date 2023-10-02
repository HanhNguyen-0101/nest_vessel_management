import { Module } from '@nestjs/common';
import { MdmVslCntrService } from '../useCases/mdm_vsl_cntr.service';
import { MdmVslCntrController } from '../controllers/mdm_vsl_cntr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdmVslCntr } from '../core/entities/mdm_vsl_cntr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MdmVslCntr])],
  controllers: [MdmVslCntrController],
  providers: [MdmVslCntrService],
})
export class MdmVslCntrModule {}
