import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DeleteButton } from './Button.js';
import DeleteModal from './DeleteModal.js';

import deleteIcon from '../images/binIcon.svg';

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
          <img src={deleteIcon} alt="delete" />
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
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  overflow: hidden;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 5px;
  color: rgba(71, 39, 35, 0.72);
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;