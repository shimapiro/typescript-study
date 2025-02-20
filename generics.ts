function getRandomChar<Type>(...chars: Type[]): Type {
  const index: number = Math.floor(Math.random() * chars.length);
  return chars[index];
}
console.log(getRandomChar<string>("a", "b"));
