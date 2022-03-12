import styled from 'styled-components';
import deleteicon from '../images/binicon.svg';
import Button from './Button.js';
import DeleteModal from './DeleteModal.js';
import { useState } from 'react';

export default function Card({ activity, errorMessage, onDeleteActivity }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <WrapperCard>
        <p>
          <strong>
            {activity}
            {errorMessage}
          </strong>
        </p>
        <Button
          background="transparent"
          justifySelf="end"
          onClick={() => setShow(true)}
        >
          <img src={deleteicon} alt="delete" />
        </Button>
        <DeleteModal
          onDelete={onDeleteActivity}
          onClose={() => setShow(false)}
          show={show}
        />
      </WrapperCard>
      <p>
        <strong>{errorMessage}</strong>
      </p>
    </>
  );
}

const WrapperCard = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  color: rgba(71, 39, 35, 0.72);
  overflow: hidden;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
