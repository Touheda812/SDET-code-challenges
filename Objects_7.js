// Build Object for Employees: An employee can be represented as an object with attributes such as 
// name, age, salary, and job title. It can also have functions like work, take a break, and attend a meeting.
const Employee = {
    name: 'Touheda',
    age: 22,
    salary: 80000,
    jobTitle: 'Software Developer',
  
    work: function() {
      console.log(`${name} is working.`);
    },
  
    takeBreak: function() {
      console.log(`${name} is taking a break.`);
    },
  
    attendMeeting: function() {
      console.log(`${name} is attending a meeting.`);
    }
  };
  
// Build Object for  Bank accounts: A bank account can be represented as an object with attributes such as 
// account number, balance, and account type. It can also have functions like deposit, withdraw, and transfer.

  const BankAccount = {
    accountNumber: '',
    balance: 0,
    accountType: '',
  
    deposit: function() {
      console.log(`Deposited $${balance} into account ${accountNumber}.`);
    },
  
    withdraw: function() {
        console.log(`Withdraw $${balance} in account ${accountNumber}`)
    },
  
    transfer(amount, destinationAccount) {
      if (balance >= amount) {
        balance -= amount;
        destinationAccount.balance += amount;
        console.log(`Transferred $${amount} from account ${accountNumber} to account ${destinationAccount.accountNumber}.`);
      } else {
        console.log(`Insufficient balance in account ${accountNumber}.`);
      }
    }
  };
  
  // Build Object for  Dogs: A dog can be represented as an object with attributes such as 
//   breed, age, and color. It can also have functions like bark, wag tail, and fetch.
  const Dog = {
    breed: '',
    age: 0,
    color: '',
  
    bark() {
      console.log(`${breed} dog is barking.`);
    },
  
    wagTail() {
      console.log(`${breed} dog is wagging its tail.`);
    },
  
    fetch() {
      console.log(`${breed} dog is fetching the ball.`);
    }
  };
  
  // Suppose you are building an e-commerce application
  const Product = {
    name: '',
    price: 0,
    manufacturer: '',
    category: ''
  };
  
  // you want to create a new Product object with property name, price, manufacturer, category
  const product = { ...Product, name: 'iPhone', price: 999, manufacturer: 'Apple', category: 'Electronics' };
  console.log(product);
  
  // Now add a description property to the Product object you created
  product.description = 'A high-end smartphone with advanced features.';
  console.log(product);
  
  // Suppose the price of the Product object you created earlier changes. Now the price increased by $10
  product.price += 10;
  console.log(product);
  
  // Remove the description property from the Product object you created earlier.
  delete product.description;
  console.log(product);
  
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
