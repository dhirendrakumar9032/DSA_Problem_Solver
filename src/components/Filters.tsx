import React from 'react';
import { Category, Difficulty } from '../types/problem';

interface FiltersProps {
  selectedCategories: Category[];
  selectedDifficulties: Difficulty[];
  onCategoryChange: (category: Category) => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  selectedCategories,
  selectedDifficulties,
  onCategoryChange,
  onDifficultyChange,
}) => {
  const categories: Category[] = [
    'Array',
    'String',
    'LinkedList',
    'Tree',
    'Graph',
    'Dynamic Programming',
  ];

  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategories.includes(category)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Difficulty</h3>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedDifficulties.includes(difficulty)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};