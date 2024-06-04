import signIn from '@/app/utils/actions/signIn';

export default function SignIn() {
  return (
    <form action={signIn}>
      <button
        type='submit'
        className='bg-stone-800 capitalize hover:opacity-85 text-stone-100 text-sm rounded-sm px-2 py-1'
      >
        Sign in to comment
      </button>
    </form>
  );
}
