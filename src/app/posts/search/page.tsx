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
            className='bg-gray-50 w-fit dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border rounded-sm p-1'
            onChange={handleFilterChange}
          />
        </div>
        <p className='rounded-sm dark:bg-neutral-800 border-l-black dark:border-l-gray-100 border-l-4 dark:text-gray-100 dark:border-gray-950 border text-sm bg-gray-50 p-2 mb-2'>
          This search functionality just uses the{' '}
          <a
            className='text-blue-600 hover:underline'
            target='_blank'
            href='https://developer.mozilla.org/en-US/docs/Web/Text_fragments'
          >
            Text Fragments API
          </a>{' '}
          to push the search inputs to the params and redirect to the searched
          fragment.
        </p>
        <ol className='flex flex-wrap gap-2'>
          {filteredPosts.map((post) => (
            <Link
              key={post._id}
              href={generateUrlWithFragment(post, filterKeywords)}
              className='dark:bg-neutral-800 hover:underline text-sm bg-gray-50 dark:text-gray-100 dark:border-gray-950 border border-black rounded-sm p-1 flex'
            >
              {post.title}
            </Link>
          ))}
        </ol>
      </section>
    </main>
  );
}
