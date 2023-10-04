import About from './components/about';
import TopicsCovered from './components/topicsCovered';
import { PreviewPosts } from './components/previewPosts';
import Contribute from './components/contribute';

export default function Home() {
  return (
    <main className='flex relative flex-col items-center'>
      <About />
      <TopicsCovered />
      <PreviewPosts />
      <Contribute />
    </main>
  );
}
