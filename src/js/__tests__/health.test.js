import getArraySorted from "../health";

test.each([
  [
    [
      { name: "мечник", health: 10 },
      { name: "лучник", health: 80 },
      { name: "маг", health: 100 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
  [
    [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
  [
    [
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
  [
    [
      { name: "лучник", health: 80 },
      { name: "маг", health: 100 },
      { name: "мечник", health: 10 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
  [
    [
      { name: "маг", health: 100 },
      { name: "мечник", health: 10 },
      { name: "лучник", health: 80 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
  [
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
    [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ],
  ],
])("%o", (arr, arrSort) => {
  const result = getArraySorted(arr);
  expect(result).toEqual(arrSort);
});
