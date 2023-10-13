import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';

export default function TopicsCovered() {
  // Initialize an empty array to store unique keywords
  const topics: string[] = [];

  allPosts.forEach((post) => {
    if (post && post.keywords) {
      post.keywords.forEach((keyword) => {
        // Use trim() to remove leading and trailing whitespace, including '\r'
        const cleanedKeyword = keyword.trim();
        if (cleanedKeyword && !topics.includes(cleanedKeyword)) {
          topics.push(cleanedKeyword.toLowerCase());
        }
      });
    }
  });

  return (
    <section className='w-full mb-6'>
      <h2 className='font-bold mb-4'>Topics covered</h2>
      <p>
        {topics.map((topic, index) => (
          <span key={topic}>
            <Link
              href={`/topics/${topic.replaceAll(' ', '_')}`}
              className='underline'
            >
              {topic}
            </Link>
            {index !== topics.length - 1 && ', '}
          </span>
        ))}
      </p>
    </section>
  );
}
