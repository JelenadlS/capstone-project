import { useNavigate } from 'react-router-dom';
import gobackicon from '../images/goback.svg';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Picture from '../components/Picture';
import Main from '../components/Main';
import { ArrowbackButton } from '../components/Button';

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
        <Footer />
      </Picture>
    </>
  );
}
