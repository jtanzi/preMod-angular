import { NgModule, InjectionToken } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const FirebaseConfigService = new InjectionToken<FirebaseConfig>('FirebaseConfig');

@NgModule()
export class FirebaseModule {

  static forRoot(config: FirebaseConfig): ModuleWithProviders {
    return {
      ngModule: FirebaseModule,
      providers: [
        {
          provide: FirebaseConfigService,
          useValue: config
        },
        FirebaseService
      ]
    };
  }
}
