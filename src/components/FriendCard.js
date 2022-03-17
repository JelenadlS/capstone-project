import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FriendCard({ friend, activities }) {
  const count = [];
  console.log(activities);
  for (const element of activities) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  return (
    <>
      <WrapperCard>
        <LinkStyling to={`/friend/${friend}`}>
          <NameStyling>
            <strong>{friend}</strong>
          </NameStyling>
          <NumStyling>
            #
            {friend === activities.find(activity => activity.friend === friend)
              ? ''
              : count[friend]}
          </NumStyling>
        </LinkStyling>
      </WrapperCard>
    </>
  );
}

const WrapperCard = styled.section`
  color: rgba(71, 39, 35, 0.72);
  border-bottom: 0.5px solid rgba(71, 39, 35, 0.72);
  padding: 5px;
`;

const LinkStyling = styled(Link)`
  padding: 8px 8px 0;
  font-size: 18px;
  color: rgba(71, 39, 35, 0.72);
  background-color: transparent;
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
