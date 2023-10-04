import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MdmVslCntrService } from '../../application/use-cases/mdm-vsl-cntr.service';
import { requestPatterns } from '../../utils/constants';
import { IFilterMdmVslCntr, IMdmVslCntrModel } from '../models';

const { tables, requests } = requestPatterns;
const { mdmVslCntr } = tables;
const { getAll, getOneById, update, create, remove, getOneByVslCd } = requests;
@Controller()
export class MdmVslCntrController {
  constructor(private readonly mdmVslCntrService: MdmVslCntrService) {}

  @MessagePattern(`${mdmVslCntr}.${getAll}`)
  async findAll(@Payload() query: IFilterMdmVslCntr) {
    return await this.mdmVslCntrService.findAll(query);
  }

  @MessagePattern(`${mdmVslCntr}.${getOneById}`)
  async findOne(@Payload() id: string) {
    return await this.mdmVslCntrService.findOne(id);
  }

  @MessagePattern(`${mdmVslCntr}.${getOneByVslCd}`)
  async findOneByVslCd(@Payload() vsl_cd: string) {
    return await this.mdmVslCntrService.findOneByVslCd(vsl_cd);
  }

  @MessagePattern(`${mdmVslCntr}.${create}`)
  async create(@Payload() createMdmVslCntrDto: IMdmVslCntrModel) {
    return await this.mdmVslCntrService.create(createMdmVslCntrDto);
  }

  @MessagePattern(`${mdmVslCntr}.${update}`)
  async update(
    @Payload()
    updateData: {
      id: string;
      updateMdmVslCntrDto: IMdmVslCntrModel;
    },
  ) {
    const { id, updateMdmVslCntrDto } = updateData;
    return await this.mdmVslCntrService.update(id, updateMdmVslCntrDto);
  }

  @MessagePattern(`${mdmVslCntr}.${remove}`)
  async delete(@Payload() id: string) {
    return await this.mdmVslCntrService.delete(id);
  }
}
