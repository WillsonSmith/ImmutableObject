var ImmutableObject = function makeImmutable(obj, preventExtension) {
  "use strict";

  var mutable = obj;
  var immutable = {};

  function addItem(addTo, item) {

    Object.defineProperty(addTo, from, item, {

      enumerable: true,
      writeable: false,
      value: from[item]

    });

  }

  for (var item in mutable) {

    addItem(immutable, mutable, item);

  }

  if (preventExtension) {

    Object.preventExtensions(immutable);

  }

  return {

    get: function() {

      var returned = Object.create(immutable);

      return Object.preventExtensions(returned);

    },

    set: function(item, val) {

      immutable[item] = val;

    }

  };

};
