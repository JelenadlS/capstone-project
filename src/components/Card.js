import styled from 'styled-components';
import deleteicon from '../images/binicon.svg';

export default function Card({ activity, friend, emptytext, errorMessage }) {
  return (
    <WrapperCard>
      <p>
        <strong>
          {activity}
          {errorMessage}
        </strong>
      </p>
      <DeleteButton>
        <img src={deleteicon} alt="delete" />
      </DeleteButton>
      <p>
        {friend}
        {emptytext}
      </p>
    </WrapperCard>
  );
}

const WrapperCard = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  color: rgba(71, 39, 35, 0.72);
  overflow: hidden;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const DeleteButton = styled.button`
  justify-self: end;
  border: none;
  background: transparent;
`;
