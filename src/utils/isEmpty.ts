export default function isEmpty(obj: { [key: string]: unknown }): boolean {
  for (let i in obj) return false;
  return true;
}
