import FriendCard from './FriendCard.js';

export default {
  title: 'Component/FriendCard',
  component: FriendCard,
};

const Template = args => <FriendCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  friend: 'Andrea',
  allFriends: ['Andrea', 'Michi', 'Andrea'],
};

export const GroupOfPersons = Template.bind({});
GroupOfPersons.args = {
  friend:
    'Andrea, Michi, Lasse, Henning, Sven, Tanja, Tim, Mareike, Paul, Jerry',
  allFriends: [
    'Andrea, Michi, Lasse, Henning, Sven, Tanja, Tim, Mareike, Paul, Jerry',
    'Michi',
    'Andrea',
  ],
};
