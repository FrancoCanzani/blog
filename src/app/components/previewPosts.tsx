import { allPosts } from 'contentlayer/generated';
import PostCard from './post-card';

export function PreviewPosts() {
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className='w-full mb-6'>
      <h2 className='font-medium mb-4 underline text-sm text-stone-700 dark:text-stone-200'>
        Entries
      </h2>
      <ul className='flex flex-col'>
        {posts.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
