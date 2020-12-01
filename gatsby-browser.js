import React from 'react';
import './src/styles/site.css';

export function wrapPageElement({ element, props }) {
  return <div>hello {element}</div>;
}
