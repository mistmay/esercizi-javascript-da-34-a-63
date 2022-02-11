class BankAccount {
  amount = 0;

  constructor(initialAmount) {
    this.amount = initialAmount;
  }

  deposit(amount) {
    this.amount += amount;
  }

  withdraw(amount) {
    this.amount -= amount;
  }

  view() {
    console.log(this.amount);
  }
}
class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount);
  }
  deposit(amount) {
    if (this.amount >= 1000) {
      this.percentage(amount);
    }
    super.deposit(amount);
  }
  percentage(amount) {
    this.amount += (amount * 3) / 100;
  }
}
const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();