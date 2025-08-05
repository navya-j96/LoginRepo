import React from 'react';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Layers className="h-8 w-8 text-indigo-400" />
      <span className="ml-2 text-xl font-bold">Horizon</span>
    </div>
  );
};

export default Logo;
