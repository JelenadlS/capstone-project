import Button from './Button.js';
import styled from 'styled-components';

export default function DeleteModal() {
  return (
    <WrapperModal>
      <p>Are you sure you want to delete?</p>
      <Button role="keepButton" fontSize="14px" type="submit">
        NO, I wanna keep it
      </Button>
      <Button role="deleteButton" fontSize="10px" padding="13px" type="submit">
        please delete
      </Button>
    </WrapperModal>
  );
}

const WrapperModal = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: 2 (auto);
  grid-template-rows: 2 (auto);

  p {
    color: rgba(71, 39, 35, 0.72);
    text-align: center;
    grid-column: 1/3;
  }
`;
