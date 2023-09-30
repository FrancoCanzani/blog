import { BlogPost } from '../utils/types';
import { getSortedPostsData } from '../utils/posts';
import Link from 'next/link';

export default function NextPostsAside({ post }: { post: BlogPost }) {
  const allPosts: BlogPost[] = getSortedPostsData();
  const filteredPosts = allPosts.filter(
    (postToFilter) => postToFilter.id != post.id
  );
  return (
    <aside className='lg:flex hidden flex-col items-start'>
      <h2 className='font-bold mb-4'>Next up...</h2>
      {filteredPosts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          {post.title}
        </Link>
      ))}
    </aside>
  );
}
