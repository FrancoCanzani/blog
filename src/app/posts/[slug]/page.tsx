import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post: any) => ({ slug: post._raw.flattenedPath }));
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
      <article>
        <MDXContent />
      </article>
    </div>
  );
};

export default PostLayout;
