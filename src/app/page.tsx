import PreviewPosts from './components/previewPosts';

export default function Home() {
  return (
    <main className='flex px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 relative flex-col items-center'>
      <PreviewPosts />
    </main>
  );
}
