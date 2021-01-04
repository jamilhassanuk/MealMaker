const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizer() {
    return this._courses.appetizers;
  },

  set appetizer(opt) {

  },

  get main() {
    return this._courses.mains;
  },

  set main(opt) {

  },
    
  get dessert() {
    return this._courses.desserts;
  },

  set dessert(opt) {
  
  },

  get courses() {
    return {
      appetizer: this.appetizer,
      mains: this.main,
      desserts: this.dessert
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },


  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    return dishes[Math.floor(Math.random() * dishes.length)];
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let total = appetizer.price + main.price + dessert.price;
    /*
    console.log(total);
    console.log(appetizer);
    console.log(main);
    console.log(dessert);
    */
    return `==== Meal ==== \nAppetizer: ${appetizer.name} \nMain: ${main.name} \nDessert: ${dessert.name} \nTotal: ` + total;
  }
  
}


menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Soup', 3.25);
menu.addDishToCourse('appetizers', 'Pate', 4.25);

menu.addDishToCourse('mains', 'Steak', 14.25);
menu.addDishToCourse('mains', 'Pie', 9.25);
menu.addDishToCourse('mains', 'Fish', 11.25);

menu.addDishToCourse('desserts', 'Ice-cream', 4.25);
menu.addDishToCourse('desserts', 'Cheese cake', 4.25);
menu.addDishToCourse('desserts', 'Apple pie', 4.25);

//console.log(menu.dessert);

let meal = menu.generateRandomMeal();
console.log(meal);


//console.log(menu.getRandomDishFromCourse('mains'));