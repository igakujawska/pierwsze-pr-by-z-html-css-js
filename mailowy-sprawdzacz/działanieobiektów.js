///ćwiczenie obiektów
const firstName1 = "Jan";
const lastName1 = "Kowalski";
const age = 30;
const person1 = {
    firstName: firstName1,
    lastName: lastName1,
    age: age1,
    city: "Warszawa",
    showHello: () => {console.log("Hello!")},
};
const person2 = {
    firstName: "Ola",
    lastName: "Makota",
    age: 27,
    adress: {
        street: "ul. Kwiatowa 5",
        city: person1.city,
        zipCode: "00-001"
    },
    showHello: () => {console.log("Hello!")},
};

const showPersonDetails = (person) => {
    console.log(`Imię: ${person.firstName}`);
    console.log(`Nazwisko: ${person.lastName}`);
    console.log(`Wiek: ${person.age}`);
}
showPersonDetails(person1);
console.groupCollapsed(person2.person1.city)