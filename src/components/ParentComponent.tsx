import {useState, FC } from 'react';
import { ChildComponent } from "./ChildComponent";

export const ParentComponent: FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Увеличить счетчик</button>
      <ChildComponent value={count} />
      <ChildComponent value={5} />
    </div>
  );
};
