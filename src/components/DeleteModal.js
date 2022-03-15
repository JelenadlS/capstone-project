import Button from './Button.js';
import styled from 'styled-components';

export default function DeleteModal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <WrapperModal>
      <p>Are you sure you want to delete?</p>
      <div>
        <Button
          width="fit-content"
          height="fit-content"
          fontSize="14px"
          type="submit"
          onClick={props.onClose}
        >
          NO, I wanna keep it
        </Button>
        <Button
          width="fit-content"
          height="fit-content"
          fontSize="14px"
          type="submit"
          margin="15px"
          onClick={props.onDelete}
        >
          please delete
        </Button>
      </div>
    </WrapperModal>
  );
}

const WrapperModal = styled.section`
  border: none;
  border-radius: 15px;
  background: #f0e7da;
  display: grid;
  grid-template-rows: auto auto;
  position: fixed;
  width: 350px;
  height: 130px;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -175px;

  p {
    color: rgba(71, 39, 35, 0.72);
    text-align: center;
    align-self: center;
  }

  div {
    text-align: center;
    align-self: start;
  }
`;
