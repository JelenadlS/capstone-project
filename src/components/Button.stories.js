import { ArrowbackButton } from './Button.js';
import Button from './Button.js';
import { DeleteButton } from './Button.js';
import { EditButton } from './Button.js';
import { MainNavButton } from './Button.js';
import { ModalButton } from './Button.js';

import deleteicon from '../images/binicon.svg';
import editicon from '../images/edit.svg';
import gobackicon from '../images/goback.svg';
import newicon from '../images/new.svg';
import saveicon from '../images/save.svg';

export default {
  title: 'Component/Button',
  component: Button,
  subcomponents: { ArrowbackButton, MainNavButton, ModalButton },
};

export const Empty = args => <Button {...args} />;

export const MainNavPlus = args => (
  <MainNavButton {...args}>
    <img src={newicon} alt="new" />
  </MainNavButton>
);

export const MainNavSave = args => (
  <MainNavButton {...args}>
    <img src={saveicon} alt="save" />
  </MainNavButton>
);

export const ModalDelete = args => (
  <ModalButton {...args}>please delete</ModalButton>
);

export const ModalKeep = args => (
  <ModalButton {...args}>no, I want to keep it</ModalButton>
);

export const Arrowback = args => (
  <ArrowbackButton {...args}>
    <img src={gobackicon} alt="goback" />
  </ArrowbackButton>
);

export const Edit = args => (
  <EditButton {...args}>
    <img src={editicon} alt="edit" />
  </EditButton>
);

export const Delete = args => (
  <DeleteButton {...args}>
    <img src={deleteicon} alt="delete" />
  </DeleteButton>
);
