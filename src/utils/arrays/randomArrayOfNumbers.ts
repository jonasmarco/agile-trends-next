export default function randomArrayOfNumbers(length: number) {
  return Array.from({ length }, () => Math.floor((Math.random() + 0.1) * 40))
}
