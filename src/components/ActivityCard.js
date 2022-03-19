import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DeleteButton } from './Button.js';
import DeleteModal from './DeleteModal.js';

import deleteicon from '../images/binicon.svg';

export default function ActivityCard({
  activity,
  errorMessage,
  onDeleteActivity,
  nameOfSelectedFriend,
  nameOfSelectedActivity,
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <WrapperCard>
        <LinkStyling to={`/${nameOfSelectedFriend}/${nameOfSelectedActivity}`}>
          <strong>{activity}</strong>
        </LinkStyling>
        <DeleteButton onClick={() => setShow(true)}>
          <img src={deleteicon} alt="delete" />
        </DeleteButton>
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
  border-bottom: 0.5px solid rgba(71, 39, 35, 0.72);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  overflow: hidden;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 5px;
  font-size: 18px;
  color: rgba(71, 39, 35, 0.72);
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
