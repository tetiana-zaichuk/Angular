import { ServicesEightEntitiesModule } from './services-eight-entities.module';

describe('ComponentsEightEntitiesModule', () => {
  let servicesEightEntitiesModule: ServicesEightEntitiesModule;

  beforeEach(() => {
    servicesEightEntitiesModule = new ServicesEightEntitiesModule();
  });

  it('should create an instance', () => {
    expect(servicesEightEntitiesModule).toBeTruthy();
  });
});
