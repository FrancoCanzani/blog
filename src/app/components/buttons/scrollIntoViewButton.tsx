import Link from 'next/link';

export default function ScrollIntoViewButton() {
  const handleScrollIntoView = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Link
        href={'#subscribe'}
        onClick={handleScrollIntoView}
        className='transition-all duration-200 active:translate-y-0.5'
      >
        Subscribe
      </Link>
    </div>
  );
}
