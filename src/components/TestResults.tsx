import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface TestResultsProps {
  results: {
    passed: boolean;
    input: string;
    expected: string;
    received: string;
  }[];
}

export const TestResults: React.FC<TestResultsProps> = ({ results }) => {
  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-semibold">Test Results</h3>
      {results.map((result, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            result.passed ? 'bg-green-50' : 'bg-red-50'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {result.passed ? (
              <CheckCircle2 className="text-green-500" size={20} />
            ) : (
              <XCircle className="text-red-500" size={20} />
            )}
            <span className={`font-medium ${
              result.passed ? 'text-green-700' : 'text-red-700'
            }`}>
              Test Case {index + 1}: {result.passed ? 'Passed' : 'Failed'}
            </span>
          </div>
          <div className="ml-7 space-y-1 text-sm">
            <p><span className="font-medium">Input:</span> {result.input}</p>
            <p><span className="font-medium">Expected:</span> {result.expected}</p>
            {!result.passed && (
              <p><span className="font-medium">Received:</span> {result.received}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};