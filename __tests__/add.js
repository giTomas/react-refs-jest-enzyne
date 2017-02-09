function add(a, b) {
  return a + b;
};

describe('add', () => {
  it('add two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  })

  it('add three numbers', () => {
    expect(add(2, 3, 5)).toEqual(add(2,3));
  })
})
