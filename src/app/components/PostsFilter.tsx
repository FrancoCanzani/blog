import { Dispatch, SetStateAction } from 'react';

export default function PostsFilter({
  filter,
  setFilter,
}: {
  filter: 'newer' | 'older';
  setFilter: Dispatch<SetStateAction<'newer' | 'older'>>;
}) {
  return (
    <div className='flex text-sm items-center space-x-3'>
      <button
        onClick={() => setFilter('newer')}
        className={`${
          filter == 'newer' ? 'font-semibold' : 'text-gray-600'
        } hover:underline`}
      >
        Newer
      </button>
      <button
        onClick={() => setFilter('older')}
        className={`${
          filter == 'older' ? 'font-semibold' : 'text-gray-600'
        } hover:underline`}
      >
        Older
      </button>
    </div>
  );
}
