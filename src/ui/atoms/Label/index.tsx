import styled, { CSSProperties } from "styled-components";

interface Props {
  width?: CSSProperties["width"];
}

const Label = styled.label<Props>`
font-family: "Open Sans", sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 15px;
letter-spacing: 0.30000001192092896px;
text-align: left;
text-transform: uppercase;
color: ${({theme}) => theme.colors.tertiary};
`;

export default Label;