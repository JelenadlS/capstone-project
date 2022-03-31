import { Link } from 'react-router-dom';
import styled from 'styled-components';

import nextIcon from '../images/nextIcon.svg';

export default function FriendCard({
  friend,
  sumOfActivitiesEachFriend,
  group,
  sumOfActivitiesEachGroup,
}) {
  return (
    <WrapperCard>
      {friend !== undefined && (
        <LinkStyling to={`/${friend}`}>
          <NameStyling aria-label={`${friend}`}>
            <strong>{friend}</strong>
          </NameStyling>
          <NumStyling
            aria-label={`number of activities: ${sumOfActivitiesEachFriend}`}
          >
            #{sumOfActivitiesEachFriend}
            <StyledArrow>
              <img src={nextIcon} alt="next page" />
            </StyledArrow>
          </NumStyling>
        </LinkStyling>
      )}
      {group !== undefined && (
        <LinkStyling to={`/${group}`}>
          <NameStyling aria-label={`${group}`}>
            <strong>{group}</strong>
          </NameStyling>
          <NumStyling
            aria-label={`number of activities: ${sumOfActivitiesEachGroup}`}
          >
            #{sumOfActivitiesEachGroup}
            <StyledArrow>
              <img src={nextIcon} alt="next page" />
            </StyledArrow>
          </NumStyling>
        </LinkStyling>
      )}
    </WrapperCard>
  );
}

const WrapperCard = styled.section`
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  padding: 5px;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 0;
  color: rgba(71, 39, 35, 0.72);
  text-decoration: none;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto auto;
`;

const NameStyling = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const NumStyling = styled.p`
  justify-self: end;
`;

const StyledArrow = styled.span`
  margin-left: 5px;
`;
