import React from 'react';

import { Wrapper } from './Button.styles';

const Button: React.FunctionComponent<any> = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default Button;
