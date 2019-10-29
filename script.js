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
  findByName(filterName) {
    // return this.contacts.find(contact => filterName === contact.name);
    for (const contact of this.contacts) {
      if (filterName === contact.name) {
        return contact;
      }
    }
    // for (let i = 0; i < this.contacts.length; i++) {
    //   if (filterName === this.contacts[i].name) {
    //     return this.contacts[i];
    //   }
    // }
  }
  filterByRelation(filterRelation) {
    // for (let i = 0; i < this.contacts.length; i++) {
    //   if (filterRelation === this.contacts[i].relation) {
    //     return this.contacts[i];
    //   }
    // }
    for (const contact of this.contacts) {
      if (filterRelation === contact.relation) {
        return contact;
      }
    }
  }
  listNames() {
    let justNames = [];
    // for (let i = 0; i < this.contacts.length; i++) {
    //   justNames.push(this.contacts[i].name);
    // }
    for (const contact of this.contacts) {
      justNames.push(contact.name);
    }
    return justNames;
  }
  printNames() {
    for (const contact of this.contacts) {
      console.log(contact.name);
    }
  }
  edit(oldName, name, email, phone, relation) {
    for (const contact of this.contacts) {
      if (contact.name === oldName) {
        this.contacts.splice(
          this.contacts.indexOf(contact),
          1,
          new Contact(name, email, phone, relation)
        );
      }
    }
  }
  deleteByName(deleteName) {
    for (const contact of this.contacts) {
      if (contact.name === deleteName) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
      }
    }
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

//calling extra methods
// console.log("---");
// console.log("filter by name: ", addressBook.findByName("Dad"));
// console.log("---");
// console.log("filter by relation: ", addressBook.filterByRelation("Mother"));
// console.log("---");
// console.log(addressBook.listNames());
// console.log("---printNames");
// addressBook.printNames();
// console.log("---edit");
// addressBook.edit("Mom", "New Mom", "mom@gmail.com", "555-555-5555", "New Mom");
// print(addressBook);
// console.log("---deleteByName");
// addressBook.deleteByName("Milo");
// print(addressBook);
// console.log("---clear");
// addressBook.clear();
// print(addressBook);

const form = document.querySelector(".form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );
  display();
  form.reset();
});

function display() {
  //set existing list to empty string innerhtml
  document.querySelector(".contact-display").innerHTML = "";
  const div = document.createElement("div");
  div.classList.add(".contact-display");
  addressBook.contacts.forEach((contact, index) => {
    // for (const contact of addressBook.contacts) {
    let contactCard = document.createElement("div");
    let contactRecordName = document.createElement("div");
    contactRecordName.innerText = `Name: ${contact.name}`;
    contactCard.append(contactRecordName);
    let contactRecordEmail = document.createElement("div");
    contactRecordEmail.innerText = `Email: ${contact.email}`;
    contactCard.append(contactRecordEmail);
    let contactRecordPhone = document.createElement("div");
    contactRecordPhone.innerText = `Phone: ${contact.phone}`;
    contactCard.append(contactRecordPhone);
    let contactRecordRelation = document.createElement("div");
    contactRecordRelation.innerText = `Relation: ${contact.relation}`;
    contactCard.append(contactRecordRelation);
    //
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("index", index);
    contactCard.append(deleteButton);
    //
    contactCard.classList.add("contact-card");
    document.querySelector(".contact-display").append(contactCard);
  });
}

document
  .querySelector(".contact-display")
  .addEventListener("click", deleteRecord);
function deleteRecord(event) {
  if (event.target.classList.contains("delete-button")) {
    addressBook.deleteAt(event.target.index);
    display();
  }
}

display();
