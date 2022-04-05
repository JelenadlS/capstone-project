import DescriptionOfApp from './DescriptionOfApp.js';

export default {
  title: 'Component/DescriptionOfApp',
  component: DescriptionOfApp,
};

const Template = args => <DescriptionOfApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  group: true,
};
