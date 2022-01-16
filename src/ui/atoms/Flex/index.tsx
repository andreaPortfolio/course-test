import styled from "styled-components";
import {defaultStyledProps, DefaultStyledProps} from '../../helper';
import {Theme} from '../../'

interface Props extends DefaultStyledProps {
  backgroundColor?: keyof Theme['colors'];
}

const Flex = styled.div<Props>`
  display: flex;
  background-color: ${({ theme, backgroundColor }) => (backgroundColor && theme?.colors?.[backgroundColor] ? theme?.colors?.[backgroundColor] : '')};
  ${defaultStyledProps};
`;


export default Flex;
