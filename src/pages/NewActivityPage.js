import { useNavigate } from 'react-router-dom';

import { ArrowbackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Picture from '../components/Picture';

import gobackicon from '../images/goback.svg';

export default function NewActivityPage({ onAddActivity }) {
  const navigate = useNavigate();
  return (
    <Picture>
      <Header>
        new activity
        <ArrowbackButton onClick={() => navigate(-1)}>
          <img src={gobackicon} alt="go back" />
        </ArrowbackButton>
      </Header>
      <Main>
        <Form preloadedValues={null} handleActivity={onAddActivity} />
      </Main>
    </Picture>
  );
}
