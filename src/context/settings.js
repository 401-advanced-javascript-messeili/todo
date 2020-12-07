import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
  const [displayStatus, setDisplayStatus] = useState(true);
  const [items, setItems] = useState(3);
  const [sort, useSort] = useState('');

  const state = {
    displayStatus,
    items,
    sort,
    setDisplayStatus,
    setItems,
    useSort,
  };

  return <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>;
}
