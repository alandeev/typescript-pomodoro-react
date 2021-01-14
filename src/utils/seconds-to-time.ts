export function secondsToTime(seconds: number): string {
  const zeroLeft = (n: number) => Math.floor(n);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
