// storage Controller

// Item Controller

const ItemCtrl = (function() {
  //item controller
  const item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //data structure
  const data = {
    items: [
      {
        id: 0,
        name: "Steak Dinner",
        calories: 1200
      },
      {
        id: 1,
        name: "Snack-Cookie",
        calories: 400
      },
      {
        id: 2,
        name: "Eggs",
        calories: 200
      }
    ],
    currentItem: null,
    totalCalories: 0
  };
  return {
    logData: function() {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  return {};
})();

//app COntroller
const App = (function(ItemCtrl, UICtrl) {
  return {
    init: function() {
      console.log("123");
    }
  };
})(ItemCtrl, UICtrl);

//init app

App.init();
