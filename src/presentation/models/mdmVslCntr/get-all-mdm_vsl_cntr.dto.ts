import { MdmVslCntr } from '../../../infrastructure/database/entities';

export class GetAllMdmVslCntrDto {
  readonly data: Array<MdmVslCntr>;
  readonly total: number;
  readonly currentPage: number;
  readonly nextPage: number;
  readonly prevPage: number;
}
