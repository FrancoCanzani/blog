'use client';

import { useState, useEffect } from 'react';
import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function AllPosts() {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const topic = searchParams.get('topic');
    if (topic) {
      setFilterKeywords(topic.split(',').map((keyword) => keyword.trim()));
    } else {
      setFilterKeywords([]);
    }
  }, [searchParams]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterKeywords(
      event.target.value.split(',').map((keyword) => keyword.trim())
    );
  };

  const filteredPosts = allPosts.filter((post) => {
    if (filterKeywords.length === 0) return true;
    return filterKeywords.some(
      (keyword) =>
        post.title.toLowerCase().includes(keyword.toLowerCase()) ||
        post.description.toLowerCase().includes(keyword.toLowerCase()) ||
        post.body.raw.toLowerCase().includes(keyword.toLowerCase())
    );
  });

  return (
    <main className='flex flex-col items-start justify-start'>
      <section className='flex-1 w-full'>
        <div className='flex items-end justify-between w-full mb-4 text-sm'>
          <h2 className='font-medium capitalize underline text-stone-700 dark:text-stone-200'>
            Search posts
          </h2>
          <input
            type='text'
            placeholder='Filter by keywords...'
            className='bg-stone-100 rounded-sm w-fit dark:bg-stone-800 dark:text-stone-100 placeholder:dark:text-stone-200 placeholder:text-stone-400 p-1'
            onChange={handleFilterChange}
          />
        </div>
        <p className='rounded-sm dark:bg-stone-800 border-l-stone-800 dark:border-l-stone-100 border-l-4 dark:text-stone-100 text-sm bg-stone-100 p-2 mb-4'>
          This search functionality utilizes the{' '}
          <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://developer.mozilla.org/en-US/docs/Web/Text_fragments'
          >
            Text Fragments API
          </a>{' '}
          to push the search inputs to the parameters and redirect to the
          searched fragment. Please note that the styling with{' '}
          <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/::target-text'
          >
            ::target-text
          </a>{' '}
          is still experimental and you may experience differences in how the
          highlighted text fragments are displayed depending on the browser you
          are using.
        </p>

        <ol className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <MiniPostCard
                post={post}
                filterKeywords={filterKeywords}
                key={post._id}
              />
            ))
          ) : (
            <p className='text-center w-full'>
              No posts found with the keyword:{' '}
              <span className='underline'>{filterKeywords}</span>
            </p>
          )}
        </ol>
      </section>
    </main>
  );
}

function MiniPostCard({
  post,
  filterKeywords,
}: {
  post: Post;
  filterKeywords: string[];
}) {
  // Function to generate URL with highlighted text fragment
  const generateUrlWithFragment = (post: Post, keywords: string[]) => {
    const baseUrl = `/posts/${post._raw.flattenedPath}`;
    const fragments = keywords
      .map((keyword) => `text=${encodeURIComponent(keyword)}`)
      .join('&');
    return `${baseUrl}#:~:${fragments}`;
  };

  return (
    <div className='dark:text-stone-100 p-2 border border-stone-300 rounded-sm flex flex-col'>
      <div className='flex items-start flex-col justify-between space-y-1'>
        <ul className='flex flex-wrap items-center justify-start text-xs capitalize space-x-1'>
          {post.keywords?.map((keyword, index) => (
            <li key={keyword} className='inline-block'>
              {keyword}
              {index !== post.keywords.length - 1 && ','}
            </li>
          ))}
        </ul>
        <Link
          className='mt-2 text-base font-bold leading-tight hover:underline visited:opacity-85 text-stone-900 dark:text-stone-100'
          href={generateUrlWithFragment(post, filterKeywords)}
        >
          {post.title}
        </Link>
        <p className='text-sm text-pretty'>{post.description}</p>
      </div>
    </div>
  );
}
