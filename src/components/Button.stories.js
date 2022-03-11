import Button from './Button.js';
//import deleteicon from '../images/binicon.svg';

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
  children: 'delete',
  // children: `${(<img src={deleteicon} alt="delete" />)}`,
  background: 'transparent',
  justifySelf: 'end',
};

export const Yes = Template.bind();
Yes.args = {
  children: 'please delete',
  fontSize: '10px',
  padding: '13px',
};

export const No = Template.bind();
No.args = {
  children: 'no, I want to keep it',
  fontSize: '14px',
};
