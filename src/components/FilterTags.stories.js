import FilterTags from './FilterTags.js';

export default {
  title: 'Component/FilterTags',
  component: FilterTags,
};

const Template = args => <FilterTags {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedFriendsActivity: [
    {
      id: '1',
      activity: 'Eislaufen',
      category: 'sport',
      friend: 'Clara',
      photo: 'activity.png',
    },
    {
      id: '2',
      activity: 'Kunstaustellung',
      category: 'culture',
      friend: 'Clara',
      photo: 'activity.png',
    },
    {
      id: '3',
      activity: 'Frau Möller',
      category: 'food and beverages',
      friend: 'Clara',
      photo: 'activity.png',
    },
    {
      id: '4',
      activity: 'Spazieren',
      category: 'outdoor',
      friend: 'Clara',
      photo: 'activity.png',
    },
    {
      id: '5',
      activity: 'Shoppen',
      category: 'other',
      friend: 'Clara',
      photo: 'activity.png',
    },
  ],
};
