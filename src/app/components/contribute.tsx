export default function Contribute() {
  return (
    <section className='w-full mb-6'>
      <h2 className='font-bold mb-4'>Contribute</h2>
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          Contributions from the community are welcome. If you have an
          interesting topic to share, please follow the steps below to
          contribute a new post:
        </p>
        <ol>
          <li>
            Fork{' '}
            <a href='https://github.com/FrancoCanzani/blog' target='blank'>
              this
            </a>{' '}
            repository on GitHub.
          </li>
          <li>
            Create a new Markdown (MD/MDX) file in the &quot;posts&quot; folder.
          </li>
          <li>Write your post using Markdown syntax.</li>
          <li>Commit your changes to your forked repository.</li>
          <li>Create a pull request with a descriptive title and details.</li>
          <li>
            I will review your contribution and merge it if it meets the
            guidelines.
          </li>
        </ol>
        <p>Thank you for contributing! We look forward to your submissions.</p>
      </div>
    </section>
  );
}
