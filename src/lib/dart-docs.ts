export interface DartDocTopic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  content: string;
}

export const dartTopics: DartDocTopic[] = [
  {
    slug: "introduction",
    title: "Introduction to Dart",
    description: "Overview of Dart language, its history, and key features.",
    icon: "info",
    order: 1,
    content: `Dart is a client-optimized programming language developed by Google for building fast applications on any platform. It was first unveiled in 2011 and has since become the primary language for Flutter framework.

## Key Features

- **Optimized for UI**: Dart provides a unique combination of features for building user interfaces, including hot reload, sound null safety, and a rich type system.
- **Ahead-of-Time (AOT) Compilation**: Dart code can be compiled to native machine code for fast startup and predictable performance.
- **Just-in-Time (JIT) Compilation**: During development, Dart uses JIT compilation with hot reload for a fast iteration cycle.
- **Portable**: Dart compiles to ARM and x64 machine code for mobile, desktop, and backend; and to JavaScript for the web.

## Architecture Overview

![Dart Platform Architecture](https://raw.githubusercontent.com/flutter/flutter/main/docs/engine/flutter_overview.svg?sanitize=true)

The diagram above shows how Dart fits into the full application stack: the Dart app and framework sit on top of the engine (Dart VM, graphics, text layout, I/O) and platform embedder, enabling deployment to mobile, desktop, and web.

## Why Dart?

Dart is designed to be familiar and approachable for developers coming from languages like Java, JavaScript, C#, and Kotlin. It combines the best of both compiled and interpreted languages, offering high performance without sacrificing developer productivity.

## Hello World

\`\`\`dart
void main() {
  print('Hello, Dart!');
}
\`\`\`

Every Dart program starts with a \`main()\` function. The \`print()\` function outputs text to the console.`,
  },
  {
    slug: "variables",
    title: "Variables & Data Types",
    description: "Understanding variables, type inference, and built-in data types.",
    icon: "type",
    order: 2,
    content: `Dart is a statically typed language with type inference. You can declare variables in several ways.

## Variable Declaration

\`\`\`dart
// Explicit type
String name = 'Alice';
int age = 30;

// Type inference with var
var city = 'New York';  // inferred as String
var count = 42;         // inferred as int

// Dynamic type (use sparingly)
dynamic value = 'hello';
value = 123;  // allowed

// Final and const
final email = 'alice@example.com';  // set once at runtime
const pi = 3.14159;                  // compile-time constant
\`\`\`

## Built-in Data Types

Dart provides several built-in data types:

- **int**: Integer values (e.g., \`42\`, \`-10\`)
- **double**: Floating-point numbers (e.g., \`3.14\`, \`-0.5\`)
- **num**: Supertype of both int and double
- **String**: UTF-16 encoded text (e.g., \`'hello'\`, \`"world"\`)
- **bool**: Boolean values (\`true\` or \`false\`)
- **List**: Ordered collection of items
- **Set**: Unordered collection of unique items
- **Map**: Key-value pairs
- **Rune**: Unicode code points
- **Symbol**: Opaque name identifier

## Strings

\`\`\`dart
// Single or double quotes
var s1 = 'Single quotes';
var s2 = "Double quotes";

// String interpolation
var name = 'Alice';
var greeting = 'Hello, $name!';
var calc = 'Sum: ${2 + 3}';

// Multi-line strings
var multi = '''This is
a multi-line
string.''';

// Raw strings
var raw = r'No \n escape';
\`\`\`

## Numbers

\`\`\`dart
int integer = 42;
double pi = 3.14159;
num value = 100;  // can be int or double

// Type conversion
var price = '19.99';
var parsed = double.parse(price);  // 19.99
var formatted = parsed.toStringAsFixed(1);  // '20.0'
\`\`\`

## Booleans

\`\`\`dart
bool isActive = true;
bool isComplete = false;

// Only true is truthy
if (isActive) {
  print('Active');
}
\`\`\``,
  },
  {
    slug: "operators",
    title: "Operators",
    description: "Arithmetic, logical, comparison, and type operators.",
    icon: "code",
    order: 3,
    content: `Dart provides a comprehensive set of operators for various operations.

## Arithmetic Operators

\`\`\`dart
var a = 10;
var b = 3;

var sum = a + b;        // 13
var diff = a - b;       // 7
var product = a * b;    // 30
var quotient = a / b;   // 3.333... (double)
var intDiv = a ~/ b;    // 3 (integer division)
var remainder = a % b;  // 1
var neg = -a;           // -10
\`\`\`

## Increment and Decrement

\`\`\`dart
var i = 0;
i++;  // post-increment
++i;  // pre-increment
i--;
--i;
\`\`\`

## Equality and Relational Operators

\`\`\`dart
var a = 5;
var b = 10;

a == b;   // false
a != b;   // true
a > b;    // false
a < b;    // true
a >= b;   // false
a <= b;   // true
\`\`\`

## Type Operators

\`\`\`dart
var value = 'hello';
value is String;      // true
value is! int;        // true
(value as String).length;  // 5 (type cast)
\`\`\`

## Logical Operators

\`\`\`dart
bool x = true;
bool y = false;

x && y;   // false (AND)
x || y;   // true (OR)
!x;       // false (NOT)
\`\`\`

## Bitwise Operators

\`\`\`dart
var a = 5;  // 101
var b = 3;  // 011

a & b;   // 001 (1) - AND
a | b;   // 111 (7) - OR
a ^ b;   // 110 (6) - XOR
~a;      // 11111010 - NOT
a << 1;  // 1010 (10) - left shift
a >> 1;  // 10 (2) - right shift
\`\`\`

## Assignment Operators

\`\`\`dart
var a = 5;
a += 3;   // a = a + 3
a -= 2;   // a = a - 2
a *= 4;   // a = a * 4
a /= 2;   // a = a / 2
a ~/= 3;  // a = a ~/ 3
a %= 2;   // a = a % 2

// Null-aware assignment
var x;
x ??= 10;  // assigns 10 if x is null
\`\`\`

## Conditional Operators

\`\`\`dart
// Ternary
var status = isLoggedIn ? 'Welcome' : 'Login';

// Null-coalescing
var name = user ?? 'Guest';

// Cascade notation
var list = []
  ..add('a')
  ..add('b')
  ..remove('a');
\`\`\``,
  },
  {
    slug: "control-flow",
    title: "Control Flow",
    description: "Conditionals, loops, and branching in Dart.",
    icon: "git-branch",
    order: 4,
    content: `Dart provides standard control flow structures for decision making and iteration.

## If / Else

\`\`\`dart
var score = 85;

if (score >= 90) {
  print('A');
} else if (score >= 80) {
  print('B');
} else {
  print('C');
}
\`\`\`

## Switch / Case

\`\`\`dart
var command = 'open';

switch (command) {
  case 'open':
    print('Opening...');
    continue alsoClose;
  alsoClose:
  case 'close':
    print('Closing...');
    break;
  default:
    print('Unknown');
}
\`\`\`

Dart supports enhanced switch with patterns:

\`\`\`dart
var pair = (1, 'hello');

switch (pair) {
  case (1, var message):
    print('One: $message');
  case (var x, var y):
    print('$x, $y');
}
\`\`\`

## For Loops

\`\`\`dart
// Traditional for loop
for (var i = 0; i < 5; i++) {
  print(i);
}

// For-in loop
var items = ['a', 'b', 'c'];
for (var item in items) {
  print(item);
}

// For-each with callback
items.forEach((item) => print(item));
\`\`\`

## While and Do-While

\`\`\`dart
var i = 0;
while (i < 5) {
  print(i);
  i++;
}

var j = 0;
do {
  print(j);
  j++;
} while (j < 5);
\`\`\`

## Break and Continue

\`\`\`dart
for (var i = 0; i < 10; i++) {
  if (i == 5) break;      // exit loop
  if (i % 2 == 0) continue;  // skip even numbers
  print(i);  // prints: 1, 3
}
\`\`\`

## Assert

\`\`\`dart
var value = 100;
assert(value > 0, 'Value must be positive');
assert(value != null);
\`\`\``,
  },
  {
    slug: "functions",
    title: "Functions",
    description: "Function declarations, parameters, anonymous functions, and closures.",
    icon: "terminal",
    order: 5,
    content: `Functions are first-class objects in Dart. They can be assigned to variables, passed as arguments, and returned from other functions.

## Function Declaration

\`\`\`dart
// Standard function
int add(int a, int b) {
  return a + b;
}

// Expression body (shorthand)
int multiply(int a, int b) => a * b;

// Named function call
var result = add(5, 3);
\`\`\`

## Parameters

Dart supports both positional and named parameters.

### Required Positional Parameters

\`\`\`dart
void greet(String name, int age) {
  print('$name is $age years old');
}

greet('Alice', 30);
\`\`\`

### Optional Positional Parameters

\`\`\`dart
void greet(String name, [String? title]) {
  if (title != null) {
    print('$title $name');
  } else {
    print(name);
  }
}

greet('Alice');
greet('Alice', 'Dr.');
\`\`\`

### Named Parameters

\`\`\`dart
void createUser({
  required String name,
  int age = 18,
  String? email,
}) {
  print('$name, $age, $email');
}

createUser(name: 'Alice', age: 30);
createUser(name: 'Bob');
\`\`\`

## Anonymous Functions

\`\`\`dart
var list = [1, 2, 3];

// Anonymous function
list.forEach((item) {
  print(item);
});

// Arrow syntax
list.forEach((item) => print(item));
\`\`\`

## Lexical Closures

\`\`\`dart
Function makeAdder(int addBy) {
  return (int i) => addBy + i;
}

var add2 = makeAdder(2);
var add5 = makeAdder(5);

print(add2(3));  // 5
print(add5(3));  // 8
\`\`\`

## Typedef (Function Types)

\`\`\`dart
typedef Comparator<T> = int Function(T a, T b);

int sortAscending(int a, int b) => a - b;

void sort(List<int> list, Comparator<int> compare) {
  // sorting logic
}
\`\`\`

## Main Function

\`\`\`dart
// Simple main
void main() {
  print('Hello');
}

// Main with command-line arguments
void main(List<String> args) {
  print('Arguments: $args');
}
\`\`\``,
  },
  {
    slug: "collections",
    title: "Collections",
    description: "Lists, Sets, Maps, and collection operations.",
    icon: "layers",
    order: 6,
    content: `Dart provides three core collection types: List, Set, and Map.

## Lists

Lists are ordered collections of items, similar to arrays in other languages.

\`\`\`dart
// List literals
var fruits = ['apple', 'banana', 'orange'];
var numbers = [1, 2, 3, 4, 5];

// Typed list
List<String> names = ['Alice', 'Bob'];

// Empty list
var empty = <String>[];

// List operations
fruits.add('grape');          // add item
fruits.remove('banana');      // remove by value
fruits.removeAt(0);           // remove by index
fruits.insert(1, 'mango');    // insert at index
print(fruits.length);         // number of items
print(fruits[0]);             // access by index
print(fruits.contains('apple')); // check existence

// Spread operator
var all = ['a', 'b', ...fruits];

// Collection if/for
var active = [for (var f in fruits) if (f != 'banana') f];
\`\`\`

### List Methods

\`\`\`dart
var list = [3, 1, 4, 1, 5];

list.sort();                        // sort in place
var reversed = list.reversed;        // iterable reversed
list.shuffle();                      // randomize order
var first = list.first;              // first element
var last = list.last;                // last element
var sub = list.sublist(1, 3);        // sub-list
list.fillRange(0, 2, 0);            // fill with values
\`\`\`

## Sets

Sets are unordered collections of unique items.

\`\`\`dart
// Set literal
var unique = {1, 2, 3, 3, 2};  // {1, 2, 3}

// Typed set
Set<String> names = {'Alice', 'Bob'};

// Empty set
var empty = <String>{};

// Set operations
unique.add(4);
unique.remove(2);
print(unique.contains(1));  // true

// Set operations
var a = {1, 2, 3};
var b = {3, 4, 5};

var union = a.union(b);           // {1, 2, 3, 4, 5}
var intersection = a.intersection(b); // {3}
var difference = a.difference(b); // {1, 2}
\`\`\`

## Maps

Maps are key-value pairs.

\`\`\`dart
// Map literal
var scores = {
  'Alice': 95,
  'Bob': 87,
  'Charlie': 92,
};

// Typed map
Map<String, int> ages = {
  'Alice': 30,
  'Bob': 25,
};

// Empty map
var empty = <String, int>{};

// Map operations
scores['David'] = 88;    // add/update
scores.remove('Bob');     // remove by key
print(scores['Alice']);   // access by key (nullable)
print(scores.containsKey('Alice')); // check key
print(scores.containsValue(95));    // check value
print(scores.keys);       // iterable of keys
print(scores.values);     // iterable of values
print(scores.length);     // number of entries
\`\`\`

## Iterable Operations

\`\`\`dart
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map((n) => n * 2);      // (2, 4, 6, 8, 10)
var evens = numbers.where((n) => n.isEven);    // (2, 4)
var first = numbers.firstWhere((n) => n > 3);  // 4
var sum = numbers.fold(0, (a, b) => a + b);    // 15
var any = numbers.any((n) => n > 4);           // true
var all = numbers.every((n) => n > 0);         // true
\`\`\``,
  },
  {
    slug: "oop",
    title: "Object-Oriented Programming",
    description: "Classes, objects, inheritance, mixins, and interfaces.",
    icon: "box",
    order: 7,
    content: `Dart is a fully object-oriented language with classes, inheritance, mixins, and interfaces.

## Classes and Objects

\`\`\`dart
class Person {
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Named constructor
  Person.guest() : name = 'Guest', age = 0;

  // Method
  void introduce() {
    print('Hi, I am $name, $age years old');
  }
}

// Usage
var alice = Person('Alice', 30);
alice.introduce();
var guest = Person.guest();
\`\`\`

### Constructor Types

\`\`\`dart
class Point {
  double x, y;

  // Default constructor
  Point(this.x, this.y);

  // Named constructor
  Point.origin() : x = 0, y = 0;

  // Redirecting constructor
  Point.alongX(double x) : this(x, 0);

  // Factory constructor
  factory Point.fromJson(Map<String, double> json) {
    return Point(json['x']!, json['y']!);
  }
}

// Initializer list
class Rect {
  double width, height;
  double area;

  Rect(this.width, this.height) : area = width * height;
}
\`\`\`

## Inheritance

\`\`\`dart
class Animal {
  String name;
  Animal(this.name);

  void speak() => print('...');
}

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void speak() => print('$name says Woof!');
}

class Cat extends Animal {
  Cat(String name) : super(name);

  @override
  void speak() => print('$name says Meow!');
}
\`\`\`

## Abstract Classes

\`\`\`dart
abstract class Shape {
  double get area;
  void draw();
}

class Circle extends Shape {
  double radius;
  Circle(this.radius);

  @override
  double get area => 3.14159 * radius * radius;

  @override
  void draw() => print('Drawing circle');
}
\`\`\`

## Interfaces

Every class implicitly defines an interface. You can use \`implements\` to implement one or more interfaces.

\`\`\`dart
class Flyable {
  void fly() => print('Flying');
}

class Bird implements Flyable {
  @override
  void fly() => print('Bird flying');
}
\`\`\`

## Mixins

Mixins are a way to reuse code across multiple class hierarchies.

\`\`\`dart
mixin Swimmable {
  void swim() => print('Swimming');
}

mixin Breathable {
  void breathe() => print('Breathing');
}

class Duck extends Animal with Swimmable, Breathable {
  Duck(String name) : super(name);
}
\`\`\`

## Getters and Setters

\`\`\`dart
class Rectangle {
  double width, height;

  Rectangle(this.width, this.height);

  double get area => width * height;

  set scale(double factor) {
    width *= factor;
    height *= factor;
  }
}
\`\`\`

## Static Members

\`\`\`dart
class MathUtils {
  static const double pi = 3.14159;

  static int add(int a, int b) => a + b;
}

print(MathUtils.pi);
print(MathUtils.add(5, 3));
\`\`\``,
  },
  {
    slug: "null-safety",
    title: "Null Safety",
    description: "Sound null safety, nullable types, and null-aware operators.",
    icon: "shield",
    order: 8,
    content: `Dart features sound null safety, which means variables cannot contain null unless explicitly allowed.

## Nullable and Non-Nullable Types

\`\`\`dart
// Non-nullable (default)
String name = 'Alice';
name = null;  // ERROR!

// Nullable (with ?)
String? nullableName = 'Alice';
nullableName = null;  // OK
\`\`\`

## Null-Aware Operators

\`\`\`dart
String? name;

// Null-aware access
print(name?.length);  // null, not error

// Null-coalescing
var display = name ?? 'Guest';

// Null-aware assignment
name ??= 'Default';

// Null assertion (use carefully!)
var length = name!.length;
\`\`\`

## Late Variables

\`\`\`dart
// Initialized later
late String description;

description = 'Initialized now';
print(description);  // OK

// Lazy initialization
class Heavy {
  late final String data = _loadData();
  String _loadData() => 'Expensive computation';
}
\`\`\`

## Required Named Parameters

\`\`\`dart
class Config {
  final String host;
  final int port;

  Config({required this.host, this.port = 8080});
}
\`\`\`

## Working with Nullable Types

\`\`\`dart
String? getNullableText() {
  return DateTime.now().second.isEven ? 'Hello' : null;
}

// Using null-aware
var text = getNullableText();
var length = text?.length ?? 0;

// Type promotion
if (text != null) {
  print(text.length);  // automatically promoted to non-nullable
}

// Null assertion
if (text == null) return;
print(text.length);  // promoted after return
\`\`\`

## Generics and Nullability

\`\`\`dart
// Nullable type parameter
class Box<T> {
  T? content;
  Box(this.content);
}

// Non-nullable type parameter (requires T to be non-nullable)
class Container<T extends Object> {
  final T value;
  Container(this.value);
}
\`\`\`

## Best Practices

- Always prefer non-nullable types by default
- Use \`?\` only when a value can genuinely be absent
- Use \`!\` only when you are certain the value is not null
- Prefer \`??\` and \`?.\` over \`!\`
- Use \`late\` for variables that are initialized after declaration but before first use`,
  },
  {
    slug: "async",
    title: "Asynchronous Programming",
    description: "Future, Stream, async/await, and isolates.",
    icon: "zap",
    order: 9,
    content: `Dart provides excellent support for asynchronous programming through Futures, Streams, and isolates.

## Futures

A Future represents a potential value or error that will be available at some time in the future.

\`\`\`dart
// Creating a Future
Future<String> fetchData() {
  return Future.delayed(Duration(seconds: 1), () => 'Data loaded');
}

// Using .then()
fetchData().then((data) {
  print(data);
}).catchError((error) {
  print('Error: $error');
}).whenComplete(() {
  print('Done');
});
\`\`\`

## Async / Await

The \`async\` and \`await\` keywords make asynchronous code read like synchronous code.

\`\`\`dart
// Async function
Future<void> loadData() async {
  print('Loading...');
  var data = await fetchData();
  print(data);
  print('Complete');
}

// Multiple awaits
Future<void> loadAll() async {
  var user = await fetchUser();
  var posts = await fetchPosts(user.id);
  var comments = await fetchComments(posts.first.id);
  print(comments);
}
\`\`\`

### Concurrent Execution

\`\`\`dart
// Run multiple futures concurrently
Future<void> loadConcurrent() async {
  var results = await Future.wait([
    fetchData(),
    fetchMoreData(),
    fetchEvenMore(),
  ]);
  print(results);
}
\`\`\`

## Streams

A Stream is a sequence of asynchronous events.

\`\`\`dart
// Creating a stream
Stream<int> countStream(int max) async* {
  for (var i = 1; i <= max; i++) {
    yield i;
    await Future.delayed(Duration(seconds: 1));
  }
}

// Listening to a stream
var stream = countStream(5);
stream.listen((data) {
  print(data);
}, onError: (error) {
  print(error);
}, onDone: () {
  print('Stream complete');
});

// Using await for
Future<void> printStream() async {
  await for (var value in countStream(5)) {
    print(value);
  }
}
\`\`\`

### Stream Transformations

\`\`\`dart
var stream = countStream(10);

stream
  .where((n) => n.isEven)
  .map((n) => 'Number: $n')
  .listen(print);
\`\`\`

## Error Handling in Async Code

\`\`\`dart
// Try/catch with async/await
Future<void> safeLoad() async {
  try {
    var data = await fetchData();
    print(data);
  } catch (e) {
    print('Caught: $e');
  } finally {
    print('Cleanup');
  }
}

// With streams
stream.listen(print)
  ..onError((e) => print('Error: $e'))
  ..onDone(() => print('Done'));
\`\`\`

## Isolates

Isolates are independent workers that run in parallel, each with its own memory.

\`\`\`dart
import 'dart:isolate';

void heavyWork(SendPort sendPort) {
  var result = 0;
  for (var i = 0; i < 1000000000; i++) {
    result += i;
  }
  sendPort.send(result);
}

Future<void> main() async {
  var receivePort = ReceivePort();
  await Isolate.spawn(heavyWork, receivePort.sendPort);
  var result = await receivePort.first;
  print('Result: $result');
}
\`\`\``,
  },
  {
    slug: "error-handling",
    title: "Error Handling",
    description: "Exceptions, try/catch/finally, and custom error types.",
    icon: "alert-triangle",
    order: 10,
    content: `Dart uses exceptions for error handling. All exceptions are subtypes of \`Exception\` or \`Error\`.

## Try / Catch

\`\`\`dart
try {
  var result = divide(10, 0);
  print(result);
} catch (e) {
  print('Error: $e');
}
\`\`\`

### Catching Specific Exceptions

\`\`\`dart
try {
  var data = jsonDecode(invalidJson);
} on FormatException catch (e) {
  print('Invalid format: $e');
} on TypeError catch (e) {
  print('Type error: $e');
} catch (e) {
  print('Unknown error: $e');
}
\`\`\`

### Accessing Stack Trace

\`\`\`dart
try {
  throw Exception('Something went wrong');
} catch (e, stackTrace) {
  print('Error: $e');
  print('Stack trace: $stackTrace');
}
\`\`\`

## Finally

\`\`\`dart
try {
  var file = openFile();
  processFile(file);
} catch (e) {
  print('Error: $e');
} finally {
  closeFile();  // always runs
}
\`\`\`

## Throwing Exceptions

\`\`\`dart
// Throw an exception
throw FormatException('Invalid input');

// Throw any object
throw 'This is an error';

// Re-throw
try {
  doSomething();
} catch (e) {
  // Log and re-throw
  logError(e);
  rethrow;
}
\`\`\`

## Custom Exceptions

\`\`\`dart
class NetworkException implements Exception {
  final String message;
  final int statusCode;

  NetworkException(this.message, this.statusCode);

  @override
  String toString() => 'NetworkException($statusCode): $message';
}

// Usage
void fetchData() {
  throw NetworkException('Not found', 404);
}
\`\`\`

## Assertions

\`\`\`dart
// Assertions are for development only
assert(value != null, 'Value must not be null');
assert(age >= 0, 'Age cannot be negative');

// In production, assertions are ignored
\`\`\`

## Best Practices

- Use specific exception types for different error cases
- Always handle expected exceptions
- Use \`rethrow\` when you need to log but also propagate
- Prefer typed exceptions over generic ones
- Document which exceptions your functions can throw
- Use \`try/finally\` for cleanup operations`,
  },
  {
    slug: "generics",
    title: "Generics",
    description: "Generic types, constraints, and type parameters.",
    icon: "grid",
    order: 11,
    content: `Generics allow you to write code that works with multiple types while maintaining type safety.

## Why Generics?

Generics reduce code duplication and improve type safety by allowing you to parameterize types.

\`\`\`dart
// Without generics - no type safety
class Box {
  Object? content;
  Box(this.content);
}

// With generics - type safe
class Box<T> {
  T content;
  Box(this.content);
}

var stringBox = Box<String>('hello');
var intBox = Box<int>(42);
// stringBox.content = 42;  // ERROR: Type mismatch
\`\`\`

## Generic Functions

\`\`\`dart
// Generic function
T first<T>(List<T> items) {
  return items[0];
}

var num = first<int>([1, 2, 3]);
var str = first<String>(['a', 'b', 'c']);

// Type inference
var inferred = first(['x', 'y']);  // String inferred
\`\`\`

## Generic Constraints

\`\`\`dart
// Constrain to subtypes of a class
class NumberBox<T extends num> {
  T value;
  NumberBox(this.value);
}

var intBox = NumberBox<int>(5);      // OK
var doubleBox = NumberBox<double>(3.14); // OK
// var stringBox = NumberBox<String>('hello');  // ERROR

// Multiple interfaces
class DataProcessor<T extends Comparable<T>> {
  T process(T a, T b) => a.compareTo(b) > 0 ? a : b;
}
\`\`\`

## Generic Collections

\`\`\`dart
// Type-safe collections
List<int> numbers = [1, 2, 3];
Set<String> names = {'Alice', 'Bob'};
Map<String, int> scores = {
  'Alice': 95,
  'Bob': 87,
};
\`\`\`

## Generic Methods in Non-Generic Classes

\`\`\`dart
class Utils {
  static T? find<T>(List<T> items, bool Function(T) test) {
    for (var item in items) {
      if (test(item)) return item;
    }
    return null;
  }
}

var found = Utils.find<String>(['a', 'b', 'c'], (s) => s == 'b');
\`\`\`

## Using Generic Types

\`\`\`dart
class Stack<T> {
  final List<T> _items = [];

  void push(T item) => _items.add(item);
  T pop() => _items.removeLast();
  T get peek => _items.last;
  bool get isEmpty => _items.isEmpty;
}

var stack = Stack<int>();
stack.push(1);
stack.push(2);
print(stack.pop());  // 2
\`\`\`

## Type Parameters in Generics

\`\`\`dart
// Multiple type parameters
class Pair<K, V> {
  K key;
  V value;
  Pair(this.key, this.value);
}

var pair = Pair<String, int>('age', 30);

// Literal generic type
var pairs = <String, int>{'a': 1, 'b': 2};
\`\`\``,
  },
  {
    slug: "libraries",
    title: "Libraries & Packages",
    description: "Importing libraries, creating packages, and using pub.dev.",
    icon: "package",
    order: 12,
    content: `Dart code is organized into libraries and packages. Libraries provide modules of code, while packages are collections of libraries.

## Importing Libraries

\`\`\`dart
// Import core libraries
import 'dart:math';
import 'dart:convert';
import 'dart:io';
import 'dart:async';
import 'dart:collection';

// Import from packages
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

// Import relative files
import 'src/utils.dart';
import '../models/user.dart';
\`\`\`

### Import Modifiers

\`\`\`dart
// Show specific items
import 'dart:math' show pi, sin, cos;

// Hide specific items
import 'dart:io' hide Platform;

// Library prefix (namespace)
import 'package:http/http.dart' as http;
http.get(Uri.parse('https://example.com'));
\`\`\`

## Lazy Loading (Deferred)

\`\`\`dart
// Load library on demand
import 'package:heavy_package.dart' deferred as heavy;

Future<void> useHeavy() async {
  await heavy.loadLibrary();
  heavy.doSomething();
}
\`\`\`

## Creating a Library

\`\`\`dart
// lib/utils.dart
library utils;

export 'src/validators.dart';
export 'src/formatters.dart';

// src/validators.dart
bool isValidEmail(String email) {
  return email.contains('@');
}
\`\`\`

## Library Directives

\`\`\`dart
/// Library documentation
library my_library;

/// Part files (discouraged, prefer exports)
part 'src/helper.dart';

/// Export for consumers
export 'src/public_api.dart';
\`\`\`

## Pubspec.yaml

\`\`\`yaml
name: my_package
description: A useful Dart package
version: 1.0.0
environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  http: ^1.1.0
  path: ^1.8.0

dev_dependencies:
  test: ^1.24.0
  lints: ^2.0.0
\`\`\`

## Pub.dev

pub.dev is the official package repository for Dart. Common commands:

\`\`\`bash
# Add a dependency
dart pub add http

# Remove a dependency
dart pub remove http

# Update dependencies
dart pub upgrade

# Get all dependencies
dart pub get

# Publish a package
dart pub publish
\`\`\``,
  },
  {
    slug: "flutter",
    title: "Dart in Flutter",
    description: "How Dart is used in Flutter for cross-platform app development.",
    icon: "smartphone",
    order: 13,
    content: `Dart is the primary language for Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.

## Flutter App Architecture

![Flutter App Anatomy](https://raw.githubusercontent.com/flutter/flutter/main/docs/engine/app_anatomy.svg?sanitize=true)

The diagram above shows the layers of a Flutter app: the **Dart App** (your code) sits on top of the **Flutter Framework** (widgets, rendering), which runs on the **Flutter Engine** (Skia/Impeller, Dart VM, text, I/O), all hosted by a **Platform Embedder** (Android, iOS, etc.).

## Widgets Are Classes

In Flutter, everything is a widget. Widgets are Dart classes that describe the configuration for an element.

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      home: Scaffold(
        appBar: AppBar(title: const Text('Hello')),
        body: const Center(
          child: Text('Hello, Flutter!'),
        ),
      ),
    );
  }
}
\`\`\`

## Stateful and Stateless Widgets

\`\`\`dart
// Stateless widget - immutable
class MyHeader extends StatelessWidget {
  const MyHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Text('Hello');
  }
}

// Stateful widget - mutable state
class CounterWidget extends StatefulWidget {
  const CounterWidget({super.key});

  @override
  State<CounterWidget> createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count'),
        ElevatedButton(
          onPressed: () {
            setState(() => _count++);
          },
          child: const Text('Increment'),
        ),
      ],
    );
  }
}
\`\`\`

## Dart Features Used in Flutter

### Async/Await for Async Operations

\`\`\`dart
class DataWidget extends StatefulWidget {
  // ...
}

class _DataWidgetState extends State<DataWidget> {
  String? _data;

  @override
  void initState() {
    super.initState();
    _loadData();
  }

  Future<void> _loadData() async {
    var data = await fetchFromApi();
    setState(() => _data = data);
  }
}
\`\`\`

### Extension Methods

\`\`\`dart
extension ContextExtension on BuildContext {
  double get screenWidth => MediaQuery.of(this).size.width;
  double get screenHeight => MediaQuery.of(this).size.height;

  void showSnackBar(String message) {
    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }
}
\`\`\`

### Collections and Functional Programming

\`\`\`dart
// Mapping data to widgets
users.map((user) => UserCard(user: user)).toList();

// Filtering and sorting
var activeUsers = users
  .where((u) => u.isActive)
  .toList()
  ..sort((a, b) => a.name.compareTo(b.name));
\`\`\`

## Hot Reload

Hot reload is one of Flutter's most powerful features, enabled by Dart's JIT compilation:

- Changes to Dart source code are injected into the running app
- The widget tree is rebuilt with the changes
- State is preserved during reload
- Development iteration cycles are measured in milliseconds

## Dart's Influence on Flutter Architecture

- **Composition over inheritance**: Flutter uses small, composable widgets
- **Immutable configurations**: Widgets are immutable, state is managed separately
- **Reactive programming**: UI reacts to state changes via setState
- **Type safety**: Dart's sound type system catches errors at compile time`,
  },
];

export function getDartTopic(slug: string): DartDocTopic | undefined {
  return dartTopics.find((t) => t.slug === slug);
}

export function getDartTopics(): DartDocTopic[] {
  return dartTopics.sort((a, b) => a.order - b.order);
}
