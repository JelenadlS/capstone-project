import { useNavigate, useParams } from 'react-router-dom';

import { ArrowbackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Navigation';
import Picture from '../components/Picture';

import gobackicon from '../images/goback.svg';

export default function EditActivityPage({ activities, onEditActivity }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const activityToEdit = activities.find(activity => activity.id === id);

  return (
    <>
      <Picture>
        <Header>
          Edit activity
          <ArrowbackButton
            onClick={() =>
              navigate(`/${activityToEdit.friend}/${activityToEdit.activity}`)
            }
          >
            <img src={gobackicon} alt="go back" />
          </ArrowbackButton>
        </Header>
        <Main>
          <Form
            title="edit activity"
            preloadedValues={activityToEdit}
            handleActivity={onEditActivity}
            buttonName="save"
          />
        </Main>
        <Footer />
      </Picture>
    </>
  );
}
