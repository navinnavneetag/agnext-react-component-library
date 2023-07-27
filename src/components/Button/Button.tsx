import React from "react";
const ButtonChakra = React.lazy(() => import("@chakra-ui/react").then((module) => ({ default: module.Button })));
import "./Button.css";

interface ButtonProps {
  label: string;
  children: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonChakra colorScheme='teal' size="lg" onClick={props.onClick}>
      {props.label} {props.children}
    </ButtonChakra>
  );
};

export default Button;

/*
import React from 'react';

// Lazy import Chakra UI components
const Button = React.lazy(() => import("@chakra-ui/react").then((module) => ({ default: module.Button })));
const Input = React.lazy(() => import("@chakra-ui/react").then((module) => ({ default: module.Input })));

const MyComponent = () => {
  return (
    <div>
      <Button>Click Me</Button>
      <Input placeholder="Enter something" />
    </div>
  );
};

export default MyComponent;
*/
