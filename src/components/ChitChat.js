import React from 'react';
import { Link, navigate, navigateTo } from 'gatsby';

export default function ChitChat(props) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4">
      <div className="flex-shrink-0" />
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-gray-500">{props.message}</p>
      </div>
    </div>
  );
}
