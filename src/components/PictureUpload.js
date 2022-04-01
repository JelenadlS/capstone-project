import { useState } from 'react';
import { DeletePictureButton } from '../components/Button';
import {
  StyledImage,
  StyledPreviewText,
  PositionedSection,
} from '../components/FormStyling';

import useStore from '../hooks/useStore.js';

import deletePictureIcon from '../images/deletePictureIcon.svg';

export default function PictureUpload({ preloadedValues }) {
  const [preloadedPicture, setPreloadedPicture] = useState(
    preloadedValues?.photo
  );
  const photo = useStore(state => state.photo);
  const setPhoto = useStore(state => state.setPhoto);

  return (
    <>
      {preloadedValues ? (
        <>
          {preloadedPicture ? (
            <PositionedSection>
              <StyledImage
                width="60"
                height="60"
                alt={`preview ${preloadedPicture}`}
                src={preloadedPicture}
              />
              <DeletePictureButton onClick={e => onDeletePreloadedPicture(e)}>
                <img
                  src={deletePictureIcon}
                  alt="delete"
                  width="20"
                  height="20"
                />
              </DeletePictureButton>
            </PositionedSection>
          ) : (
            <div>
              {photo ? (
                <PositionedSection>
                  <StyledImage
                    width="60"
                    height="60"
                    alt={`preview ${photo}`}
                    src={photo}
                  />
                  {photo && (
                    <DeletePictureButton onClick={e => onDeletePicture(e)}>
                      <img
                        src={deletePictureIcon}
                        alt="delete"
                        width="20"
                        height="20"
                      />
                    </DeletePictureButton>
                  )}
                </PositionedSection>
              ) : (
                <StyledPreviewText>preview</StyledPreviewText>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          {photo ? (
            <PositionedSection>
              <StyledImage
                width="60"
                height="60"
                alt={`preview ${photo}`}
                src={photo}
              />
              {photo && (
                <DeletePictureButton onClick={e => onDeletePicture(e)}>
                  <img
                    src={deletePictureIcon}
                    alt="delete"
                    width="20"
                    height="20"
                  />
                </DeletePictureButton>
              )}
            </PositionedSection>
          ) : (
            <StyledPreviewText>preview</StyledPreviewText>
          )}
        </>
      )}
    </>
  );
  function onDeletePicture(event) {
    event.preventDefault();
    setPhoto('');
  }

  function onDeletePreloadedPicture(event) {
    event.preventDefault();
    setPreloadedPicture('');
  }
}
