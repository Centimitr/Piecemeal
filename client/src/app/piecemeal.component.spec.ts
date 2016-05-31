import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PiecemealAppComponent } from '../app/piecemeal.component';

beforeEachProviders(() => [PiecemealAppComponent]);

describe('App: Piecemeal', () => {
  it('should create the app',
      inject([PiecemealAppComponent], (app: PiecemealAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'piecemeal works!\'',
      inject([PiecemealAppComponent], (app: PiecemealAppComponent) => {
    expect(app.title).toEqual('piecemeal works!');
  }));
});
