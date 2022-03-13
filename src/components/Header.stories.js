import Header from './Header.js';
import GlobalStyles from '../GlobalStyles.js';

export default {
  title: 'Component/Header',
  component: Header,
  decorators: [
    Story => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

const Template = args => <Header {...args} />;

export const HeaderAB = Template.bind({});
HeaderAB.args = {};

export const HeaderXY = Template.bind({});
HeaderXY.args = {};
