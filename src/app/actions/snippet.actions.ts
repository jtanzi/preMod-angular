import { createAction, props } from '@ngrx/store';

// Edit a snippet
export const editSnippet = createAction(
  '[Snippet] EditSnippet',
  props<{snippetId: string}>()
);

// Delete a snippet
export const deleteSnippet = createAction(
  '[Snippet] DeleteSnippet',
  props<{snippetId: string}>()
);

export const starSnippet = createAction(
  '[Snippet] starSnippet',
  props<{snippetId: string}>()
);
