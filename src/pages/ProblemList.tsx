import React, { useState, useEffect } from 'react';
import { Code2, Dices, Search } from 'lucide-react';
import { problems } from '../data/problems';
import { ProblemGrid } from '../components/ProblemGrid';
import { Filters } from '../components/Filters';
import { Category, Difficulty } from '../types/problem';
import { useNavigate } from 'react-router-dom';

export const ProblemList: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastRandomId, setLastRandomId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryChange = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleDifficultyChange = (difficulty: Difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  const filteredProblems = problems.filter((problem) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(problem.category);
    const matchesDifficulty =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(problem.difficulty);
    const matchesSearch =
      searchQuery === '' ||
      problem.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleRandomProblem = () => {
    const availableProblems = filteredProblems.filter(p => p.id !== lastRandomId);
    if (availableProblems.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * availableProblems.length);
    const randomProblem = availableProblems[randomIndex];
    setLastRandomId(randomProblem.id);
    navigate(`/problem/${randomProblem.id}`);
  };

  useEffect(() => {
    setLastRandomId(null);
  }, [selectedCategories, selectedDifficulties, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">DSA Problem Solver</h1>
          </div>
          <button
            onClick={handleRandomProblem}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Dices size={20} />
            Random Problem
          </button>
        </div>
        {/* <Navbar/> */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search problems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>
              <Filters
                selectedCategories={selectedCategories}
                selectedDifficulties={selectedDifficulties}
                onCategoryChange={handleCategoryChange}
                onDifficultyChange={handleDifficultyChange}
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <ProblemGrid problems={filteredProblems} />
          </div>
        </div>
      </div>
    </div>
  );
};