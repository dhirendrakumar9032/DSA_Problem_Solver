import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { ArrowLeft, Play } from 'lucide-react';
import { problems } from '../data/problems';
import { Badge } from '../components/Badge';
import { TestResults } from '../components/TestResults';

export const ProblemSolver: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const problem = problems.find((p) => p.id === id);
  const [code, setCode] = useState(problem?.starterCode || '');
  const [testResults, setTestResults] = useState<{
    passed: boolean;
    input: string;
    expected: string;
    received: string;
  }[]>([]);

  if (!problem) {
    return <div>Problem not found</div>;
  }

  const runTests = () => {
    try {
      const results = problem.testCases.map((testCase) => {
        try {
          const received = testCase.fn(...testCase.params, code);
          const passed = received === testCase.expectedResult;
          return {
            passed,
            input: testCase.input,
            expected: testCase.output,
            received: received
          };
        } catch (error) {
          return {
            passed: false,
            input: testCase.input,
            expected: testCase.output,
            received: `Error: ${(error as Error).message}`
          };
        }
      });
      setTestResults(results);
    } catch (error) {
      setTestResults([
        {
          passed: false,
          input: 'Code Execution',
          expected: 'Valid JavaScript code',
          received: `Error: ${(error as Error).message}`
        }
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={24} />
              </button>
              <h1 className="text-xl font-semibold">{problem.title}</h1>
              <div className="flex gap-2">
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
            </div>
            <button
              onClick={runTests}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Play size={20} />
              Run Code
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Problem Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{problem.description}</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Example Test Cases</h3>
              <div className="space-y-4">
                {problem.testCases.map((testCase, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-2">
                      <span className="font-medium">Input:</span> {testCase.input}
                    </div>
                    <div>
                      <span className="font-medium">Output:</span> {testCase.output}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {testResults.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <TestResults results={testResults} />
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Editor
              height="70vh"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || '')}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};