import { PreviewPosts } from './components/previewPosts';

export default function Home() {
  return (
    <main className='flex flex-col items-start justify-center space-y-8'>
      <section className='w-full'>
        <p className='text-pretty'>
          This blog shares my reflections on the latest news and trends in tech,
          supply chain, and other topics I find worth writing about. These are
          my subjective views based on personal experiences. I hope you find my
          insights thought-provoking and engaging. Please share your thoughts
          and join the conversation in the comments section.
        </p>
      </section>
      <PreviewPosts />
    </main>
  );
}
