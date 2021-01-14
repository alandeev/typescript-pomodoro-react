import React from 'react';
import { secondsToTime } from '../utils/seconds-to-time';

interface PropsButton {
  mainTime: number;
}

export default function Timer(props: PropsButton): JSX.Element {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
