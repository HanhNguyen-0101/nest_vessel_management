export const microservicesConstants = {
  vesselManagement: {
    NAME: 'VESSEL_MANAGEMENT_MICROSERVICE',
    PORT: 4000,
  }
};

export const requestPatterns = {
  tables: {
    mdmVslCntr: 'mdm-vsl-cntr',
  },
  requests: {
    getOneByKey: 'get_item_by_key',
    getAll: 'get_all',
    getOneById: 'get_item',
    getOneByEmail: 'get_item_by_email',
    getOneByName: 'get_item_by_name',
    getOneByVslCd: 'get_item_by_vsl_cd',
    create: 'create',
    update: 'update',
    remove: 'remove',
  },
};
