import { allPosts, Post } from 'contentlayer/generated';
import CommentSection from '@/app/components/commentSection';
import { Metadata, ResolvingMetadata } from 'next';
import BlogPost from '@/app/components/post';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post: any) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const ogImage = `https://franconotes.vercel.app/api/og?title=${post?.title}`;

  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.keywords,
    openGraph: {
      title: post?.title,
      description: post?.description,
      type: 'article',
      url: `https://franconotes.vercel.app/posts/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      images: [ogImage],
    },
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return <div>404</div>;
  } else {
    return (
      <>
        <BlogPost post={post} />
        <CommentSection postID={post._raw.flattenedPath} />
      </>
    );
  }
}
