import PictureUpload from './PictureUpload.js';

export default {
  title: 'Component/PictureUpload',
  component: PictureUpload,
};

const Template = args => <PictureUpload {...args} />;

export const Default = Template.bind({});
Default.args = {};
