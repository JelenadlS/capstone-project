import styled from 'styled-components';

export default function Card({ activity }) {
  return (
    <Wrapper>
      <strong>{activity.activity}</strong>
      {activity.friend}
    </Wrapper>
  );
}

const Wrapper = styled.p`
  display: flex;
  flex-flow: column;
  color: rgba(71, 39, 35, 0.72);
`;
