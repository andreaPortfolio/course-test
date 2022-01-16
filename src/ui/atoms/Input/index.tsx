import styled from "styled-components";
import {defaultStyledProps, DefaultStyledProps} from '../../helper';



const Input = styled.input<DefaultStyledProps>`
  height: 42px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: #4b506d;
  ${defaultStyledProps}
`;

export default Input;
