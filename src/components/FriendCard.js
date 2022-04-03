import styled from 'styled-components';

import { StyledArrow, LinkStyling } from '../components/GeneralStyling';

import nextIcon from '../images/nextIcon.svg';

export default function FriendCard({ name, sumOfActivitiesEach }) {
  return (
    <WrapperCard
      aria-label={`details of ${
        name === 'I still need to plan...' ? 'to plan activities' : name
      } and the amount of activities`}
    >
      <StyledLink
        to={`/${name}`}
        aria-label={`to ${
          name === 'I still need to plan...' ? 'to plan activities' : name
        }`}
      >
        <strong>
          {name === 'I still need to plan...'
            ? 'Activities I still need to plan with someone:'
            : name}
        </strong>

        <NumStyling aria-label={`number of activities: ${sumOfActivitiesEach}`}>
          <span aria-hidden="true">#{sumOfActivitiesEach}</span>
          <StyledArrow>
            <img width="8" height="15" src={nextIcon} alt="next page" />
          </StyledArrow>
        </NumStyling>
      </StyledLink>
    </WrapperCard>
  );
}

const WrapperCard = styled.section`
  border-bottom: 1px solid rgba(71, 39, 35, 0.4);
  padding: 5px;
`;

const StyledLink = styled(LinkStyling)`
  padding: 8px 8px 0;
  display: grid;
  grid-template-columns: auto auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NumStyling = styled.span`
  justify-self: end;
`;
