import mockDate from 'mockdate';

beforeAll(async () => {
  mockDate.set(new Date());
});

afterAll(async () => {
  mockDate.reset();
});