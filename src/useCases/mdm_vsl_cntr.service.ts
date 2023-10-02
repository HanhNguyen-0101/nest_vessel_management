import { Injectable } from '@nestjs/common';
import { FilterMdmVslCntrDto } from '../core/dtos/mdmVslCntrDto/filter-mdm_vsl_cntr.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MdmVslCntr } from '../core/entities/mdm_vsl_cntr.entity';
import { ILike, Repository } from 'typeorm';
import { CreateMdmVslCntrDto } from '../core/dtos/mdmVslCntrDto/create-mdm_vsl_cntr.dto';
import { UpdateMdmVslCntrDto } from '../core/dtos/mdmVslCntrDto/update-mdm_vsl_cntr.dto';

@Injectable()
export class MdmVslCntrService {
  constructor(
    @InjectRepository(MdmVslCntr)
    private mdmVslCntrRepository: Repository<MdmVslCntr>,
  ) {}

  async findAll(query: FilterMdmVslCntrDto): Promise<any> {
    const page = query && query.page ? Number(query.page) : 1;
    const itemPerPage =
      query && query.item_per_page ? Number(query.item_per_page) : 10;
    const skip = (page - 1) * itemPerPage;

    const keyword = query && query.search ? query.search : '';
    const [res, total] = await this.mdmVslCntrRepository.findAndCount({
      where: [{ vsl_cd: ILike(`%${keyword}%`) }],
      take: query && query.page && query.item_per_page ? itemPerPage : null,
      skip,
    });

    const lastPage = Math.ceil(total / itemPerPage);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;

    return {
      data: res,
      total,
      currentPage: page,
      nextPage,
      prevPage,
    };
  }

  async findOne(id: string): Promise<MdmVslCntr> {
    return await this.mdmVslCntrRepository.findOne({
      where: { id },
    });
  }

  async findOneByVslCd(vsl_cd: string): Promise<MdmVslCntr> {
    return await this.mdmVslCntrRepository.findOneBy({ vsl_cd });
  }

  async create(createMdmVslCntrDto: CreateMdmVslCntrDto): Promise<MdmVslCntr> {
    return await this.mdmVslCntrRepository.save(createMdmVslCntrDto);
  }

  async update(
    id: string,
    updateMdmVslCntrDto: UpdateMdmVslCntrDto,
  ): Promise<MdmVslCntr> {
    await this.mdmVslCntrRepository.update(id, updateMdmVslCntrDto);
    return await this.mdmVslCntrRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<string> {
    await this.mdmVslCntrRepository.delete(id);
    return `Deleted id=${id} successfully!`;
  }
}
