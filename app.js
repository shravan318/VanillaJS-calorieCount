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
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (function() {
  return {
    populateItemList: function(items) {
      let html = "";
      items.forEach(item => {
        html += `
            <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
            `;
      });
      document.querySelector("#item-list").innerHTML = html;
    }
  };
})();

//app COntroller
const App = (function(ItemCtrl, UICtrl) {
  return {
    init: function() {
      const items = ItemCtrl.getItems();

      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

//init app

App.init();
