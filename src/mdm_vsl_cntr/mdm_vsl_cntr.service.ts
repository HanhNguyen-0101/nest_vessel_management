import { Injectable } from '@nestjs/common';
import { FilterMdmVslCntrDto } from './dto/filter-mdm_vsl_cntr.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MdmVslCntr } from './entities/mdm_vsl_cntr.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MdmVslCntrService {
  constructor(
    @InjectRepository(MdmVslCntr)
    private mdmVslCntrRepository: Repository<MdmVslCntr>,
  ){}

  async findAll(query: FilterMdmVslCntrDto): Promise<any> {
    // const page = Number(query.page) || 1;
    // const itemPerPage = Number(query.item_per_page) || 10;
    // const skip = (page - 1) * itemPerPage;

    // // const keyword = query.search || '';
    // const [res, total] = await this.mdmVslCntrRepository.findAndCount({
    //   take: itemPerPage,
    //   skip,
    // });

    // const lastPage = Math.ceil(total / itemPerPage);
    // const nextPage = page + 1 > lastPage ? null : page + 1;
    // const prevPage = page - 1 < 1 ? null : page - 1;

    // return {
    //   data: res,
    //   total,
    //   currentPage: page,
    //   nextPage,
    //   prevPage,
    // };
    return 'connect successful!'
  }

}
