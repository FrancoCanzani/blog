'use client';

import { PostCard } from '@/app/components/previewPosts';
import { Post, allPosts } from 'contentlayer/generated';
import { usePathname } from 'next/navigation';

export default function Topic() {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const topic = parts[parts.length - 1].replaceAll('_', ' ');

  const filteredPostsByTopic = allPosts.filter(
    (post: Post) => post.keywords?.includes(topic)
  );

  return (
    <section>
      <h2 className='uppercase mb-6 text-xl font-bold text-gray-700 dark:text-gray-100'>
        Topics / <span className='text-black dark:text-white'>{topic}</span>
      </h2>
      <h3 className='text-base font-semibold mb-4'>Posts about this topic:</h3>
      <ul>
        {filteredPostsByTopic.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
