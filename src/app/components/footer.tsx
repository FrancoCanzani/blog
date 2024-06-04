export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex items-center justify-between my-6 w-full text-xs text-stone-700 dark:text-stone-200 max-w-80 m-auto'>
      <span className=''>© {year}. All Rights Reserved.</span>
      <a
        href='https://github.com/FrancoCanzani/blog'
        target='_blank'
        className='hover:underline'
      >
        Source Code
      </a>
    </footer>
  );
}
