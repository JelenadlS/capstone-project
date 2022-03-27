import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DeleteButton } from './Button.js';
import DeleteModal from './DeleteModal.js';
import MappedPlaceholderPictures from './MappedPlaceholderPictures.js';

import deleteIcon from '../images/binIcon.svg';
import nextIcon from '../images/nextIcon.svg';

export default function ActivityCard({
  photo,
  errorMessage,
  onDeleteActivity,
  nameOfSelectedFriend,
  nameOfSelectedActivity,
  nameOfSelectedCategory,
  showBin,
  handleResetPage,
}) {
  const [show, setShow] = useState(false);

  //console.log(activities);
  // console.log(nameOfSelectedFriend);
  // console.log(nameOfSelectedActivity);
  // console.log(nameOfSelectedCategory);
  // Check ob die zusammengefasst werden können in activities
  return (
    <>
      <WrapperCard>
        {!photo > 0 ? (
          <StyledImage
            width="30"
            height="30"
            alt={`placeholder picture ${nameOfSelectedCategory}`}
            src={MappedPlaceholderPictures[nameOfSelectedCategory]}
          />
        ) : (
          <StyledImage
            width="30"
            height="30"
            alt={`uploaded picture ${photo}`}
            src={photo}
          />
        )}
        {showBin ? (
          <CardSubGrid>
            <LinkStyling
              to={`/${nameOfSelectedFriend}/${nameOfSelectedActivity}`}
            >
              <strong>{nameOfSelectedActivity}</strong>
            </LinkStyling>
            <DeleteButton onClick={() => setShow(true)}>
              <img src={deleteIcon} alt="delete" />
            </DeleteButton>
            <DeleteModal
              onDelete={onDeleteActivity}
              onClose={() => setShow(false)}
              show={show}
            />
          </CardSubGrid>
        ) : (
          <CardSubGrid>
            <LinkStyling
              to={`/${nameOfSelectedFriend}/${nameOfSelectedActivity}`}
              onClick={handleResetPage}
            >
              <strong>{nameOfSelectedActivity}</strong>
            </LinkStyling>
            <StyledArrow>
              <img src={nextIcon} alt="next page" />
            </StyledArrow>
          </CardSubGrid>
        )}
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
  grid-template-columns: auto 1fr;
  align-items: center;
  overflow: hidden;
`;

const CardSubGrid = styled.span`
  display: grid;
  grid-template-columns: 1fr auto;
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
  border-radius: 50px;
`;
const StyledArrow = styled.span`
  margin-left: 5px;
  align-self: center;
`;
