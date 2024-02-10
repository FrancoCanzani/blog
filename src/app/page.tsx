import { PreviewPosts } from './components/previewPosts';
import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <main className='flex flex-col items-start justify-center md:flex-row'>
      <Sidebar />
      <div className='flex-1'>
        <PreviewPosts />
      </div>
    </main>
  );
}
