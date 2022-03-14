import Header from './Header.js';

export default {
  title: 'Component/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'my activities',
};

export const HeaderWArrow = Template.bind({});
HeaderWArrow.args = {
  title: 'Spazieren',
  link: 'y',
};
