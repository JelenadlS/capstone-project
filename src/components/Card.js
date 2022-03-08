import styled from 'styled-components';

export default function Card({ activity, friend }) {
  return (
    <Wrapper>
      <strong>{activity}</strong>
      {friend}
    </Wrapper>
  );
}

const Wrapper = styled.p`
  display: flex;
  flex-flow: column;
  color: rgba(71, 39, 35, 0.72);
`;
