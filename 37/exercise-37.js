class BankAccount {
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
        console.log(`Your current amount is: ${this.amount}`);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();