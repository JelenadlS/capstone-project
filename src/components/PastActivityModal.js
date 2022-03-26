import styled from 'styled-components';

import { QuitButton } from '../components/Button';
import { ModalButton } from './Button.js';

import deletePictureIcon from '../images/deletePictureIcon.svg';

export default function PastActivityModal() {
  return (
    <WrapperModal>
      <p>Tell us, how was it?</p>
      <i>
        Please note, the activity will be deleted from your activity list and
        transfered to a past activiy list.
      </i>
      <span>
        <StyledModalButton type="submit">
          It was great, I wanna do it again!
        </StyledModalButton>
        <StyledModalButton type="submit">
          Naahh it was not so good
        </StyledModalButton>
        <QuitButton>
          <img src={deletePictureIcon} alt="delete" width="20" height="20" />{' '}
        </QuitButton>
      </span>
    </WrapperModal>
  );
}
const WrapperModal = styled.section`
  border: none;
  border-radius: 20px;
  background: #f0e7da;
  display: grid;
  grid-template-rows: auto auto;
  position: fixed;
  position: absolute;
  width: 350px;
  height: 190px;
  top: 50%;
  left: 50%;
  padding-top: 10px;
  margin-top: -100px;
  margin-left: -150px;

  p {
    text-align: center;
    align-self: center;
  }

  i {
    text-align: center;
    padding: 10px;
    font-size: 12px;
  }
  span {
    text-align: center;
  }
`;

const StyledModalButton = styled(ModalButton)`
  font-size: 12px;
`;