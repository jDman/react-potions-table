import Backbone from 'backbone';

import Potion from '../models/potion';

let Potions = Backbone.Collection.extend({
  url: './app/data/data.json',
  model: Potion
});

export default Potions;
