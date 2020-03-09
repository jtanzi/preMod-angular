import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Snippet } from '@app/models/snippet.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  database = firebase.database();

  constructor() { }

  // Get snippet

  // Create snippet
  createSnippet = ( snippet: Snippet, uid: string ) => {
    const sid = '123'; // TODO - get new sid
    this.database.ref('/snippets' + sid).set(snippet);
  }

  // Update snippet

  // Delete snippet

  // List snippets


}
