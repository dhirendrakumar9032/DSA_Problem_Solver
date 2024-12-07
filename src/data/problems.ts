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
   
    testCases: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        fn: (nums: number[], target: number, code: string) => {
          const result = eval(`(${code})([${nums}], ${target})()`);
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
    id: '4',
    title: 'Palindrome Check',
    description: 'Write a function that checks if a given string is a palindrome.',
    category: 'String',
    difficulty: 'easy',
    starterCode: `function isPalindrome(s) {
    // Your code here
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
    id: '7',
    title: 'Binary Search',
    description: 'Implement binary search algorithm to find the position of a target value within a sorted array.',
    category: 'Array',
    difficulty: 'medium',
    starterCode: `function binarySearch(arr, target) {
    // Your code here
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
  {
    id: '2',
    title: 'Best Time to Buy and Sell Stock',
    description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`iᵗʰ\` day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
    category: 'Array',
    difficulty: 'easy',
    starterCode: `function maxProfit(prices) {
        // Your code here
    }`,
   
    testCases: [
      {
        input: 'prices = [7,1,5,3,6,4]',
        output: '5',
        fn: (prices, code) => {
          const result = eval(`(${code})(${JSON.stringify(prices)})`);
          return JSON.stringify(result);
        },
        params: [[7,1,5,3,6,4]],
        expectedResult: '5'
      }
    ]
},
{
  id: '3',
  title: 'Dutch National Flag Problem',
  description: `Given an array \`nums\` with \`n\` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
  
  We will use the integers \`0\`, \`1\`, and \`2\` to represent the color red, white, and blue respectively.
  
  You must solve this problem without using the library's sort function.`,
  category: 'Array',
  difficulty: 'medium',
  starterCode: `function sortColors(nums) {
      // Your code here
  }`,
 
  testCases: [
    {
      input: 'nums = [2,0,2,1,1,0]',
      output: '[0,0,1,1,2,2]',
      fn: (nums: number[], code: string) => {
        const sortFunction = new Function('nums', code);
        sortFunction(nums);
        return JSON.stringify(nums);
      },
      params: [[2,0,2,1,1,0]],
      expectedResult: '[0,0,1,1,2,2]'
    },
   
  ]
},
{
  id: '412',
  title: 'Subarray Sum Equals K',
  description: `Given an array \`nums\` and an integer \`k\`, return the total number of continuous subarrays whose sum equals to \`k\`.
`,
  category: 'Array',
  difficulty: 'medium',
  starterCode: `function subarraySum(nums, k) {
      // Your code here
  }`,
 
  testCases: [
    {
      input: 'nums = [1,1,1], k = 2',
      output: '2',
      fn: (nums: number[], k: number, code: string) => {
        const subarraySumFunction = new Function('nums', 'k', code);
        const result = subarraySumFunction(nums, k);
        return JSON.stringify(result);
      },
      params: [[1, 1, 1], 2],
      expectedResult: '2'
    },
    {
      input: 'nums = [1,2,3], k = 3',
      output: '2',
      fn: (nums: number[], k: number, code: string) => {
        const subarraySumFunction = new Function('nums', 'k', code);
        const result = subarraySumFunction(nums, k);
        return JSON.stringify(result);
      },
      params: [[1, 2, 3], 3],
      expectedResult: '2'
    },
   
    {
      input: 'nums = [3,4,7,2,-3,1,4,2], k = 7',
      output: '4',
      fn: (nums: number[], k: number, code: string) => {
        const subarraySumFunction = new Function('nums', 'k', code);
        const result = subarraySumFunction(nums, k);
        return JSON.stringify(result);
      },
      params: [[3, 4, 7, 2, -3, 1, 4, 2], 7],
      expectedResult: '4'
    }
  ]
},
{
  id: '5',
  title: 'Merge Sorted Array',
  description: `You are given two integer arrays \`nums1\` and \`nums2\`, sorted in non-decreasing order, and two integers \`m\` and \`n\`, representing the number of elements in \`nums1\` and \`nums2\` respectively.
  Merge \`nums2\` into \`nums1\` so that \`nums1\` becomes a single sorted array of length \`m + n\`.`,
  category: 'Array',
  difficulty: 'easy',
  starterCode: `function merge(nums1, m, nums2, n) {
      // Your code here
  }`,
 
  testCases: [
    {
      input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
      output: '[1,2,2,3,5,6]',
      fn: (nums1: number[], m: number, nums2: number[], n: number, code: string) => {
        const mergeFunction = new Function('nums1', 'm', 'nums2', 'n', code);
        mergeFunction(nums1, m, nums2, n);
        return JSON.stringify(nums1);
      },
      params: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
      expectedResult: '[1,2,2,3,5,6]'
    },
    
    {
      input: 'nums1 = [0], m = 0, nums2 = [1], n = 1',
      output: '[1]',
      fn: (nums1: number[], m: number, nums2: number[], n: number, code: string) => {
        const mergeFunction = new Function('nums1', 'm', 'nums2', 'n', code);
        mergeFunction(nums1, m, nums2, n);
        return JSON.stringify(nums1);
      },
      params: [[0], 0, [1], 1],
      expectedResult: '[1]'
    },
   
  ]
},
{
  id: '6',
  title: 'Trapping Rain Water',
  description: `Given an array \`height\` where each element represents the height of a bar at that index, compute how much water it can trap after raining.
  `,
  category: 'Array',
  difficulty: 'hard',
  starterCode: `function trap(height) {
      // Your code here
  }`,
 
  testCases: [
    {
      input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
      output: '6',
      fn: (height: number[], code: string) => {
        const trapFunction = new Function('height', code);
        const result = trapFunction(height);
        return JSON.stringify(result);
      },
      params: [[0,1,0,2,1,0,1,3,2,1,2,1]],
      expectedResult: '6'
    },
    {
      input: 'height = [4,2,0,3,2,5]',
      output: '9',
      fn: (height: number[], code: string) => {
        const trapFunction = new Function('height', code);
        const result = trapFunction(height);
        return JSON.stringify(result);
      },
      params: [[4,2,0,3,2,5]],
      expectedResult: '9'
    },
   
   
    {
      input: 'height = []',
      output: '0',
      fn: (height: number[], code: string) => {
        const trapFunction = new Function('height', code);
        const result = trapFunction(height);
        return JSON.stringify(result);
      },
      params: [[]],
      expectedResult: '0'
    },
   
  ]
}





];



