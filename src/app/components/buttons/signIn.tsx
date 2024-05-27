import { signIn } from 'auth';

export default function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button
        type='submit'
        className='bg-stone-800 capitalize hover:opacity-85 text-stone-100 text-sm rounded-sm px-2 py-1'
      >
        Sign in to comment
      </button>
    </form>
  );
}
