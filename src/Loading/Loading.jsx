import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-Primary rounded-full animate-spin"></div>
        {/* Optional Text */}
        <p className="mt-4 text-white font-medium text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
