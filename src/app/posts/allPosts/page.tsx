'use client';

import useDateFilter from '@/app/utils/hooks/useDateFilter';
import { allPosts as posts } from 'contentlayer/generated';
import { PostCard } from '@/app/components/previewPosts';
import PostsFilter from '@/app/components/PostsFilter';

export default function AllPosts() {
  const { filter, setFilter, filteredPosts } = useDateFilter(posts);

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='font-bold'>All posts</h2>
        {posts.length > 1 && (
          <PostsFilter filter={filter} setFilter={setFilter} />
        )}
      </div>
      <ol>
        {filteredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </ol>
    </section>
  );
}
