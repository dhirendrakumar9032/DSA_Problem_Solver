import { Problem } from '../types/problem';

export const problems: Problem[] = [
  {
    id: '1',
    title: 'Two Sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    category: 'Array',
    difficulty: 'easy',
    starterCode: `function twoSum(nums, target) {
    // Your code here
}`,
    solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    testCases: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        fn: (nums: number[], target: number, code: string) => {
          const result = eval(`(${code})([${nums}], ${target})`);
          return JSON.stringify(result);
        },
        params: [[2,7,11,15], 9],
        expectedResult: '[0,1]'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
        fn: (nums: number[], target: number, code: string) => {
          const result = eval(`(${code})([${nums}], ${target})`);
          return JSON.stringify(result);
        },
        params: [[3,2,4], 6],
        expectedResult: '[1,2]'
      }
    ]
  },
  {
    id: '2',
    title: 'Reverse String',
    description: 'Write a function that reverses a string.',
    category: 'String',
    difficulty: 'easy',
    starterCode: `function reverseString(str) {
    // Your code here
}`,
    solution: `function reverseString(str) {
    return str.split('').reverse().join('');
}`,
    testCases: [
      {
        input: '"hello"',
        output: '"olleh"',
        fn: (str: string, code: string) => {
          const result = eval(`(${code})("${str}")`);
          return JSON.stringify(result);
        },
        params: ['hello'],
        expectedResult: '"olleh"'
      },
      {
        input: '"world"',
        output: '"dlrow"',
        fn: (str: string, code: string) => {
          const result = eval(`(${code})("${str}")`);
          return JSON.stringify(result);
        },
        params: ['world'],
        expectedResult: '"dlrow"'
      }
    ]
  },
  {
    id: '3',
    title: 'Find Maximum',
    description: 'Write a function that finds the maximum number in an array.',
    category: 'Array',
    difficulty: 'easy',
    starterCode: `function findMax(arr) {
    // Your code here
}`,
    solution: `function findMax(arr) {
    return Math.max(...arr);
}`,
    testCases: [
      {
        input: '[1, 3, 2, 5, 4]',
        output: '5',
        fn: (arr: number[], code: string) => {
          const result = eval(`(${code})([${arr}])`);
          return JSON.stringify(result);
        },
        params: [[1, 3, 2, 5, 4]],
        expectedResult: '5'
      },
      {
        input: '[10, 20, 30, 40, 50]',
        output: '50',
        fn: (arr: number[], code: string) => {
          const result = eval(`(${code})([${arr}])`);
          return JSON.stringify(result);
        },
        params: [[10, 20, 30, 40, 50]],
        expectedResult: '50'
      }
    ]
  },
  {
    id: '4',
    title: 'Palindrome Check',
    description: 'Write a function that checks if a given string is a palindrome.',
    category: 'String',
    difficulty: 'easy',
    starterCode: `function isPalindrome(s) {
    // Your code here
}`,
    solution: `function isPalindrome(s) {
    const clean = s.replace(/\\W/g, '').toLowerCase();
    return clean === clean.split('').reverse().join('');
}`,
    testCases: [
      {
        input: '"racecar"',
        output: 'true',
        fn: (s: string, code: string) => {
          const result = eval(`(${code})("${s}")`);
          return JSON.stringify(result);
        },
        params: ['racecar'],
        expectedResult: 'true'
      },
      {
        input: '"hello"',
        output: 'false',
        fn: (s: string, code: string) => {
          const result = eval(`(${code})("${s}")`);
          return JSON.stringify(result);
        },
        params: ['hello'],
        expectedResult: 'false'
      }
    ]
  },
  {
    id: '5',
    title: 'Merge Sorted Arrays',
    description: 'Given two sorted arrays, merge them into one sorted array.',
    category: 'Array',
    difficulty: 'easy',
    starterCode: `function mergeSortedArrays(arr1, arr2) {
    // Your code here
}`,
    solution: `function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}`,
    testCases: [
      {
        input: '[1, 3, 5], [2, 4, 6]',
        output: '[1, 2, 3, 4, 5, 6]',
        fn: (arr1: number[], arr2: number[], code: string) => {
          const result = eval(`(${code})([${arr1}], [${arr2}])`);
          return JSON.stringify(result);
        },
        params: [[1, 3, 5], [2, 4, 6]],
        expectedResult: '[1, 2, 3, 4, 5, 6]'
      }
    ]
  },
  {
    id: '6',
    title: 'Sum of Array',
    description: 'Write a function that returns the sum of all elements in an array.',
    category: 'Array',
    difficulty: 'easy',
    starterCode: `function sumArray(arr) {
    // Your code here
}`,
    solution: `function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}`,
    testCases: [
      {
        input: '[1, 2, 3, 4, 5]',
        output: '15',
        fn: (arr: number[], code: string) => {
          const result = eval(`(${code})([${arr}])`);
          return JSON.stringify(result);
        },
        params: [[1, 2, 3, 4, 5]],
        expectedResult: '15'
      }
    ]
  },
  {
    id: '7',
    title: 'Binary Search',
    description: 'Implement binary search algorithm to find the position of a target value within a sorted array.',
    category: 'Array',
    difficulty: 'medium',
    starterCode: `function binarySearch(arr, target) {
    // Your code here
}`,
    solution: `function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
    testCases: [
      {
        input: '[1, 2, 3, 4, 5, 6], 4',
        output: '3',
        fn: (arr: number[], target: number, code: string) => {
          const result = eval(`(${code})([${arr}], ${target})`);
          return JSON.stringify(result);
        },
        params: [[1, 2, 3, 4, 5, 6], 4],
        expectedResult: '3'
      },
      {
        input: '[1, 2, 3, 4, 5, 6], 6',
        output: '5',
        fn: (arr: number[], target: number, code: string) => {
          const result = eval(`(${code})([${arr}], ${target})`);
          return JSON.stringify(result);
        },
        params: [[1, 2, 3, 4, 5, 6], 6],
        expectedResult: '5'
      }
    ]
  },
];



