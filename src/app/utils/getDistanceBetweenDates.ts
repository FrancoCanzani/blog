export default function getDistanceBetweenDates(date: string) {
  const date1 = new Date(date);
  const today = new Date();

  const timeDifference = today.getTime() - date1.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 1000 milliseconds, 60 seconds, 60 minutes, 24 hours

  return daysDifference;
}
