interface ExternalService {
    getData(): any;
  }
  
  class LegacyService {
    fetchData() {
      return { data: 'legacy data' };
    }
  }
  
  class ExternalServiceAdapter implements ExternalService {
    private legacyService: LegacyService;
  
    constructor(legacyService: LegacyService) {
      this.legacyService = legacyService;
    }
  
    getData(): any {
      return this.legacyService.fetchData();
    }
  }
  
  export { ExternalService, ExternalServiceAdapter, LegacyService };