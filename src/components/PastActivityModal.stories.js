import PastActivityModal from './PastActivityModal.js';

export default {
  title: 'Component/PastActivityModal',
  component: PastActivityModal,
};

const Template = args => <PastActivityModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  showPastModal: true,
};
