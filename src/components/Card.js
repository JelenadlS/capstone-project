import styled from 'styled-components';

export default function Card({ activity, name }) {
  return (
    <Wrapper>
      <strong>{activity}</strong>
      {name}
    </Wrapper>
  );
}

const Wrapper = styled.p`
  display: flex;
  flex-flow: column;
  color: rgba(71, 39, 35, 0.72);
`;
