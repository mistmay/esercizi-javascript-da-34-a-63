class BankAccount {
  _amount = 0;

  constructor(initialAmount) {
    this._amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    } else {
      this._amount += amount;
    }
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error('The amount provided cannot be negative');
    } else if (this._amount < amount) {
      throw new Error('You cannot withdraw more than account balance');
    } else {
      this._amount -= amount;
    }
  }

  view() {
    console.log(this._amount);
  }
}

const bankAccount = new BankAccount(1000);
try {
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (err) {
  console.log(err.message);
}