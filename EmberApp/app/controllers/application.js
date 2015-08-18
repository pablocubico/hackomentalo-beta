//a property of application controller
import Ember from 'ember';

export default Ember.Controller.extend({
  color: [ "aqua", "blue", "navy", "teal", "green", "olive", "lime", "yellow", "orange", "red", "fuchsia", "purple", "maroon", "white", "silver", "gray", "black" ][Math.floor(Math.random() * 16)]

});