import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DeleteButton } from './Button.js';
import DeleteModal from './DeleteModal.js';

import deleteIcon from '../images/binIcon.svg';

import cultureImage from '../images/cultureImage.jpg';
import fAndBImage from '../images/fAndBImage.jpg';
import otherImage from '../images/otherImage.jpg';
import outdoorImage from '../images/outdoorImage.jpg';
import sportImage from '../images/sportImage.jpg';

export default function ActivityCard({
  photo,
  activity,
  errorMessage,
  onDeleteActivity,
  nameOfSelectedFriend,
  nameOfSelectedActivity,
  nameOfSelectedCategory,
}) {
  const [show, setShow] = useState(false);

  const placeholderWhenNoPic = {
    culture: cultureImage,
    'food and beverages': fAndBImage,
    outdoor: outdoorImage,
    sport: sportImage,
    other: otherImage,
  };
  console.log(placeholderWhenNoPic);
  return (
    <>
      <WrapperCard>
        {!photo > 0 ? (
          <StyledImage
            width="30"
            height="30"
            alt="upload"
            src={placeholderWhenNoPic[nameOfSelectedCategory]}
          />
        ) : (
          <StyledImage width="30" height="30" alt="upload" src={photo} />
        )}

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
        <strong>
          {errorMessage && `unfortunately something went wrong with your data.`}
        </strong>
      </p>
    </>
  );
}

const WrapperCard = styled.section`
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  display: grid;
  grid-template-columns: auto 1fr auto;
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

const StyledImage = styled.img`
  box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
  border-radius: 50px;
`;
