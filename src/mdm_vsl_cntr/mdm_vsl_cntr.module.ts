import { Module } from '@nestjs/common';
import { MdmVslCntrService } from './mdm_vsl_cntr.service';
import { MdmVslCntrController } from './mdm_vsl_cntr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdmVslCntr } from './entities/mdm_vsl_cntr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MdmVslCntr])],
  controllers: [MdmVslCntrController],
  providers: [MdmVslCntrService],
})
export class MdmVslCntrModule {}
