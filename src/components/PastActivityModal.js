import styled from 'styled-components';

import { ModalButton, QuitButton } from './Button.js';
import deletePictureIcon from '../images/deletePictureIcon.svg';

export default function PastActivityModal({
  showPastModal,
  onClose,
  onSetPastActivity,
  id,
  handleQuit,
}) {
  if (!showPastModal) {
    return null;
  }

  return (
    <WrapperModal role="dialog">
      <p>Tell us, how was it?</p>
      <i>
        Please note, the activity will be deleted from your activity list and
        transfered to a past activiy list.
      </i>
      <span>
        <StyledModalButton type="submit" onClick={() => handlePastAndLiked(id)}>
          It was great, I wanna do it again!
        </StyledModalButton>
        <StyledModalButton type="submit" onClick={() => handlePastNotLiked(id)}>
          Naahh it was not so good
        </StyledModalButton>
        <QuitButton onClick={handleQuit}>
          <img
            src={deletePictureIcon}
            alt="quit/ keep and return back"
            width="20"
            height="20"
            type="submit"
            onClick={onClose}
          />
        </QuitButton>
      </span>
    </WrapperModal>
  );

  function handlePastAndLiked(id) {
    const isLiked = 'true';
    onSetPastActivity(id, isLiked);
  }

  function handlePastNotLiked(id) {
    const isLiked = 'false';
    onSetPastActivity(id, isLiked);
  }
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
  margin-top: -140px;
  margin-left: -175px;

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
