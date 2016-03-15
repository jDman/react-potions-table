import Backbone from 'backbone';

let Potion = Backbone.Model.extend({
  defaults : {
    "_id": null,
    "index": null,
    "isStocked": false,
    "price": 0
  }
});

export default Potion;
