import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';
import gobackicon from '../images/goback.svg';
import styled from 'styled-components';

export default function EditActivityPage({ activities, onEditActivity }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const activityToEdit = activities.find(activity => activity.id === id);
  console.log(activityToEdit);
  return (
    <>
      <WrapperApp>
        <Title>
          <Arrowback onClick={() => navigate(`/details/${id}`)}>
            <img src={gobackicon} alt="go back" />
          </Arrowback>
          <HeaderText>Edit activity</HeaderText>
        </Title>
        <Main>
          <Form
            title="edit activity"
            preloadedValues={activityToEdit}
            handleActivity={onEditActivity}
            buttonName="save"
          />
        </Main>
      </WrapperApp>
    </>
  );
}
const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Title = styled.header`
  background: #f0e7da;
  padding: 10px;
  text-align: left;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 60px;
  overflow: hidden;
`;

const Arrowback = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;

const HeaderText = styled.h1`
  margin-left: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Main = styled.div`
  background: white;
  width: 100%;
`;
