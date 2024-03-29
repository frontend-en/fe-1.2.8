import { FC } from 'react';

interface ChildComponentProps {
  value: number;
}

export const ChildComponent: FC<ChildComponentProps> = ({ value }) => {

  return <div>Значение пропса: {value}</div>;
};


