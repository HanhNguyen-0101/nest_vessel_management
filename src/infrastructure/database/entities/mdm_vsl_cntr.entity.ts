import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MdmVslCntr {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  vsl_cd: string;
  @Column({
    nullable: true,
  })
  vsl_clss_flg: string;
  @Column({
    nullable: true,
  })
  vsl_eng_nm: string;
  @Column({
    nullable: true,
  })
  vsl_locl_nm: string;
  @Column({
    nullable: true,
    type: 'decimal',
    precision: 18,
    scale: 3,
  })
  foil_capa: number;
  @Column({
    nullable: true,
    type: 'decimal',
    precision: 18,
    scale: 3,
  })
  doil_capa: number;
  @Column({
    nullable: true,
    type: 'decimal',
    precision: 18,
    scale: 3,
  })
  frsh_wtr_capa: number;
  @Column({
    nullable: true,
  })
  call_sgn_no: string;
  @Column({
    nullable: true,
  })
  rgst_no: string;
  @Column({
    nullable: true,
  })
  phn_no: string;
  @Column({
    nullable: true,
  })
  fax_no: string;
  @Column({
    nullable: true,
  })
  tlx_no: string;
  @Column({
    nullable: true,
  })
  vsl_eml: string;
  @Column({
    nullable: true,
  })
  piclb_desc: string;
  @Column({
    nullable: true,
  })
  rgst_port_cd: string;
  @Column({
    nullable: true,
  })
  clss_no_rgst_area_nm: string;
  @Column({
    nullable: true,
  })
  vsl_clss_no: string;
  @Column({
    nullable: true,
  })
  vsl_bldr_nm: string;
  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    nullable: true,
  })
  loa_len: number;
  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    nullable: true,
  })
  lbp_len: number;
  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    nullable: true,
  })
  vsl_wdt: number;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 3,
    nullable: true,
  })
  vsl_dpth: number;
  @Column({
    type: 'decimal',
    precision: 8,
    scale: 3,
    nullable: true,
  })
  smr_drft_hgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  dwt_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  lgt_shp_tong_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  grs_rgst_tong_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  net_rgst_tong_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  pnm_gt_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  pnm_net_tong_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  suz_gt_wgt: number;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  suz_net_tong_wgt: number;
  @Column({
    nullable: true,
  })
  mn_eng_mkr_nm: string;
  @Column({
    nullable: true,
  })
  mn_eng_tp_desc: string;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 0,
    nullable: true,
  })
  mn_eng_bhp_pwr: number;
  @Column({
    nullable: true,
  })
  vsl_own_ind_cd: string;
  @Column({
    nullable: true,
  })
  vsl_rgst_cnt_cd: string;
  @Column({
    nullable: true,
  })
  vsl_bld_cd: string;
  @Column({
    nullable: true,
  })
  crr_cd: string;
  @Column({
    nullable: true,
  })
  fdr_div_cd: string;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 3,
    nullable: true,
  })
  vsl_svc_spd: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 3,
    nullable: true,
  })
  max_spd: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 3,
    nullable: true,
  })
  ecn_spd: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 0,
    nullable: true,
  })
  crw_knt: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  cntr_dzn_capa: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  cntr_op_capa: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  cntr_pnm_capa: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  cntr_vsl_clss_capa: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 0,
    nullable: true,
  })
  rf_rcpt_knt: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 0,
    nullable: true,
  })
  rf_rcpt_max_knt: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  fbd_capa: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  dpl_capa: number;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 3,
    nullable: true,
  })
  blst_tnk_capa: number;
  @Column({
    type: 'decimal',
    precision: 8,
    scale: 4,
    nullable: true,
  })
  foil_csm: number;
  @Column({
    type: 'decimal',
    precision: 8,
    scale: 4,
    nullable: true,
  })
  doil_csm: number;
  @Column({
    type: 'decimal',
    precision: 8,
    scale: 4,
    nullable: true,
  })
  frsh_wtr_csm: number;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 0,
    nullable: true,
  })
  mn_eng_rpm_pwr: number;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 0,
    nullable: true,
  })
  gnr_rpm_pwr: number;
  @Column({
    type: 'decimal',
    precision: 8,
    scale: 3,
    nullable: true,
  })
  vsl_hgt: number;
  @Column({
    nullable: true,
  })
  rgst_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_edi_nm: string;
  @Column({
    nullable: true,
  })
  co_cd: string;
  @Column({
    nullable: true,
  })
  vsl_clz_dt: string;
  @Column({
    nullable: true,
  })
  vsl_cre_ofc_cd: string;
  @Column({
    nullable: true,
  })
  vsl_delt_ofc_cd: string;
  @Column({
    nullable: true,
  })
  vsl_bld_area_nm: string;
  @Column({
    nullable: true,
  })
  gnr_mkr_nm: string;
  @Column({
    nullable: true,
  })
  gnr_tp_desc: string;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 0,
    nullable: true,
  })
  gnr_bhp_pwr: number;
  @Column({
    nullable: true,
  })
  bwthst_mkr_nm: string;
  @Column({
    nullable: true,
  })
  bwthst_tp_desc: string;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 0,
    nullable: true,
  })
  bwthst_bhp_pwr: number;
  @Column({
    type: 'decimal',
    precision: 6,
    scale: 0,
    nullable: true,
  })
  bwthst_rpm_pwr: number;
  @Column({
    nullable: true,
  })
  lloyd_no: string;
  @Column({
    nullable: true,
  })
  vsl_lnch_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_de_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_kel_ly_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_hl_no: string;
  @Column({
    type: 'decimal',
    precision: 18,
    scale: 5,
    nullable: true,
  })
  ttl_teu_knt: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 0,
    nullable: true,
  })
  vsl_htch_knt: number;
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 0,
    nullable: true,
  })
  vsl_hld_knt: number;
  @Column({
    nullable: true,
  })
  vsl_rmk: string;
  @Column({
    nullable: true,
  })
  intl_tong_certi_flg: string;
  @Column({
    type: 'decimal',
    precision: 9,
    scale: 3,
    nullable: true,
  })
  madn_voy_suz_net_tong_wgt: number;
  @Column({
    nullable: true,
  })
  vsl_sft_cstru_certi_exp_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_sft_rdo_certi_exp_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_sft_eq_certi_exp_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_lod_line_certi_exp_dt: Date;
  @Column({
    nullable: true,
  })
  vsl_derat_certi_exp_dt: Date;

  @Column()
  cre_usr_id: string;
  @CreateDateColumn()
  cre_dt: string;
  @Column()
  upd_usr_id: string;
  @UpdateDateColumn()
  upd_dt: string;

  @Column({
    default: 'N',
    nullable: true,
  })
  delt_flg: string;
  @Column({
    nullable: true,
  })
  eai_evnt_dt: Date;
  @Column({
    nullable: true,
  })
  eai_if_id: string;
  @Column({
    nullable: true,
  })
  modi_vsl_cd: string;
  @Column({
    nullable: true,
  })
  edw_upd_dt: Date;
  @Column({
    nullable: true,
  })
  modi_vsl_opr_tp_cd: string;
  @Column({
    nullable: true,
  })
  modi_ownr_nm: string;
  @Column({
    nullable: true,
  })
  modi_alln_vsl_cd: string;
  @Column({
    nullable: true,
  })
  nyk_lgcy_vsl_cd_ctnt: string;
  @Column({
    nullable: true,
  })
  mol_lgcy_vsl_cd_ctnt: string;
  @Column({
    nullable: true,
  })
  kline_lgcy_vsl_cd_ctnt: string;
  @Column({
    nullable: true,
  })
  lgcy_co_cd: string;
}