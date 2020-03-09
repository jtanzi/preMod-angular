import { createAction, props } from '@ngrx/store';

export const resetPassword = createAction(
  '[Forgot Password] ResetPassword',
  props<{ username: string; }>()
);
