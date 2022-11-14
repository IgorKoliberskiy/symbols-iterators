import Team from '../app';

test('Iterable objects of class Team', () => {
  const team = new Team();
  const result = [];
  for (const item of team) {
    console.log(item);
    result.push(item);
  }
  const toBe = [
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    }, {
      name: 'Демон',
      type: 'Daemon',
      health: 60,
      level: 2,
      attack: 50,
      defence: 20,
    }, {
      name: 'Маг',
      type: 'Magician',
      health: 70,
      level: 3,
      attack: 30,
      defence: 20,
    },
  ];
  expect(result).toEqual(toBe);
});