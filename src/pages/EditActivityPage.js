import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';
import Header from '../components/Header';
import gobackicon from '../images/goback.svg';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';

export default function EditActivityPage({ activities, onEditActivity }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const activityToEdit = activities.find(activity => activity.id === id);

  return (
    <>
      <PageWrapper>
        <Header>
          Edit activity
          <Arrowback
            onClick={() =>
              navigate(`/${activityToEdit.friend}/${activityToEdit.activity}`)
            }
          >
            <img src={gobackicon} alt="go back" />
          </Arrowback>
        </Header>

        <Main>
          <Form
            title="edit activity"
            preloadedValues={activityToEdit}
            handleActivity={onEditActivity}
            buttonName="save"
          />
        </Main>
        <footer>footer</footer>
      </PageWrapper>
    </>
  );
}

const Arrowback = styled.button`
  border: none;
  background: transparent;
  position: fixed;
  top: 5px;
  left: 2px;
`;

const Main = styled.div`
  background: white;
  width: 100%;
`;
