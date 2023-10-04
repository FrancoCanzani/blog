import SignIn from './signIn';
import CommentForm from './form/commentForm';
export default function CommentSection() {
  return (
    <section className='mt-8'>
      <div className='pt-4 pb-2 dark:border-white border-b border-black flex items-center justify-between'>
        <h2 className='font-bold text-xl'>Comments</h2>
        <SignIn />
      </div>
      <CommentForm />
    </section>
  );
}
