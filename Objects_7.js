// Build Object for Employees: An employee can be represented as an object with attributes such as 
// name, age, salary, and job title. It can also have functions like work, take a break, and attend a meeting.
const Employee = {
    name: 'Touheda',
    age: 22,
    salary: 80000,
    jobTitle: 'Software Developer',
    work: function() {
      console.log(`${Employee.name} is working.`);
    },
    takeBreak: function() {
      console.log(`${Employee.name} is taking a break.`);
    },
    attendMeeting: function() {
      console.log(`${Employee.name} is attending a meeting.`);
    }
  };
  console.log(Employee);
  Employee.work()
  Employee.takeBreak()
  Employee.attendMeeting()
  
// Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as 
// account number, balance, and account type. It can also have functions like deposit, withdraw, and transfer.

  const BankAccount = {
    accountNumber: '2345678',
    balance: 10000,
    accountType: 'Checking',
    deposit: function() {
      console.log(`Deposited $${BankAccount.balance} into account ${BankAccount.accountNumber}.`);
    },
    withdraw: function() {
        console.log(`Withdraw $${BankAccount.balance} in account ${BankAccount.accountNumber}`)
    },
    transfer: function() {
      console.log(`Transferred $${BankAccount.balance} from account ${BankAccount.accountNumber} to account X.`)
    }
  };
  console.log(BankAccount);
  BankAccount.deposit()
  BankAccount.withdraw()
  BankAccount.transfer()

  // Build Object for  Dogs: A dog can be represented as an object with attributes such as 
//   breed, age, and color. It can also have functions like bark, wag tail, and fetch.
  const Dog = {
    breed: 'Chihuahua',
    age: 4,
    color: 'Black',
    bark: function() {
      console.log(`${Dog.breed} dog is barking.`);
    },
    wagTail: function() {
      console.log(`${Dog.breed} dog is wagging its tail.`);
    },
    fetch: function() {
      console.log(`${Dog.breed} dog is fetching the ball.`);
    }
  };
  console.log(Dog);
  Dog.bark()
  Dog.wagTail()
  Dog.fetch()
  
  // Suppose you are building an e-commerce application and you want to create a new Product object with property name, price, manufacturer, category
  const Product = {
    name: 'bottle',
    price: 20,
    manufacturer: 'Berry Global Group, Inc.',
    category: 'plastic'
  };
  console.log(Product);
  
  // Now add a description property to the Product object you created
  Product.description = 'A high-end smartphone with advanced features.';
  console.log(Product);
  
  // Suppose the price of the Product object you created earlier changes. Now the price increased by $10
  Product.price += 10;
  console.log(Product);
  
  // Remove the description property from the Product object you created earlier.
  delete Product.description;
  console.log(Product);
  
  // Suppose you are building a blog application and you want to display a list of all the blog posts. 
//   You have an array of blog post objects, where each object has properties such as title, author, date, 
//   and content. Find out if date field is empty on any object
  const blogPosts = [
    {
      title: 'First Post',
      author: 'John Doe',
      date: '2023-05-28',
      content: 'This is the first blog post.'
    },
    {
      title: 'Second Post',
      author: 'Jane Smith',
      date: '',
      content: 'This is the second blog post.'
    },
    {
      title: 'Third Post',
      author: 'Sam Johnson',
      date: '2023-05-30',
      content: 'This is the third blog post.'
    }
  ];
  
  // Check if date field is empty on any object
  let isEmptyDate = false;

for (let i = 0; i < blogPosts.length; i++) {
  if (blogPosts[i].date === '') {
    isEmptyDate = true;
    break;
  }
}

console.log(`Is there any blog post with an empty date field? ${isEmptyDate}`);
