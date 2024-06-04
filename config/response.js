var personsStore = stores.open('persons');
var persons = personsStore.load('persons');
respond()
    .withContent(persons);
