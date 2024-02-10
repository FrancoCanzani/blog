import ThemeSwitch from './themeSwitch';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='pb-1 border-b text-xs border-black dark:border-[#f6f3f1] flex mb-5 items-center font-medium justify-between w-full'>
      <Link href={'/'} className='font-semibold capitalize'>
        Things I think about
      </Link>
      <div className='items-center gap-3 flex'>
        <ThemeSwitch />
        <Link href={'/posts/search'}>[Search posts]</Link>
      </div>
    </header>
  );
}
