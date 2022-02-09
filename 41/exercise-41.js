class BankAccount {
  _amount = 0;

  constructor(initialAmount) {
    this._amount = initialAmount;
  }

  deposit(amount) {
    try {
      if (amount < 0) {
        throw new Error("Error: Negative Amount is not allowed");
      } else {
        this._amount += amount;
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  withdraw(amount) {
    try {
      if (amount < 0) {
        throw new Error("Error: Negative Amount is not allowed");
      } else if (amount > this._amount) {
        throw new Error("Error: You can't take more then you have!");
      } else {
        this._amount -= amount;
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  view() {
    console.log(this._amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();