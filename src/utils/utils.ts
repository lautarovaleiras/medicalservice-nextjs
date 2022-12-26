export default function prettyNumber(number:number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const getInitials = (name = '') => name
  .replace(/\s+/, ' ')
  .split(' ')
  .slice(0, 2)
  .map((v) => v && v[0].toUpperCase())
  .join('');
