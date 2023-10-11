import React from "react";

const Skeleton = () => {
  return (
    <div className="space-y-2.5">
      <div className="h-48 bg-gray-200 rounded-xl"></div>
      <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
      <div className="h-2.5 bg-gray-200 rounded-full w-3/4"></div>
      <div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
    </div>
  );
};

export default Skeleton;
