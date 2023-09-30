export default function calculateReadingTime(text: string) {
  const words = text.split(' ');

  //   The average reading rate is 238
  const readingMinutes = words.length / 238;

  return Math.round(readingMinutes);
}
