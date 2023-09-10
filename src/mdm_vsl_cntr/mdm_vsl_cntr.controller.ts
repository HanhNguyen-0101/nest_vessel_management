import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MdmVslCntrService } from './mdm_vsl_cntr.service';
import { requestPatterns } from 'src/utils/constants';
import { FilterMdmVslCntrDto } from './dto/filter-mdm_vsl_cntr.dto';

const { tables, requests } = requestPatterns;
@Controller()
export class MdmVslCntrController {
  constructor(private readonly mdmVslCntrService: MdmVslCntrService) {}

  // @MessagePattern('createMdmVslCntr')
  // create(@Payload() createMdmVslCntrDto: CreateMdmVslCntrDto) {
  //   return this.mdmVslCntrService.create(createMdmVslCntrDto);
  // }

  @MessagePattern(`${tables.mdmVslCntr}.${requests.getAll}`)
  async findAll(@Payload() query: FilterMdmVslCntrDto) {
    return await this.mdmVslCntrService.findAll(query);
  }

  // @MessagePattern('findOneMdmVslCntr')
  // findOne(@Payload() id: number) {
  //   return this.mdmVslCntrService.findOne(id);
  // }

  // @MessagePattern('updateMdmVslCntr')
  // update(@Payload() updateMdmVslCntrDto: UpdateMdmVslCntrDto) {
  //   return this.mdmVslCntrService.update(updateMdmVslCntrDto.id, updateMdmVslCntrDto);
  // }

  // @MessagePattern('removeMdmVslCntr')
  // remove(@Payload() id: number) {
  //   return this.mdmVslCntrService.remove(id);
  // }
}
