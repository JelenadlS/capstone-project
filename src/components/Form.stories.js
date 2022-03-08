import Form from './Form.js';

export default {
  title: 'Component/Form',
  component: Form,
};

const Template = args => <Form {...args} />;

export const FormFields = Template.bind({});
FormFields.args = {};
