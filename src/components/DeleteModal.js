import Button from './Button.js';
import styled from 'styled-components';

export default function DeleteModal() {
  return (
    <WrapperModal>
      <p>Are you sure you want to delete?</p>
      <div>
        <Button width="fit-content" fontSize="14px" type="submit">
          NO, I wanna keep it
        </Button>
        <Button
          width="fit-content"
          fontSize="10px"
          padding="13px"
          type="submit"
        >
          please delete
        </Button>
      </div>
    </WrapperModal>
  );
}

const WrapperModal = styled.section`
  border: none;
  border-radius: 5px;
  background: #f0e7da;
  padding: 10px;
  width: 400px;
  display: grid;
  gap: 10px;
  grid-template-rows: 2 (auto);

  p {
    color: rgba(71, 39, 35, 0.72);
    text-align: center;
  }

  div {
    text-align: center;
    align-self: center;
  }
`;
