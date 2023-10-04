import { Module } from '@nestjs/common';
import { MdmVslCntrController } from '../../presentation/controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdmVslCntr } from '../database/entities/mdm_vsl_cntr.entity';
import { MdmVslCntrService } from '../../application/use-cases';

@Module({
  imports: [TypeOrmModule.forFeature([MdmVslCntr])],
  controllers: [MdmVslCntrController],
  providers: [MdmVslCntrService],
})
export class MdmVslCntrModule {}
