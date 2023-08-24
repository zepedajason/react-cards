import { useState } from "react";

const useFlip = () => {
  const [flipState, toggleFlipState] = useState(true);
  const flipCard = () => {
    toggleFlipState((isUp) => !isUp);
  };

  return [flipState, flipCard];
};

export default useFlip;
