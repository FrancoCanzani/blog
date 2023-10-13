'use client';

import { PostCard } from '@/app/components/previewPosts';
import { Post, allPosts } from 'contentlayer/generated';
import { usePathname } from 'next/navigation';
import PostsFilter from '@/app/components/PostsFilter';
import useDateFilter from '@/app/utils/hooks/useDateFilter';

// This is a catch all route that takes the param to filter the posts
export default function Topic() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const topic = parts[parts.length - 1].replaceAll('_', ' ');

  const filteredPostsByTopic = allPosts.filter(
    (post: Post) =>
      post.keywords?.some(
        (keyword) => keyword.trim().toLowerCase() === topic.toLowerCase()
      )
  );

  const { filter, setFilter, filteredPosts } =
    useDateFilter(filteredPostsByTopic);

  return (
    <section>
      <h2 className='uppercase mb-6 text-xl font-bold'>
        Topics {'>'} {topic}
      </h2>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-base font-semibold'>Posts about this topic:</h3>
        {filteredPostsByTopic.length > 1 && (
          <PostsFilter filter={filter} setFilter={setFilter} />
        )}
      </div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
