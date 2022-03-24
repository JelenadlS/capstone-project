import List from './List.js';

export default {
  title: 'Component/List',
  component: List,
};

const Template = args => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedFriendsActivity: [
    {
      id: '1',
      activity: 'Frau Möller',
      category: 'sport',
      friend: 'Clara',
      photo: '',
    },
    {
      id: '2',
      activity: 'Stadtpark',
      category: 'culture',
      friend: 'Jana',
      photo: '',
    },
  ],
};
