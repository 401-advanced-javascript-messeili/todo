import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import SettingsProvider from './context/settings';

export default function App() {
  return (
    <>
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    </>
  );
}
