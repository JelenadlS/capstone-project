import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.js';
import deleteicon from '../images/binicon.svg';
import DeleteModal from './DeleteModal.js';
import styled from 'styled-components';

export default function Card({
  activity,
  errorMessage,
  onDeleteActivity,
  id,
  nameOfSelectedFriend,
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <WrapperCard>
        <LinkStyling to={`/${nameOfSelectedFriend}/details/${id}`}>
          <strong>{activity}</strong>
        </LinkStyling>
        <Button
          background="transparent"
          justifySelf="end"
          padding="10px"
          width="auto"
          height="auto"
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

const LinkStyling = styled(Link)`
  padding: 8px 8px 0;
  font-size: 18px;
  color: rgba(71, 39, 35, 0.72);
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
