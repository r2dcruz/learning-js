function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert("Hi! I'm " + obj.name + '.');
    }
    return obj;
}

const terry = createNewPerson("Terry");
terry.name;
terry.greeting();