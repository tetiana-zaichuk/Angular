import { ComponentsEightEntitiesModule } from './components-eight-entities.module';

describe('ComponentsEightEntitiesModule', () => {
  let componentsEightEntitiesModule: ComponentsEightEntitiesModule;

  beforeEach(() => {
    componentsEightEntitiesModule = new ComponentsEightEntitiesModule();
  });

  it('should create an instance', () => {
    expect(componentsEightEntitiesModule).toBeTruthy();
  });
});
