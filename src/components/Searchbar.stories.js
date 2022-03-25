import Searchbar from './Searchbar.js';

export default {
  title: 'Component/Searchbar',
  component: Searchbar,
};

const Template = args => <Searchbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
