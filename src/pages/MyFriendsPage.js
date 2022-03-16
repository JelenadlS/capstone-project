import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import newicon from '../images/new.svg';
import styled from 'styled-components';

export default function MyFriendsPage(activities, id) {
  return (
    <>
      <WrapperApp>
        <Header title="my friends" />
        <Main>
          <div>Test</div>
          <div>Test</div>
        </Main>
        <Bottom>
          <NavLink to="newactivity">
            <Button
              borderRadius="40%"
              boxShadow="0px 0px 20px rgba(0, 0, 0, 0.15)"
            >
              <img src={newicon} alt="new" />
            </Button>
          </NavLink>
        </Bottom>
      </WrapperApp>
    </>
  );
}

const WrapperApp = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
`;

const Main = styled.main`
  overflow-y: auto;
`;
const Bottom = styled.div`
  background: #f0e7da;
  text-align: center;
  width: 100%;
`;
