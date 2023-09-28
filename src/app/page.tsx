import Header from './components/header';
import { getSortedPostsData } from './utils/posts';
import { Post } from './utils/types';

export default function Home() {
  const allPosts: Post[] = getSortedPostsData();

  return (
    <main className='flex relative min-h-screen flex-col items-center'>
      <Header />
      <section className='w-full'>
        <ol className='w-full lg:gap-4 grid grid-cols-1 lg:grid-cols-2'>
          {allPosts.map((post: Post) => (
            <li
              key={post.id}
              className='flex hover:scale-105 rounded-sm border-black px-3 border-2 py-2 border-b-4 border-r-4 items-center flex-col w-full'
            >
              <div className='flex items-center w-full justify-between'>
                <p>{post.title}</p>
                <strong className='text-xs underline'>{post.date}</strong>
              </div>
              <div className='flex text-xs items-center gap-2 w-full'>
                {post.keywords?.map((keyword: string) => (
                  <span
                    key={keyword}
                    className='rounded-sm bg-amber-200 px-1 py-0.5'
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
