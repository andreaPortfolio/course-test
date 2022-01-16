import styled from "styled-components";

interface Props {
    show: boolean;
}
const Modal = styled.div<Props>`
	z-index: auto;
	display: ${({show}) => (show ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
`;

export default Modal;