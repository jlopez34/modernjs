//Iterator Example
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: true }
        }
    }
}

//Create an array of names
const namesArr = ['Sarah', 'Jaime', 'Carmen'];
//Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log('=============== Iterator Example ================ \n');
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

//Generator Example
function* sayNames(){
    yield 'Jack';
    yield 'Jill';
    yield 'Jhon';
}

const name = sayNames();
console.log('=============== Generator Example ================ \n');
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

//ID Creator
function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const gen =  createIds();
console.log(gen.next().value);
console.log(gen.next().value);
