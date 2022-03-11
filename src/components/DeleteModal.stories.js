
    import DeleteModal from './DeleteModal.js';
    import GlobalStyles from '../GlobalStyles.js';
    
    export default {
      title: 'Component/DeleteModal',
      component: DeleteModal,
      decorators: [
        Story => (
          <>
            <GlobalStyles />
            <Story />
          </>
        ),
      ],
    };

    const Template = args => <DeleteModal {...args} />;
    
    export const DeleteModalAB = Template.bind({});
    DeleteModalAB.args = {
      
    };

    export const DeleteModalXY = Template.bind({});
    DeleteModalXY.args = {
      
    };
  