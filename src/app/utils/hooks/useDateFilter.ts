import { useEffect, useState } from 'react';
import { Post } from 'contentlayer/generated';

function useDateFilter(posts: Post[]) {
  const [filter, setFilter] = useState<'newer' | 'older'>('newer');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    let sortedPosts = [...posts];
    if (filter === 'newer') {
      sortedPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
    } else {
      sortedPosts.sort((a, b) => (a.date < b.date ? -1 : 1));
    }
    setFilteredPosts(sortedPosts);

    // Including posts trigger an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return { filter, setFilter, filteredPosts };
}

export default useDateFilter;
