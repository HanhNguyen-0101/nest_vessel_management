import { PartialType } from '@nestjs/mapped-types';
import { CreateMdmVslCntrDto } from './create-mdm_vsl_cntr.dto';

export class UpdateMdmVslCntrDto extends PartialType(CreateMdmVslCntrDto) {
  id: number;
}
