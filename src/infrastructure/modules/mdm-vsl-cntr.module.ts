import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MdmVslCntrService } from '../../application/use-cases';
import { MdmVslCntrController } from '../../presentation/controllers';
import { MdmVslCntr } from '../database/entities/mdm-vsl-cntr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MdmVslCntr])],
  controllers: [MdmVslCntrController],
  providers: [MdmVslCntrService],
})
export class MdmVslCntrModule {}
