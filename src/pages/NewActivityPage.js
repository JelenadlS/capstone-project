import { useNavigate } from 'react-router-dom';

import { ArrowbackButton } from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import gobackicon from '../images/goback.svg';

export default function NewActivityPage({ onAddActivity }) {
  const navigate = useNavigate();
  return (
    <>
      <Picture>
        <Header>
          new activity
          <ArrowbackButton onClick={() => navigate(-1)}>
            <img src={gobackicon} alt="go back" />
          </ArrowbackButton>
        </Header>
        <Main>
          <Form
            title="add activities"
            buttonName={'Add'}
            preloadedValues={null}
            handleActivity={onAddActivity}
          />
        </Main>
        <Navigation />
      </Picture>
    </>
  );
}
