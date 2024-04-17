let count = 0

export function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}
