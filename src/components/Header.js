import styled from 'styled-components';

export default function Header({ text }) {
  return (
    <Wrapper>
      <p>{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: #f0e7da;
  padding: 10px;
  p {
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(71, 39, 35, 0.72);
  }
`;
