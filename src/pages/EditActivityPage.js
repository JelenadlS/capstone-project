import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Picture from '../components/Picture';

import goBackIcon from '../images/goBackIcon.svg';

export default function EditActivityPage({ activities, onEditActivity }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const activityToEdit = activities.find(activity => activity.id === id);

  return (
    <Picture>
      <Header>
        Edit activity
        <ArrowBackButton
          onClick={() =>
            navigate(`/${activityToEdit.friend}/${activityToEdit.activity}`)
          }
        >
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Form
          preloadedValues={activityToEdit}
          handleActivity={onEditActivity}
        />
      </Main>
    </Picture>
  );
}
