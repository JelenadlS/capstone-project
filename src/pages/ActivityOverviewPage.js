import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function ActivityOverviewPage({ activities }) {
  const { id } = useParams();
  const activity = find(parseInt(id));

  function find(id) {
    return activities.find(p => p.id === id);
  }

  return (
    <>
      {activity.avtivity.map(id => (
        <>
          <Title>
            <h1>{find(id).activity}Header</h1>
          </Title>
          <WrapperCard>
            <p>
              <strong>{find(id).activity}</strong>
            </p>
            <p>{find(id).friend}</p>
          </WrapperCard>
        </>
      ))}
    </>
  );
}

const Title = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
`;

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
