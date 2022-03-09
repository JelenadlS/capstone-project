import styled from 'styled-components';

export default function Card({ activity, friend, emtytext }) {
  return (
    <Wrapper>
      <p>
        <strong>{activity}</strong>
      </p>
      <p>{friend}</p>
      {emtytext}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-flow: column;
  flex: 1;
  color: rgba(71, 39, 35, 0.72);
  overflow: hidden;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
