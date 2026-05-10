export function getRandomItem<T>(items: readonly T[]): T {
  if (items.length === 0) {
    throw new Error("Cannot get a random item from an empty array.");
  }

  return items[Math.floor(Math.random() * items.length)]!;
}

export function getRandomDifferentItem<T>(items: readonly T[], currentItem: T): T {
  if (items.length <= 1) {
    return currentItem;
  }

  let candidate = currentItem;

  while (candidate === currentItem) {
    candidate = getRandomItem(items);
  }

  return candidate;
}
