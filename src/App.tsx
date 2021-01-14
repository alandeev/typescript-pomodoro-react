import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

import './App.css';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer defaultPomodoroTime={3599} shortRestTime={500} longRestTime={900} cycles={4} />
    </div>
  );
}

export default App;
