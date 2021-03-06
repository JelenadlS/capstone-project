import styled from 'styled-components';

import { ModalButton } from './Button.js';

export default function DeleteModal({ show, onClose, onDelete }) {
  if (!show) {
    return null;
  }

  return (
    <WrapperModal role="alertdialog">
      <p>Are you sure you want to delete?</p>
      <span>
        <ModalButton type="submit" onClick={onClose}>
          NO, I wanna keep it
        </ModalButton>
        <ModalButton type="submit" onClick={onDelete}>
          please delete
        </ModalButton>
      </span>
    </WrapperModal>
  );
}

const WrapperModal = styled.section`
  border: none;
  border-radius: 20px;
  background: #f0e7da;
  display: grid;
  grid-template-rows: auto auto;
  position: fixed;
  width: 300px;
  height: 110px;
  top: 50%;
  left: 50%;
  padding-top: 10px;
  margin-top: -100px;
  margin-left: -150px;

  p {
    text-align: center;
    align-self: center;
  }

  span {
    text-align: center;
  }
`;
