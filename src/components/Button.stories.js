import Button from './Button.js';
import { IconButton } from './Button.js';
import deleteicon from '../images/binicon.svg';
import gobackicon from '../images/goback.svg';
import newicon from '../images/new.svg';
import editicon from '../images/edit.svg';

export default {
  title: 'Component/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Add',
  width: '100%',
  height: 'fit-content',
};

export const Delete = Template.bind({ IconButton });
Delete.args = {
  children: <img src={deleteicon} alt="delete" />,
};

export const Yes = Template.bind();
Yes.args = {
  children: 'please delete',
  fontSize: '14px',
  width: 'fit-content',
  height: 'fit-content',
};

export const No = Template.bind();
No.args = {
  children: 'no, I want to keep it',
  fontSize: '14px',
  width: 'fit-content',
  height: 'fit-content',
};

export const Arrow = Template.bind();
Arrow.args = {
  children: <img src={gobackicon} alt="delete" />,
  background: 'transparent',
  justifySelf: 'start',
};

export const New = Template.bind();
New.args = {
  children: <img src={newicon} alt="new" />,
  borderRadius: '40%',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
};

export const Edit = Template.bind();
Edit.args = {
  children: <img src={editicon} alt="edit" />,
  background: 'transparent',
};

export const Save = Template.bind({});
Save.args = {
  children: 'save',
};
