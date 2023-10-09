import { allPosts as contentLayerPosts } from 'contentlayer/generated';
import { PostCard } from '@/app/components/previewPosts';
export default function AllPosts() {
  return (
    <section>
      <h2 className='font-bold mb-4'>All posts</h2>
      <ol>
        {contentLayerPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </ol>
    </section>
  );
}
