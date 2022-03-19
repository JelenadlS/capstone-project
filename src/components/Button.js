import styled from 'styled-components';

const Button = styled.button`
  border: none;
`;

export default Button;

const MainNavButton = styled(Button)`
  background: #92dec5;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  padding: 5px;
  width: 75px;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

export { MainNavButton };

// background: #92dec5;
// color: rgba(71, 39, 35, 0.72);
// font-size: 18px;
// box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
// border-radius: 40px;
// padding: 10px;
// justify-self: stretch;
// width: 75px;
// margin: 0px;
// height: 60px;
// position: fixed;
// bottom: 0;
// z-index: 0;

const ArrowbackButton = styled(Button)`
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;
export { ArrowbackButton };

const EditButton = styled(Button)`
  background: transparent;
  position: fixed;
  right: 2px;
  top: 60px;
`;
export { EditButton };

const IconButton = styled(Button)`
  background: transparent;
  justify-self: end;
  align-self: flex-end;
  width: auto;
  height: auto;
`;
export { IconButton };

export const ModalButton = styled(Button)``;
