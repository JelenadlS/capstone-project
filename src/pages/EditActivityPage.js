import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import useStore from '../hooks/useStore.js';

import goBackIcon from '../images/goBackIcon.svg';

export default function EditActivityPage({
  activities,
  onEditActivity,
  uploadImage,
}) {
  const setPhoto = useStore(state => state.setPhoto);
  const navigate = useNavigate();
  const { id } = useParams();
  const activityToEdit = activities.find(activity => activity.id === id);

  return (
    <Picture>
      <Header hiddenGroup="hidden">
        Edit activity
        <ArrowBackButton onClick={resetForm}>
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <Main>
        <Form
          preloadedValues={activityToEdit}
          handleActivity={onEditActivity}
          uploadImage={uploadImage}
        />
      </Main>
      <Navigation hidden="hidden"></Navigation>
    </Picture>
  );

  function resetForm() {
    navigate(
      `/${
        activityToEdit?.group ? activityToEdit.group : activityToEdit.friend
      }/${activityToEdit.activity}`
    );
    setPhoto('');
  }
}
