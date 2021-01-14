import React, { useEffect, useState } from 'react';

import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import Timer from './timer';

interface PomodoroTimerProps {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: PomodoroTimerProps): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);
  const [countState, setCountState] = useState<boolean>(false);

  useEffect(() => {
    const cssNameWork = countState ? 'working' : '';
    document.body.className = cssNameWork;
  }, [countState]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    countState ? 1000 : null,
  );

  return (
    <div className="pomodoro">
      <h2>You are: {countState ? 'Working' : 'Relex...'}</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text={countState ? 'Pausar' : 'Iniciar'}
          onClick={() => setCountState(!countState)}
          className="button"
        />
        <Button text="Reset" onClick={() => setMainTime(props.defaultPomodoroTime)} className="button" />
      </div>
      <div className="details"></div>
    </div>
  );
}
