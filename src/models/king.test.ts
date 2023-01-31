import { King } from './king';
describe('Given a new character', () => {
  describe('When you create a new King', () => {
    test('Then if you ask his name it will return that it exists', () => {
      const king1 = new King('Pepe', 'Perez', 2, 1);
      const received = king1;
      const expected = 'name';
      expect(received).toHaveProperty(expected);
    });

    test('Then if you ask his age it will return a number', () => {
      const king2 = new King('Pepe', 'Perez', 2, 1);
      const received = king2;
      const expected = 'age';
      expect(received).toHaveProperty(expected);
    });
  });
});
