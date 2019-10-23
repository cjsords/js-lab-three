//Colin Sords

// 1. Create the AddressBook and Contact classes
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  clear() {
    this.contacts.splice(0, this.contacts.length);
    console.log("Address book cleared");
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

// 2. Create the print function.
function print(book) {
  for (const contact of book.contacts) {
    console.log(contact);
  }
}

// 3. Create one instance of AddressBook called addressBook.
let addressBook = new AddressBook();

// 4. Call the addressBook’s add method for each member of your immediate family.
addressBook.add("Mom", "mom@gmail.com", "555-555-5555", "Mother");
addressBook.add("Dad", "dad@gmail.com", "555-555-5555", "Father");
addressBook.add("Sister", "sister@gmail.com", "555-555-5555", "Sister");
addressBook.add("Milo", "dog@gmail.com", "555-555-5555", "Dog");

// 5. Call the addressBook’s deleteAt method at least once.
addressBook.deleteAt(2);

// 6. Call the print function.
print(addressBook);

// addressBook.clear();
