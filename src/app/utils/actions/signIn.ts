'use server';

import { signIn as signin } from 'auth';

export default async function signIn() {
  await signin('github');
}
