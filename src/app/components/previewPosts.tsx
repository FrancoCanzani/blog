import { allPosts } from 'contentlayer/generated';
import PostCard from './post-card';

export function PreviewPosts() {
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className='w-full mb-6'>
      <h2 className='font-medium mb-2 underline text-sm text-stone-700 dark:text-stone-200'>
        Entries
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {posts.map((post, idx) => (
          <li key={idx}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
