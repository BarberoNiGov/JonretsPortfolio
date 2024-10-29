import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-center mb-2">
        <h3 className="font-semibold text-gray-800">{name}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
    </div>
  );
};

export default SkillBadge;