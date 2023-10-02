import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className='mb-8'>
      <h2 className='text-xl'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900'
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <div className='text-sm'>
        <Content />
      </div>
    </div>
  );
}

export default function Home() {
  const posts = allPosts;
  return (
    <div className='max-w-xl py-8 mx-auto'>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
