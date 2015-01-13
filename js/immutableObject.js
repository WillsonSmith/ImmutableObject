var immutableObject = function makeImmutable(obj, isExtensible) {
  "use strict";

  var mutable = obj;
  var immutable = {};

function addItem(addTo, item, val) {

  Object.defineProperty(addTo, item, {

    enumerable: true,
    writeable: false,
    value: val

  });

}

  Object.keys(mutable).forEach(function(item) {

        addItem(immutable, item, mutable[item]);

  });

  if (!isExtensible) {

    Object.preventExtensions(immutable);

  }

  return {

    get: function() {

      var returned = Object.preventExtensions(Object.create(immutable));
      //make a copy so can't direct edit with object.property = X
      //must use .set()

      return returned;

    },

    set: function(item, val) {

      addItem(immutable, item, val);

    }

  };

};
