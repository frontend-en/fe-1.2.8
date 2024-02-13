import { FC } from 'react';

interface ChildComponentProps {
  value: number;
}

export const ChildComponent: FC<ChildComponentProps> = ({ value }) => {
  console.log('ChildComponent рендерится с значением', value);

  return <div>Значение пропса: {value}</div>;
};