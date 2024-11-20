interface BadgeProps {
  text: string;
  color: 'green' | 'yellow' | 'red' | 'blue';
}

export const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
    blue: 'bg-blue-100 text-blue-800',
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses[color]}`}
    >
      {text}
    </span>
  );
};