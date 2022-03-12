import styled from 'styled-components';

//import { useParams } from 'react-router-dom';

export default function ActivityOverviewPage({ activities }) {
  // const { activity } = useParams();
  // const profile = activities.filter(profile => profile.activity === activity);
  console.log(activities);
  const activity = activities.filter(p => p.activity === activity);
  return (
    <>
      <Title>
        <h1>{activity.activity}</h1>
      </Title>
      <WrapperCard>
        <p>
          <strong>{activity.activity}</strong>
        </p>
        <p>{activity.friend}</p>
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
