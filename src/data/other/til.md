## Javascript

### Strings

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
}``;
```
