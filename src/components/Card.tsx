import React, { FC, ReactChild, ReactElement, ReactNode, useState } from "react";

export enum CardVarinat {
  outlinde = "outlinde",
  primary = "primary",
}

interface cardProps {
  width: string;
  height: string;
  children?: ReactElement;
  variant: CardVarinat;
  onClick?:(num:number) => void 
}

const Card: FC<cardProps> = ({ width, height, children, onClick, variant }) => {
  const [state,Setstate] = useState(1)
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVarinat.outlinde ? "1px solid grey" : "none",
        background: variant === CardVarinat.primary ? "lightgray" : "",
        
      }}
      onClick={()=>onClick?.(state)}
    >
      {children}
    </div>
  );
};

export default Card;
