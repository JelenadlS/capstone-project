import Navigation from './Navigation.js';

import newIcon from '../images/newIcon.svg';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

const Template = args => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <img src={newIcon} alt="new" />,
};
