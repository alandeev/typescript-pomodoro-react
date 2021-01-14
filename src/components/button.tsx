import React from 'react';

interface PropsButton {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: PropsButton): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className} type="button">
      {props.text}
    </button>
  );
}
