import Card from './Card.js';

export default {
  title: 'Component/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const FullCard = Template.bind({});
FullCard.args = {
  activity: {
    activity: 'Frau Möller',
    friend: 'Clara',
  },
};

export const OnlyActivityCard = Template.bind({});
OnlyActivityCard.args = {
  activity: {
    activity: 'Frau Möller',
  },
};
