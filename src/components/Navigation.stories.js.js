import Navigation from './Navigation.js';
import newicon from '../images/new.svg';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

const Template = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <img src={newicon} alt="new" />,
};
