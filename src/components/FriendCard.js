import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FriendCard({ friend }, noFriends) {
  console.log(friend);
  console.log(noFriends);

  return (
    <>
      <WrapperCard>
        <LinkStyling to={`/friend/${friend}`}>
          <strong>{friend}</strong>
        </LinkStyling>
      </WrapperCard>
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
