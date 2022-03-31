import Form from './Form.js';

export default {
  title: 'Component/Form',
  component: Form,
};

const Template = args => <Form {...args} />;

export const FormFields = Template.bind({});
FormFields.args = {
  addedFriend: [
    { id: '1', newFriend: 'Andrea' },
    { id: '2', newFriend: 'Clara' },
  ],
  addedGroup: [
    { id: '1', enteredGroup: 'Sportclub' },
    { id: '2', enteredGroup: 'Segeln' },
  ],
  preloadedValues: null,
};
