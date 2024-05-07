var personsStore = stores.open('persons');
var persons = personsStore.loadAsJson('persons');
respond()
    .withContent(persons);
