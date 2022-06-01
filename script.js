'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Kowcz Paulina Wiktoria',
  movements: [200, -200, 340, -300, -27, 50, 400, 44600],
  interestRate: 0.9,
  pin: 1997,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'PLN',
  locale: 'pl-PL',
};

const account6 = {
  owner: 'Popa Cristian Alexandru',
  movements: [2000, -2000, 3400, -300, -20, 500, 84000, -4600],
  interestRate: 1,
  pin: 1996,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'RON',
  locale: 'ro-RO',
};

const account7 = {
  owner: 'Cordos Gabriel Lorald Samuel',
  movements: [200, 7200, 340, -3000, -20, 50, 400, -2460],
  interestRate: 0.2,
  pin: 1996,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'RON',
  locale: 'ro-RO',
};
const account8 = {
  owner: 'Bezirkan Deniz',
  movements: [200, 3200, 340, -3000, -20, 50, 400, 111460],
  interestRate: 0.5,
  pin: 1997,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'TRY',
  locale: 'tr-TR',
};
const account9 = {
  owner: 'Lean Alin',
  movements: [200, 200, 3400, -3000, -20, 50, 400, -460],
  interestRate: 0.2,
  pin: 1994,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'RON',
  locale: 'ro-RO',
};
const account10 = {
  owner: 'Benea Laurentiu',
  movements: [200, 200, 3400, -3000, -20, 50, 7340.78, -460],
  interestRate: 0.2,
  pin: 1111,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'ro-RO',
};
const account11 = {
  owner: 'Culda Carmen Gabriela',
  movements: [200, 200, 3400, -3000, -20, 50, 4560.87, -460],
  interestRate: 0.2,
  pin: 1111,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'ro-RO',
};
const account12 = {
  owner: 'Kowcz Izabela',
  movements: [200, 200, 3400, -3000, -20, 50, 4560.87, -460],
  interestRate: 0.2,
  pin: 1111,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'PLN',
  locale: 'pl-PL',
};
const account13 = {
  owner: 'Benea Georgescu Valentina Ionela',
  movements: [1200, 200, 3400, -3000, -20, 450, 4560.87, -460],
  interestRate: 0.2,
  pin: 1111,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'ro-RO',
};
const account14 = {
  owner: 'Popa Cristian Ioan',
  movements: [2200, 200, 3400, -3000, -20, 50, 4560.87, -460],
  interestRate: 0.2,
  pin: 1111,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-05-27T17:01:17.194Z',
    '2022-07-30T23:36:17.929Z',
    '2022-05-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'ro-RO',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
  account11,
  account12,
  account13,
  account14,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////////////////////////// Functions///
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // const hour = date.getHours();
    // const min = date.getMinutes();
    // return `${day}/${month}/${year} `;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUi = function (acc) {
  displayMovements(acc);
  calcPrintBalance(acc);
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    //in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //Decrease 1 second
    time--;
  };
  //set time to 5 minutes
  let time = 300;

  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// Event handlers
//
///Experiment with intl api

let currentAccount, timer;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[1]
    }`;
    containerApp.style.opacity = 100;
    // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //Clear the input Fields

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //timer
    if (timer) clearInterval(timer);

    timer = startLogOutTimer();
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //add transfer dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUi(currentAccount);
    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    setTimeout(function () {
      currentAccount.movements.push(amount);
      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      //Update ui
      updateUi(currentAccount);
      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);

  // formatMovementDate(date1, acc.locale, !sorted);
  sorted = !sorted;
});
// Fake always logged in

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/// Slice
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log(arr.slice());

// // Splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// //Reverse

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());

// /// Concat

// const letters = arr.concat(arr2);
// console.log(letters);

// // Join

// console.log(letters.join('-'));

// const arr = [23, 11, 54];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-(1)[0]));
// console.log(arr.at(-1));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// Map;
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, i, map) {
//   console.log(`${key}: ${value}`);
// });
// //Set

// const currentciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currentciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

/// Challenge #1
// const juliaDogs = [3, 5, 2, 12, 7];
// const kateDogs = [4, 1, 15, 8, 3];
// const juliaDogs2 = [9, 16, 6, 8, 2];
// const kateDogs2 = [10, 5, 6, 1, 4];
// // less than 3 = puppy else adult

// const checkDogs = function (juliaDogs, kateDogs) {
//   const onlyDogsJul = juliaDogs.slice(1, -2);
//   const bothDogs = onlyDogsJul.concat(kateDogs);
//   console.log(bothDogs);

//   bothDogs.forEach(function (dog, i) {
//     if (dog < 3) {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     } else {
//       console.log(`Dog number ${i + 1} is an adult and it's ${dog} years old`);
//     }
//   });
// };
// checkDogs(juliaDogs2, kateDogs2);

// const eurToUsd = 1.1;
// Map method//
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// //(function (mov) {
// //   return mov * eurToUsd;
// // });

// console.log(movements);
// console.log(movementsUSD);

// let movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? ' deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);
// Filter method//
// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);
// /// Reduce method////////
// const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
// console.log(balance);

// let sum = 0;
// for (const mov of movements) {
//   sum += mov;
// }

// Maximum value

// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );

// console.log(max);
// // Coding Challenge #2
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const CalcAverageHumanAge = ages =>
//   ages
//     .map(age => (age < 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(CalcAverageHumanAge(data1));
// const eurToUsd = 1.1;
// // PIPELINE
// const totalDepositsinUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsinUSD);
// The find method

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
//Equality
// console.log(movements.includes(-130));
// //Some:Condition
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);
// //Every
// console.log(movements.every(mov => mov > 0));

// Separate callback
// const deposit = mov => mov > 0;

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());

// const arrDeep = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//   ],
//   7,
//   8,
// ];
// console.log(arrDeep.flat(2));

// const x = new Array(7);
// console.log(x);
// // x.fill(1);

// x.fill(1, 3, 5);
// console.log(x);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.fill(23, 2, 6);
// console.log(arr);
// /// Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 8 }, (_, i) => i + 1);
// console.log(z);
// const movementsUi = Array.from(document.querySelectorAll('.movements__value'));

// console.log(movementsUi);

// labelBalance.addEventListener('click', function () {
//   const movementsUi = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replace('€', '')
//   );
//   console.log(movementsUi);
// });
// const diceRolls = Array.from(
//   { length: 100 },
//   (cur, i) => Math.trunc(Math.random() * 100) + 1
// );
// console.log(diceRolls);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);
//Flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);
// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);
//Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort());
// console.log(owners);
// //Numbers
// console.log(movements);
//Return < 0 , a,b(keep order)
//Return < 0, b,a(switch order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// movements.sort((a, b) => a - b);
// console.log(movements);
// Array Methods Practice
// excercise #1
// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositsSum);
// // excercise #2

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// // .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);
// // Prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);
// // Exercise #3

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);
// Exercise 4
// this is a nice title -> This is a Nice Title

// const converTitleCase = function (title) {
//   const execptions = ['a', 'an','and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       execptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1).join(' ');
//     );
//   return titleCase;
// };
// console.log(converTitleCase('this is a nice title'));
// console.log(converTitleCase('this is a long title,but not too long'));
// console.log(converTitleCase('here is another title with an EXAMPLE'));
// Challenge #4
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.forEach(dog => {
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
// });
// console.log(dogs);

// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahDog);
// if (
//   sarahDog.curFood >= sarahDog.recommendedFood * 1.1 &&
//   sarahDog.curFood <= sarahDog.recommendedFood * 0.9
// ) {
//   console.log('The dog is eating within normal range');
// } else if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
//   console.log('The dog is eating too much');
// } else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
//   console.log('The dog is eating too little');
// }
// const ownersEatTooMuch = dogs.filter(
//   dog => dog.curFood > dog.recommendedFood * 1.1
// );
// const ownersEatTooLittle = dogs.filter(
//   dog => dog.curFood < dog.recommendedFood * 0.9
// );
// console.log(ownersEatTooMuch);
// const owners = ownersEatTooMuch.flatMap(owner => owner.owners);
// console.log(`${owners}'s dogs eat too much
// `);
// const owners2 = ownersEatTooLittle.flatMap(owner => owner.owners);
// console.log(`${owners2}'s dogs eat too little`);
// const rightAmmount = dogs.some(dog => dog.curFood === dog.recommendedFood);
// console.log(rightAmmount);
// const okayAmmount = dogs.some(
//   dog =>
//     dog.curFood >= dog.recommendedFood * 0.9 &&
//     dog.curFood <= dog.recommendedFood * 1.1
// );
// console.log(okayAmmount);
// const dogsOkayAmmount = dogs.filter(
//   dog =>
//     dog.curFood >= dog.recommendedFood * 0.9 &&
//     dog.curFood <= dog.recommendedFood * 1.1
// );
// console.log(dogsOkayAmmount);
// const dogsCopy = dogs
//   .slice()
//   // .flatMap(dog => dog.recommendedFood)
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsCopy);
// console.log(23 === 23.0);

// // Parsing

// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30', 10));
// console.log(Number.parseFloat('2.5rem', 10));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN(20 / 0));

// console.log(Number.isFinite(20));
// Math

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));
// console.log(Math.max(4, 18, 23, 11, 2));
// console.log(Math.max(4, 18, '23', 11, 2));
// console.log(Math.min(4, 18, 23, 11, 2));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;
// console.log(randomInt(10, 20));
// // rounding integers

// console.log(Math.trunc(23, 3));

// console.log(Math.round(23.3));
// console.log(Math.round(23.8));
// // Rounding decimals

// console.log((2.7).toFixed(0));
// Remainder operator

// console.log(5 % 2); // 5 = 2 * 2 + 1
// console.log(8 % 3);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(6544));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = 'orangered';
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

// const diameter = 287_460_000_000;

// console.log(diameter);
// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee = 15_00;

// const PI2 = 3.14_15;
// BigInt

// console.log(23253245345643564536456456456456456456456456456456456456456456456n);
// // Operations

// console.log(100000n + 1000000000n);
// const huge = 2112494323480923850948529347982342n;
// const nume = 23;
// console.log(huge * BigInt(nume));
// console.log(20n > 15);
// console.log(20n === 20);
// // Division

// console.log(10n / 3n);
/// Dates and times

//Create a date

// const now = new Date();

// console.log(now);
// console.log(new Date('December 24 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);

// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   (date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);

// const num = 292828282.23;
// const options = {
//   style: 'currency',

//   currency: 'RON',
// };
// console.log('Romania', new Intl.NumberFormat('ro-RO', options).format(num));
// console.log('Germany', new Intl.NumberFormat('de-DE', options).format(num));

/// Timers and setTimeout
// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🍕`),
//   3000,
//   ...ingredients
// );
// console.log(`Waiting....`);

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
// /// setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(
//     `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}/ ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
//   );
// }, 1000);
