import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';

import useStore from '../hooks/useStore.js';

import goBackIcon from '../images/goBackIcon.svg';

export default function EditActivityPage({ activities, uploadImage }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const setPhoto = useStore(state => state.setPhoto);
  const setShowSave = useStore(state => state.setShowSave);
  const onEditActivity = useStore(state => state.onEditActivity);

  const activityToEdit = activities.find(activity => activity.id === id);

  return (
    <>
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
    </>
  );

  function resetForm() {
    navigate(
      `/${
        activityToEdit?.group ? activityToEdit.group : activityToEdit.friend
      }/${activityToEdit.activity}`
    );
    setPhoto('');
    setShowSave(false);
  }
}
