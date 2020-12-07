import React from 'react';

import ToDo from './components/todo/todo-connected.js';
import SettingsProvider from './context/settings';
import LoginProvider from './context/context';

export default function App() {
  return (
    <>
      <LoginProvider>
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </LoginProvider>
    </>
  );
}
