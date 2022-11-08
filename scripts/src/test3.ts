const counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};
counter.next();
console.log(counter);

const debounce = (func: (args: any[]) => void, timeout = 300) => {
  let timer: number | undefined;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, timeout);
  };
};
const saveInput = () => {
  console.log('Saving data');
};
const processChange = debounce(() => saveInput());

const add = (x: number) => (y: number) => x + y;
add(2)(3); //5

const promise1 = Promise.resolve(123);
promise1.then((value) => {
  console.log(value);
  // expected output: 123
});

const api = async () => 'wiggle';
const api2 = async () => 'wiggle';
const api3 = async () => 'wiggle';
api()
  .then((result: any) => {
    return api2();
  })
  .then((result2: any) => {
    return api3();
  })
  .then((result3: any) => {
    // do work
  })
  .catch((error: any) => {
    //handle any error that may occur before this point
  })
  .then(() => {
    //do something whether there was an error or not
    //like hiding an spinner if you were performing an AJAX request.
  });
Promise.all([api(), api2(), api3()])
  .then((result) => {
    //do work. result is an array contains the values of the three fulfilled promises.
  })
  .catch((error) => {
    //handle the error. At least one of the promises rejected.
  });

export {};
