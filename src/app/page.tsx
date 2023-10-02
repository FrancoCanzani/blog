import PreviewPosts from './components/previewPosts';
import About from './components/about';
import TopicsCovered from './components/topicsCovered';

export default function Home() {
  return (
    <main className='flex px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 relative flex-col items-center'>
      <About />
      <TopicsCovered />
      <PreviewPosts />
    </main>
  );
}
