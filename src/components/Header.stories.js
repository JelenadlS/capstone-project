import Header from './Header';

export default {
  title: 'components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Top 10 to do in Hamburg',
};
