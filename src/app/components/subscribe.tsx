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
            ✓ {item}
          </li>
        ))}

        <h3 className='text-sm font-medium'>You won&apos;t get</h3>
        {whatYouWontGet.map((item) => (
          <li key={item} className='text-sm mb-1 flex items-center'>
            ✕ {item}
          </li>
        ))}
      </ul>

      <SubscriptionForm />
    </section>
  );
}
