#ImmutableObject

ImmutableObject was created as a simple, client side Javascript way of making
immutable objects. It uses a simple set of methods for getting and setting items.
Setting items will only if you pass the `true` parameter for `isExtensible`.

##Basic Usage:

Objects you can extend
```
  var cars = {"truck": "ford", "sedan": "hyundai"};
  var immutCars = new ImmutableObject(cars, false);
  var immutableCars = immutCars.get();

  immutCars.set("economy", "honda");
  console.log(immutableCars); //logs cars with honda

```

Objects you cannot extend

```
  var desserts = {"pie": "apple", "icecream": "chocolate", "cake": "icing"};
  var immutable = new ImmutableObject(desserts, true);
  var immutableDessert = immutable.get();

  immutable.set('cookies', 'oreo');
  //results in "Uncaught TypeError: Can't add property cookies, object is not extensible"

```

###Breakdown:

1. create a new ImmutableObject with parameters (in order):
the object to create/copy, and true/false as to whether it is an extensible object or not
  - extensible object passed as "true" will mean you can add more items with `.set()`
  otherwise, by default, you will not be allowed to add more items
2. create  a variable to hold your object, and assign it with the `.get()` method.
3. if your object is extensible, you can add items and then use your variable holding your object
to see your new values

See index.html for the example
