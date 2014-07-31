var ImmutableObject = function makeImmutable(obj, preventExtension) {
  "use strict";

  var mutable = obj;
  var immutable = {};

  for (var item in mutable) {

    Object.defineProperty(immutable, item, {

      enumerable: true,
      writeable: false,
      value: mutable[item]

    });

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
