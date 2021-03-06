class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    addBack(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    addFront(value) {
        const newNode = new Node(value);
        const holdingPointer = this.head;
        this.head = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    insert(index, value) {
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currrentNode = this.head;
        while (counter !== index) {
            currrentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

//freecodecamp commit

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

//linkedlist practice

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  addBack(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  addFront(value) {
    const newNode = new Node(value);
    const holdingPointer = this.head;
    this.head = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  print() {
    let array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
    
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return "Doesn't exit";
  }
  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.print();
  }
  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
}

let ll = new LinkedList(50);
ll.addBack(51);
ll.addFront(40);
ll.addBack(52);
ll.addBack(53);
ll.insert(1, 41);
ll.search(53);
ll.remove(3)
ll.print();

//clean up code, and practice again with stacks

class Stack {
  constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top //temp hold if we still want this value
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    },
    this.tail = this.head;
    this.length = 1;
  }
  addBack(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  addFront(value) {
    const newNode = new Node(value);
    const holdingPointer = this.head;
    this.head = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  print() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let ll = new LinkedList(55);
ll.addBack(57);
ll.addFront(50);
ll.addFront(60);
ll.insert(2, 17);
ll.print();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = newNode;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  enqueue(value) {
    const newNode = newNode;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    } 
    this.length++;
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = newNode;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  enqueue(value) {
    const newNode = newNode;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    } 
    this.length++;
    return this;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = newNode;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  enqueue(value) {
    const newNode = newNode;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    } 
    this.length++;
    return this;
  }
}

class LinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null
      };
      this.tail = this.head;
      this.length = 1;
  }
  //add to the end
  append(value) {
      const newNode = {
          value: value,
          next: null
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
  }
  //add to the front
  prepend(value) {
      const newNode = {
          value: value,
          next: null
      };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }
  //specific add
  insert(index, value) {
      if (index >= this.length) {
          return this.append(value);
      }
      const newNode = {
          value: value,
          next: null
      };
      const leader = this.traverseToIndex(index -1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
  }
  traverseToIndex(index) {
      //next to check params
      if (index >= this.length) {
        return "Check your index";
      }

      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
      }
      return currentNode;
  }
  remove(index) {
      //need to check params
      if (index >= this.length) {
        return "Check your index";
      }
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this;
  }
  printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return array;
  }
  print() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
          array.push(currentNode.value) ;
          currentNode = currentNode.next;
      }
      return array;
  }
  search(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return "Doesn't exist";
}
  //reverse linkedList
  reverse() {
      if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

// main parts of linkedList

let myLinkedList = new LinkedList(10);
myLinkedList.append("initiating");
myLinkedList.append("addBack");
myLinkedList.append("addFront");
myLinkedList.append("index");
myLinkedList.append("traverseFunc");
myLinkedList.append("remove");
myLinkedList.printList();

class LinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null
      };
      this.tail = this.head;
      this.length = 1;
  }
  //add to the end
  append(value) {
      const newNode = {
          value: value,
          next: null
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
  }
  //add to the front
  prepend(value) {
      const newNode = {
          value: value,
          next: null
      };
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }
  //specific add
  insert(index, value) {
      if (index >= this.length) {
          return this.append(value);
      }
      const newNode = {
          value: value,
          next: null
      };
      const leader = this.traverseToIndex(index -1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
  }
  traverseToIndex(index) {
      //next to check params
      if (index >= this.length) {
        return "Check your index";
      }

      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
      }
      return currentNode;
  }
  remove(index) {
      //need to check params
      if (index >= this.length) {
        return "Check your index";
      }
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this;
  }
  printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return array;
  }
  print() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
          array.push(currentNode.value) ;
          currentNode = currentNode.next;
      }
      return array;
  }
  search(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return "Doesn't exist";
}
  //reverse linkedList
  reverse() {
      if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

class Node {
  constructor() {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(Value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
} //insert function

//starting here again

class Node {
  constructor() {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(Value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
} //insert function 


class Node {
  constructor() {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(value) {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(Value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
} //insert function 

//leaving my BST practice here, and starting my react courses again. Need to do something different and then i'll back!git

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
}

//5-minute practice

// #include <iostream>
// using namespace std;

// int main() {
//   cout << "Hello World!\n";
// }

//adding c++

//Switch cases
#include <iostream>
using namespace std;

enum EyeColor {Brown, Black, Red, Green, Gray};

int main() {
  EyeColor eyeColor = Brown;

  switch (eyeColor) {
    case Brown: cout << "brown"; break;
    case Black: cout << "black"; break;
    case Red: cout << "red"; break;
    case Green: cout << "green"; break;
    case Gray: cout << "gray"; break;
    default: cout << "Not Valid";
  }
}

//loop, used when you want to execute the same code multiple times or as long as a certain condition is true

int main() {
  cout << "WHILE:\n";
  int counter = 1;
  while (counter <= 10) {
    cout << counter << endl;
  }
}

#include <iostream>
using namespace std;

int main() {
  //loop practice
  //doesn't have to execute if condition is false

  cout << "WHILE:\n";
  int counter = 11;
  while (counter <= 10) {
    cout << counter << endl;
    counter++;
  }

  //always execute once

  cout << "DO-WHILE:\n";
  int dowhileCounter = 11;
  do {
    cout << dowhileCounter << endl;
    dowhileCounter++;
  } while (dowhileCounter <= 10);

}
//remembering for loops

int main() 
{
  string animals[5] = {"cat", "dog", "cow", "goat", "bee"};
  for (int i =0; i < 5; i++) {
    cout << animals[i] << endl;
  }
}

//functions - is a block of code that is organize and group together to perform a specific task
//dividing code into functions make it reusable, easier to read and maintain

//Creating function blocks
//function declation
float sum (float a, float b); //function returns value
void introduceMe(string name, int age); //function doesn't return a value
int main() 
{
  cout << sum(2.2, 5) << endl;
  introduceMe("Anna", 45);
  
}

//function definition
float sum(float a, float b) {
  return a + b;
}

void introduceMe (string name, int age) {
  cout << "My name is " << name << endl;
  cout << "I am " << age << endl;
}

//****************** another example of empty function

#include <iostream>
using namespace std;

void creditList(string name, int age);

int main() {
  creditList("Allison", 99);
}

void creditList(string name, int age) {
  cout << "my name is " << name << endl;
  cout << "my age is " << age << endl;
}

//**************************

#include <iostream>
using namespace std;

void creditList(string name, int age);

int main() {
  creditList("Allison", 99);
}

void creditList(string name, int age) {
  cout << "my name is " << name << endl;
  cout << "my age is " << age << endl;
}

//i'm officially a dad!