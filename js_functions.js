const mylist = [1, 2, 3, 4, 5];

const findMax = (list) => {
	//Reducer, combine into 1 value
	return list.reduce((accumulator, current) => {
      if (current >= accumulator) {
        return current;
      }
    },-1000000);
};


const add = (list) => {
	//Reducer, combine into 1 value
	return list.reduce((accumulator, current) => {

		return accumulator + current;
	}, 0);
};

const addOld = (list) => {
	let current = 0;
	for (var i = 0; i < list.length; i++) {
		current += list[i];
	}

	return current;
}

const findAboveValue = (list, threshold) => {
  //filter. filter out values
  return list.filter(item => {
    return item >= threshold;
  });
};

console.log(findMax(mylist));
console.log(findAboveValue(mylist, 3));


const myHobbits = [
  {age:44,name:'Frodo', id: 1},
  {age:36,name:'Samwise', id: 2},
  {age:111,name:'Bilbo', id: 3},
  {age:35,name:'Merry', id: 4},
];

const mapHobbits = (list, property) => {
  return list.map(item => {
    return item[property];
  });
};

//Simpler notation
const mapHobbits2 = (list, property) => {
  return list.map(item => item[property]);
};

console.log(mapHobbits(myHobbits, 'name'));
console.log(mapHobbits(myHobbits, 'id'));
//What's going to happen here???
console.log(mapHobbits(myHobbits, 'age'));

//Now we can combine these together!
const mapHobbitsAndFilterId = (list, threshold) => {
  return list.map(item => item.id)
    .filter(item => item > threshold);
};

const findAverageHobbitAge = (list) => {
	if (list.length === 0) {
		throw new Error("Hobbit list cannot be empty!");
	}

	return list.map(item => item.age)
		.reduce((acc, curr) => acc + curr)/list.length;
}

console.log(mapHobbitsAndFilterId(myHobbits, 2));


const result2 = myHobbits.forEach(hobbit => {
  console.log("hobbit's name is: ", hobbit.name);
});

//What will result be?
console.log(result);
//undefined
//forEach loops don't return anything!
