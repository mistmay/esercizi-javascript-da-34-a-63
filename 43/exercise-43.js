class NegativeAmountError extends Error {
  name = "Negative Amount Error";
  message = "The amount provided cannot be negative";
  stack = "Personalized Stack - not useful at all"
}
class WithdrawNotPermittedError extends Error {
  name = "Withdraw not Permitted Error";
  message = "You cannot withdraw more than account balance";
  stack = "Personalized Stack - not useful at all"
}
class BankAccount {
  _amount = 0;

  constructor(initialAmount) {
    this._amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    this._amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError('The amount provided cannot be negative'); // Use custom Error class
    }

    if (this._amount < amount) {
      throw new WithdrawNotPermittedError('You cannot withdraw more than account balance'); // Use custom Error class
    }

    this._amount -= amount;
  }

  view() {
    console.log(this._amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations', e);
}