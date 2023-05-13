import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Проверка создания героя Bowman', () => {
  const result = new Bowman('Surik');
  expect(result).toEqual({
    name: 'Surik',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test('Проверка создания героя Daemon', () => {
  const result = new Daemon('Surik');
  expect(result).toEqual({
    name: 'Surik',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test('Проверка создания героя Magician', () => {
  const result = new Magician('Surik');
  expect(result).toEqual({
    name: 'Surik',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    deffence: 40,
  });
});

test('Проверка создания героя Swordsman', () => {
  const result = new Swordsman('Surik');
  expect(result).toEqual({
    name: 'Surik',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 40,
  });
});

test('Проверка создания героя Undead', () => {
  const result = new Undead('Surik');
  expect(result).toEqual({
    name: 'Surik',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    deffence: 25,
  });
});

test('Проверка создания героя Zombie', () => {
  const result = new Zombie('Surik');
  expect(result).toEqual({
    name: 'Surik',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    deffence: 10,
  });
});
