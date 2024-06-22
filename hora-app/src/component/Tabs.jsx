import React, { useState } from 'react';

function Tab({ label, isActive, onClick }) {
  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </div>
  );
}

function Tabs({ tabs, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <Tab
          key={tab.label}
          label={tab.label}
          isActive={activeTab === tab.label}
          onClick={() => handleClick(tab.label)}
        />
      ))}
    </div>
  );
}

export default Tabs;
