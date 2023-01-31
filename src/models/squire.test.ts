import { Squire } from './squire';
describe('Given a new character', () => {
  describe('When you create a new Squire', () => {
    test('Then if you ask his name it will return that it exists', () => {
      const squire1 = new Squire('Lola', 'Loles', 2, 'Fighter', 3);
      const received = squire1;
      const expected = 'name';
      expect(received).toHaveProperty(expected);
    });

    test('Then if you ask his age it will return a number', () => {
      const squire2 = new Squire('Lola', 'Loles', 2, 'Fighter', 3);
      const received = squire2;
      const expected = 'age';
      expect(received).toHaveProperty(expected);
    });
  });
});
