import { getAllPostIds, getPostData } from '@/app/utils/posts';

export async function generateStaticParams() {
  const postsIDs = getAllPostIds();

  return postsIDs.map((params) => ({
    slug: params,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />;
}
