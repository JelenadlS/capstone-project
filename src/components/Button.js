import styled from 'styled-components';

const Button = styled.button`
  border: none;
`;

export default Button;

export const CallToActionButton = styled(Button)`
  background: #92dec5;
  color: rgba(71, 39, 35, 0.72);
  font-size: 18px;
  box-shadow: none;
  border-radius: 60px;
  padding: 10px;
  justify-self: stretch;
  width: 75px;
  margin: 0px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 0;
`;

const IconButton = styled(Button)`
  background: transparent;
  justify-self: end;
  align-self: flex-end;
  width: auto;
  height: auto;
`;
export { IconButton };

export const ModalButton = styled(Button)``;
