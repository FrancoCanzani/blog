import { allPosts } from 'contentlayer/generated';
import PostCard from './post-card';
import LatestPostCard from './lastest-post-card';

export function PreviewPosts() {
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className='w-full mb-6'>
      <h2 className='font-bold mb-4'>Posts</h2>
      <LatestPostCard post={posts[0]} />
      <ul className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
        {posts.slice(1).map((post, idx) => (
          <li key={idx}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
