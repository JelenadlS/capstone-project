import styled from 'styled-components';
import deleteicon from '../images/binicon.svg';
import Button from './Button.js';
import DeleteModal from './DeleteModal.js';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({ activity, id, errorMessage, onDeleteActivity }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <WrapperCard>
        <LinkStyling to={`/${id}`}>
          <strong>{activity}</strong>
        </LinkStyling>
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
  color: rgba(71, 39, 35, 0.72);
  border-bottom: 0.5px solid rgba(71, 39, 35, 0.72);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  overflow: hidden;
`;

const LinkStyling = styled(NavLink)`
  color: rgba(71, 39, 35, 0.72);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
