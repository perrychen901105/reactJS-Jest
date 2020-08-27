import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('begin test', () => {
  expect(1+1).toBe(2);
})
/** Matchers
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignnment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero',  () => {
  for (let a = 1; a < 10; a ++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
})

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});


// Callbacks

// function fetchData(callback) {
//   setTimeout(function () {
//     callback('peanut butter')
//   }, 1000);
// }
// Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

// test('the data is peanut butter', (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe('peanut butter');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// })


// Promises

// test('the data is peanut butter', () => {
//   return fetchData().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchData().catch(e => expect(e).toMatch('error'));
// });

// .resolves / .rejects

// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });

// Async / Await

// test('the data is peanut butter', async () => {
//   const data = await fetchData();
//   expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   expect.assertions(1);
//   try {
//     await fetchData();
//   } catch (e) {
//     expect(e).toMatch('error');
//   }
// });

// with .resolve, .reject

// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toThrow('error');
// });

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
 */

/** 
 * 
 * Mock function
 * 
*/

/**
function forEact(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);      
  }
}

test('test mock callback', () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEact([0, 1], mockCallback);
  
  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);
  
  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  
  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  
  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
  
  
})

const myMock = jest.fn();
// console.log(myMock)
const a = new myMock('a');
const b = {};
const bound = myMock.bind(b);
bound();

// console.log(myMock.mock.instances);
// > [ <a>, <b> ]

test('mock property', () => {
  expect(myMock.mock.calls.length).toBe(2);
  // // The first arg of the first call to the function was 'first arg'
  // expect(myMock.mock.calls[0][0]).toBe('first arg');

  // // The second arg of the first call to the function was 'second arg'
  // expect(myMock.mock.calls[0][1]).toBe('second arg');

  // // The return value of the first call to the function was 'return value'
  // expect(myMock.mock.results[0].value).toBe('return value');

  // // This function was instantiated exactly twice
  console.log(myMock.mock.instances)
  expect(myMock.mock.instances.length).toBe(2);

  // // The object returned by the first instantiation of this function
  // // had a `name` property whose value was set to 'test'
  // expect(myMock.mock.instances[0].name).toEqual('test');
})

test('mock return values', () => {
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());

  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  console.log(result);
  // > [11]
  console.log(filterTestFn.mock.calls);
  // > [ [11], [12] ]
})

test('jest get type', () => {
  const getType = require('jest-get-type');

  const array = [1, 2, 3];
  const nullValue = null;
  const undefinedValue = undefined;

  // prints 'array'
  console.log(getType(array));
  // prints 'null'
  console.log(getType(nullValue));
  // prints 'undefined'
  console.log(getType(undefinedValue));
})
 */