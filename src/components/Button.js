import styled from 'styled-components';

const Button = styled.button`
  border: none;
`;

export default Button;

const MainNavButton = styled(Button)`
  background: #92dec5;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
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

const ModalButton = styled(Button)`
  background: #92dec5;
  color: rgba(71, 39, 35, 0.72);
  font-size: 14px;
  border-radius: 40px;
  padding: 8px;
  width: fit-content;
  margin: 10px;
`;

export { ModalButton };

const ArrowBackButton = styled(Button)`
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;
export { ArrowBackButton };

const EditButton = styled(Button)`
  background: transparent;
  position: fixed;
  right: 20px;
  top: 80px;
`;
export { EditButton };

const DeleteButton = styled(Button)`
  background: transparent;
  justify-self: end;
  align-self: flex-end;
  width: auto;
  height: auto;
`;
export { DeleteButton };
