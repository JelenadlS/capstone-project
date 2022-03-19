import { useNavigate } from 'react-router-dom';
import gobackicon from '../images/goback.svg';
import Form from '../components/Form';
import Header from '../components/Header';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Picture from '../components/Picture';

export default function NewActivityPage({ onAddActivity }) {
  const navigate = useNavigate();
  return (
    <>
      {' '}
      <Picture>
        <Header>
          new activity
          <Arrowback onClick={() => navigate(-1)}>
            <img src={gobackicon} alt="go back" />
          </Arrowback>
        </Header>

        <Form
          title="add activities"
          buttonName={'Add'}
          preloadedValues={null}
          handleActivity={onAddActivity}
        />

        <Footer />
      </Picture>
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
