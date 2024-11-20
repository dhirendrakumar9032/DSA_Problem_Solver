export type Difficulty = 'easy' | 'medium' | 'hard';

export type Category = 'Array' | 'String' | 'LinkedList' | 'Tree' | 'Graph' | 'Dynamic Programming';

export interface Problem {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  starterCode: string;
  testCases: TestCase[];
  solution: string;
}

export interface TestCase {
  input: string;
  output: string;
  fn: (...args: any[]) => any;
  params: any[];
  expectedResult: any;
}