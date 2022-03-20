import { Link } from 'react-router-dom';
import styled from 'styled-components';

import nexticon from '../images/next.svg';

export default function FriendCard({ friend, sumOfActivitiesEachFriend }) {
  return (
    <WrapperCard>
      <LinkStyling to={`/${friend}`}>
        <NameStyling>
          <strong>{friend}</strong>
        </NameStyling>
        <NumStyling>
          #{sumOfActivitiesEachFriend}{' '}
          <StyledArrow>
            <img src={nexticon} alt="next page" />
          </StyledArrow>
        </NumStyling>
      </LinkStyling>
    </WrapperCard>
  );
}

const WrapperCard = styled.section`
  border-bottom: 0.5px solid rgba(71, 39, 35, 0.72);
  padding: 5px;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 0;
  font-size: 18px;
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
