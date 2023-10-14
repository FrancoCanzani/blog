import SubscriptionForm from './form/subscriptionForm';

const whatYouGet = [
  'Fresh Content: Receive the latest articles and posts directly in your inbox.',
  'Stay Informed: Stay informed about industry trends, news, and developments.',
  "Privacy: We prioritize your privacy and won't share your email address with third parties.",
];
const whatYouWontGet = [
  "Spam: We respect your inbox. You won't receive unrelated or excessive emails.",
  "Sales Pitches: We won't flood your inbox with constant sales pitches or promotions.",
];

export default function Subscribe() {
  return (
    <section id='subscribe' className='w-full my-6'>
      <h2 className='font-bold mb-4'>Subscribe</h2>
      <ul className='mb-2 prose prose-neutral dark:prose-invert'>
        <h3 className='text-sm font-medium'>You will get</h3>
        {whatYouGet.map((item) => (
          <li key={item} className='text-sm flex mb-1 items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4Z'
              />
            </svg>
            {item}
          </li>
        ))}

        <h3 className='text-sm font-medium'>You won&apos;t get</h3>
        {whatYouWontGet.map((item) => (
          <li key={item} className='text-sm mb-1 flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeWidth='1.5'
                d='m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07'
              />
            </svg>{' '}
            {item}
          </li>
        ))}
      </ul>

      <SubscriptionForm />
    </section>
  );
}
