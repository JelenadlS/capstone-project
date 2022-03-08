import List from './List.js';

export default {
  title: 'Component/List',
  component: List,
};

const Template = args => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  activities: [
    { id: '1', activity: 'Frau Möller', friend: 'Clara' },
    { id: '2', activity: 'Frau Möller', friend: 'Clara' },
  ],
};
