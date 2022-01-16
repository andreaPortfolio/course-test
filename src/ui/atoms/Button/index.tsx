import styled from "styled-components";
import {defaultStyledProps, DefaultStyledProps} from '../../helper';


const Button = styled.button<DefaultStyledProps>`  
  height: 48px;
  background: ${({theme}) => theme.colors.primary};
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  border: none;
  width: 200px;
  ${defaultStyledProps};
`;

export default Button;
