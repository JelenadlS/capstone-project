import { useState } from 'react';
import styled from 'styled-components';

import { DeleteButton } from './Button.js';
import DeleteModal from './DeleteModal.js';
import { StyledArrow, LinkStyling } from '../components/GeneralStyling';
import MappedPlaceholderPictures from './MappedPlaceholderPictures.js';

import useStore from '../hooks/useStore.js';

import deleteIcon from '../images/binIcon.svg';
import nextIcon from '../images/nextIcon.svg';

export default function ActivityCard({ onDeleteActivity, activityDetails }) {
  const [show, setShow] = useState(false);

  const showBin = useStore(state => state.showBin);
  const handleResetPage = useStore(state => state.handleResetPage);

  return (
    <WrapperCard>
      <StyledImage
        width="30"
        height="30"
        alt={`placeholder picture ${
          !activityDetails.photo
            ? activityDetails.category
            : activityDetails.photo
        }`}
        src={
          !activityDetails.photo
            ? MappedPlaceholderPictures[activityDetails.category]
            : activityDetails.photo
        }
      />

      <CardSubGrid>
        <StyledLink
          to={`/${
            activityDetails?.group
              ? activityDetails.group
              : activityDetails.friend
          }/${activityDetails.activity}`}
          onClick={handleResetPage}
        >
          <strong>{activityDetails.activity}</strong>
        </StyledLink>

        {showBin ? (
          <>
            <DeleteButton onClick={() => setShow(true)}>
              <img width="20" height="20" src={deleteIcon} alt="delete" />
            </DeleteButton>
            <DeleteModal
              onDelete={onDeleteActivity}
              onClose={() => setShow(false)}
              show={show}
            />
          </>
        ) : (
          <StyledArrow>
            <img src={nextIcon} alt="next page" />
          </StyledArrow>
        )}
      </CardSubGrid>
    </WrapperCard>
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

const StyledLink = styled(LinkStyling)`
  padding: 8px 8px 5px;
  background-color: transparent;
`;

const StyledImage = styled.img`
  border-radius: 50px;
`;
