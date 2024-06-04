import ThemeSwitch from './themeSwitch';
import { Link } from 'next-view-transitions';

export default function Header() {
  return (
    <header className='text-sm flex w-full items-center font-medium justify-between'>
      <Link href={'/'} className='font-semibold capitalize hover:underline'>
        Things I think about
      </Link>
      <div className='items-center gap-3 flex'>
        <ThemeSwitch />
        <Link href={'/posts/search'} className='hover:underline'>
          Search Posts
        </Link>
      </div>
    </header>
  );
}
