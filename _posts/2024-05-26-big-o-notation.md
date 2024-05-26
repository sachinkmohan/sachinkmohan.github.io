---
layout: single
title: "Time Complexity and Space Complexity in Big O Notation"
date: 2024-05-26 21:15:55 +0200
categories: jekyll update
---

Today I was solving a problem on Codewars. The problem was to solve the below

```
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
```

which is also known summation of first n natural numbers.

The typical solution to this problem would be

```typescript
export const summation = (num: number) => {
  let sumInitial: number = 0;
  for (let i = 0; i <= num; i++) {
    sumInitial = i + sumInitial;
  }
  return sumInitial;
};
```

but the best practice solution would be

```typescript
export const summation = (num: number): number => {
  return (num * (num + 1)) / 2;
};
```

Efficiency improved can be justfied as follows: This above method runs in constant time O(1), making it very efficient compared to a loop-based approach, which runs in linear time O(n).

_If you have forgotten the types. Below is a short refresher 😉_

## Time Complexity

Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the length of the input. It helps us understand how the runtime of an algorithm grows as the input size grows. Time complexity is usually expressed using Big O notation.

Here are some common time complexities, from most efficient to least efficient:

1. O(1) - Constant Time: The runtime does not depend on the size of the input. No matter how large the input is, the time to complete the task remains constant.
   • Example: Accessing an element in an array by its index.
   • Code example: `return array[index]`
2. O(log n) - Logarithmic Time: The runtime grows logarithmically as the input size increases. Algorithms that halve the input size at each step typically have logarithmic time complexity.
   • Example: Binary search in a sorted array.

   • Code example: Searching for an element in a binary search tree.

3. O(n) - Linear Time: The runtime grows linearly with the input size. If the input size doubles, the runtime doubles.
   • Example: Looping through all elements in an array.

   • Code example:

```
for (let i = 0; i < array.length; i++) {
console.log(array[i]);
}
```

4. O(n log n) - Linearithmic Time: The runtime grows faster than linear time but not as fast as quadratic time. Many efficient sorting algorithms fall into this category.
   • Example: Merge sort, quicksort.
   • Code example: Sorting an array using merge sort.

5. O(n^2) - Quadratic Time: The runtime grows quadratically with the input size. If the input size doubles, the runtime increases fourfold. Often seen in algorithms with nested loops.
   • Example: Bubble sort, insertion sort.
   • Code example:

```
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log(array[i], array[j]);
  }
}
```

6. O(2^n) - Exponential Time: The runtime grows exponentially with the input size. These algorithms become impractical even for relatively small input sizes.
   • Example: Solving the traveling salesman problem using brute force.
   • Code example: Recursive algorithms solving problems by making multiple calls for each input.
7. O(n!) - Factorial Time: The runtime grows factorially with the input size, making these algorithms extremely slow and impractical for large inputs.
   • Example: Generating all permutations of a set.
   • Code example: Recursive algorithms generating permutations.

## Space Complexity

Space complexity is a measure of the amount of memory an algorithm uses as a function of the length of the input. Like time complexity, it is expressed using Big O notation. Here are some common space complexities:

1. O(1) - Constant Space: The memory usage does not depend on the input size.
   • Example: Storing a fixed number of variables.
   • Code example: let count = 0;
2. O(n) - Linear Space: The memory usage grows linearly with the input size.
   • Example: Storing an array of size n.
   • Code example: let array = new Array(n);
3. O(n^2) - Quadratic Space: The memory usage grows quadratically with the input size.
   • Example: Storing a 2D matrix of size n x n.
   • Code example: let matrix = new Array(n).fill(new Array(n));
