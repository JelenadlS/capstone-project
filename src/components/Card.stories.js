import Card from './Card.js';

export default {
  title: 'Component/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const FullCard = Template.bind({});
FullCard.args = {
  activity: 'Frau Möller',
};

export const VeryLongText = Template.bind({});
VeryLongText.args = {
  activity: 'Heute gehen wir zusammen in den Park und pflücken Blumen',
};
