## Javascript

### Regex

pattern - /pattern/

flags - g (global) -> /pattern/g

Shortcuts:

- \d - any digit [0-9]
- \s - whitespace
- \w - word character [a-zA-Z0-9_]

Quantifiers:

- (-) - one or more
- (\*) - zero or more

### Strings

#### Removing whitespace

```js
"hello world".replace(/ /g, ""); // output - helloworld using regex

"hello world".replaceAll(" ", ""); // output - helloworld, similar to regex

"hello world".split(" ").join(""); // output - helloworld
```

#### Loop

```js
const fruit = "cat";
for (const c of fruit) {
  console.log("single character", c);
}

/* Output
single character c
single character a
single character t */
```

#### Join

```js
const c = ["c", "a", "t"];
c.join(""); // cat
```

## TypeScript

#### Type safety on Objects

The below means, this object can have any **string** as a key and output will be a **string**.

```ts
const lookUp: { [key: string]: string } = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};
```
