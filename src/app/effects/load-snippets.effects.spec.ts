import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadSnippetsEffects } from './load-snippets.effects';

describe('LoadSnippetsEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadSnippetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadSnippetsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LoadSnippetsEffects>(LoadSnippetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
