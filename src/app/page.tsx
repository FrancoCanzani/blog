import About from './components/about';
import TopicsCovered from './components/topicsCovered';
import { PreviewPosts } from './components/previewPosts';

export default function Home() {
  return (
    <main className='flex mx-4 relative flex-col items-center'>
      <About />
      <TopicsCovered />
      <PreviewPosts />
    </main>
  );
}
