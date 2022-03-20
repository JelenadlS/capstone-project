import ActivityCard from './ActivityCard.js';

export default {
  title: 'Component/ActivityCard',
  component: ActivityCard,
};

const Template = args => <ActivityCard {...args} />;

export const FullCard = Template.bind({});
FullCard.args = {
  activity: 'Frau Möller',
};

export const VeryLongText = Template.bind({});
VeryLongText.args = {
  activity: 'Heute gehen wir zusammen in den Park und pflücken Blumen',
};
