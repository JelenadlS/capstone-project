import {
  ArrowBackButton,
  DeleteButton,
  EditButton,
  MainNavButton,
  ModalButton,
  QuitButton,
} from './Button.js';
import Button from './Button.js';

import addPictureIcon from '../images/addPictureIcon.svg';
import deleteIcon from '../images/binIcon.svg';
import deletePictureIcon from '../images/deletePictureIcon.svg';
import editIcon from '../images/editIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default {
  title: 'Component/Button',
  component: Button,
  subcomponents: { ArrowBackButton, MainNavButton, ModalButton },
};

export const Empty = args => <Button {...args} />;

export const MainNavPlus = args => (
  <MainNavButton {...args}>
    <img src={newIcon} alt="new" />
  </MainNavButton>
);

export const MainNavSave = args => (
  <MainNavButton {...args}>
    <img src={saveIcon} alt="save" />
  </MainNavButton>
);

export const ModalDelete = args => (
  <ModalButton {...args}>please delete</ModalButton>
);

export const ModalKeep = args => (
  <ModalButton {...args}>no, I want to keep it</ModalButton>
);

export const ArrowBack = args => (
  <ArrowBackButton {...args}>
    <img src={goBackIcon} alt="goback" />
  </ArrowBackButton>
);

export const Edit = args => (
  <EditButton {...args}>
    <img src={editIcon} alt="edit" />
  </EditButton>
);

export const Delete = args => (
  <DeleteButton {...args}>
    <img src={deleteIcon} alt="deleteactivity" />
  </DeleteButton>
);

export const AddPictureButton = args => (
  <DeleteButton {...args}>
    <img src={addPictureIcon} alt="addpicture" />
  </DeleteButton>
);

export const DeletePictureButton = args => (
  <DeleteButton {...args}>
    <img src={deletePictureIcon} alt="deletepicture" />
  </DeleteButton>
);

export const QuitButtonVariante = args => (
  <QuitButton {...args}>
    <img src={deletePictureIcon} alt="deletepicture" />
  </QuitButton>
);
