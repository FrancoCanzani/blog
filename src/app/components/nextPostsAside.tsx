import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';

export default function NextPostsAside({ post }: { post: Post }) {
  const filteredPosts: Post[] = allPosts.filter(
    (postToFilter) => postToFilter._id != post._id
  );
  return (
    <aside className='lg:flex hidden flex-col items-start'>
      <h2 className='font-bold mb-4'>Next up...</h2>
      {filteredPosts.map((post) => (
        <Link
          href={`/posts/${post._raw.flattenedPath}`}
          key={post._id}
          className='hover:underline'
        >
          {post.title} ↗
        </Link>
      ))}
    </aside>
  );
}
