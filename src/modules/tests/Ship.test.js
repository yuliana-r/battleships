import Ship from '../Ship';

test('hitsNum returns the correct number of hits', () => {
  const testShip = new Ship('carrier', 5);
  testShip.hit();
  testShip.hit();
  expect(testShip.hitsNum).toBe(2);
});

test('isSunk() returns false if the ship is not sunk', () => {
  const testShip = new Ship('battleship', 4);
  testShip.hit();
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
});

test('isSunk() returns true if the ship is sunk', () => {
  const testShip = new Ship('cruiser', 2);
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
