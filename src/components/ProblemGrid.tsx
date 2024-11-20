import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Problem } from '../types/problem';
import { Badge } from './Badge';

interface ProblemGridProps {
  problems: Problem[];
}

export const ProblemGrid: React.FC<ProblemGridProps> = ({ problems }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {problems.map((problem) => (
        <div
          key={problem.id}
          onClick={() => navigate(`/problem/${problem.id}`)}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
          <div className="flex gap-2 mb-4">
            <Badge
              text={problem.difficulty}
              color={
                problem.difficulty === 'easy'
                  ? 'green'
                  : problem.difficulty === 'medium'
                  ? 'yellow'
                  : 'red'
              }
            />
            <Badge text={problem.category} color="blue" />
          </div>
          <p className="text-gray-600 line-clamp-2">{problem.description}</p>
        </div>
      ))}
    </div>
  );
};