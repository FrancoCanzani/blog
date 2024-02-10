'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/sidebar';
import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';

export default function AllPosts() {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

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

  // Function to generate URL with highlighted text fragment
  const generateUrlWithFragment = (post: Post, keywords: string[]) => {
    const baseUrl = `/posts/${post._raw.flattenedPath}`;
    const fragment = `#:~:text=${encodeURIComponent(keywords.join(','))}`;
    return baseUrl + fragment;
  };

  return (
    <main className='flex flex-col items-start justify-start md:flex-row'>
      <div className='hidden lg:block'>
        <Sidebar />
      </div>
      <section className='flex-1 w-full'>
        <div className='flex items-center justify-between w-full mb-4'>
          <h2 className='font-bold'>Search post fragments</h2>
          <input
            type='text'
            placeholder='Filter by keywords...'
            className='bg-gray-100 w-fit dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border rounded-sm p-1'
            onChange={handleFilterChange}
          />
        </div>
        <p className='rounded-sm dark:bg-neutral-800 border-l-neutral-800 dark:border-l-gray-100 border-l-4 dark:text-gray-100 dark:border-gray-950 border text-sm bg-gray-100 p-2 mb-4'>
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
          is still experimental. This means that its behavior may vary across
          different browsers. As a result, you may experience differences in how
          the highlighted text fragments are displayed depending on the browser
          you are using.
        </p>

        <ol className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
          {filteredPosts.map((post) => (
            <MiniPostCard post={post} key={post._id} />
          ))}
        </ol>
      </section>
    </main>
  );
}

function MiniPostCard({ post }: { post: Post }) {
  return (
    <div className='dark:bg-neutral-800 bg-gray-100 dark:text-gray-100 dark:border-gray-950 border rounded-sm p-2.5 flex flex-col'>
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
          className='mt-2 text-base font-bold leading-tight hover:underline visited:opacity-85 text-gray-900 dark:text-gray-100'
          href={`/posts/${post._raw.flattenedPath}`}
        >
          {post.title}
        </Link>
        <p className='text-sm text-pretty'>{post.description}</p>
      </div>
    </div>
  );
}
