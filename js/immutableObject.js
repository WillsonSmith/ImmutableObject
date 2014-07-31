var ImmutableObject = function makeImmutable(obj, preventExtension) {
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

  for (var item in mutable) {

    addItem(immutable, item, mutable[item]);

  }

  if (preventExtension) {

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

      Object.defineProperty(immutable, item, {

        enumerable: true,
        writeable: false,
        value: val

      });

    }

  };

};
