import { Counselor } from './counselor';

describe('Given a new character', () => {
  describe('When you create a new Counselor', () => {
    test('Then if you ask his name it will return that it exists', () => {
      const counselor1 = new Counselor('Ernesto', 'Fernández', 4, 'King');
      const received = counselor1;
      const expected = 'name';
      expect(received).toHaveProperty(expected);
    });

    test('Then if you ask his age it will return a number', () => {
      const counselor2 = new Counselor('Ernesto', 'Fernández', 4, 'King');
      const received = counselor2;
      const expected = 'age';
      expect(received).toHaveProperty(expected);
    });
  });
});
