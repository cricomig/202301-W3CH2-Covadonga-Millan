import { Fighter } from './fighter';

describe('Given a new character', () => {
  describe('When you create a new Fighter', () => {
    test('Then if you ask his name it will return that it exists', () => {
      const fighter1 = new Fighter('Paco', 'Porras', 7, 'knive', 8);
      const received = fighter1;
      const expected = 'name';
      expect(received).toHaveProperty(expected);
    });

    test('Then if you ask his age it will return a number', () => {
      const fighter2 = new Fighter('Paco', 'Porras', 7, 'knive', 8);
      const received = fighter2;
      const expected = 'age';
      expect(received).toHaveProperty(expected);
    });
  });
});
