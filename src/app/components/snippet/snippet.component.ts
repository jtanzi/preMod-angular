import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { editSnippet } from '@app/actions/snippet.actions';
import { Observable } from 'rxjs';
import { Snippet } from '@app/models/snippet.model';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements OnInit {
  snippet$: Observable<Snippet>;

  constructor(private store: Store<{snippet: Snippet}>) {
    this.snippet$ = store.pipe(select('snippet'));
   }

  ngOnInit() {
  }

  onEdit(snippetId: string) {
    this.store.dispatch(editSnippet({ snippetId: snippetId }));
  }

}
