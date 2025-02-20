function getRandomChar(...chars: string[]): string {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

console.log(getRandomChar("1", "B", "999"));
