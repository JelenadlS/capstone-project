import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function ActivityOverviewPage({ getData }) {
  let params = useParams();
  let activity = getData(params.activityId);
  console.log(params.activityId);
  return (
    <>
      <Title>
        <h1>{params.activityId}</h1>
      </Title>
      <WrapperCard>
        <p>
          <strong>{activity.activity}</strong>
        </p>
        <p>friend</p>
      </WrapperCard>
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
