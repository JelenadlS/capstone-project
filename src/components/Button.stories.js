import Button from './Button.js';
import deleteicon from '../images/binicon.svg';
import gobackicon from '../images/goback.svg';

export default {
  title: 'Component/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Add',
};

export const Delete = Template.bind();
Delete.args = {
  children: <img src={deleteicon} alt="delete" />,
  background: 'transparent',
  justifySelf: 'end',
};

export const Yes = Template.bind();
Yes.args = {
  children: 'please delete',
  fontSize: '14px',
  width: 'fit-content',
};

export const No = Template.bind();
No.args = {
  children: 'no, I want to keep it',
  fontSize: '14px',
  width: 'fit-content',
};

export const Arrow = Template.bind();
Arrow.args = {
  children: <img src={gobackicon} alt="delete" />,
  background: 'transparent',
  justifySelf: 'start',
};
