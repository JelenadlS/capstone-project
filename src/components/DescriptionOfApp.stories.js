
    import DescriptionOfApp from './DescriptionOfApp.js';
    import GlobalStyles from '../GlobalStyles.js';
    
    export default {
      title: 'Component/DescriptionOfApp',
      component: DescriptionOfApp,
      decorators: [
        Story => (
          <>
            <GlobalStyles />
            <Story />
          </>
        ),
      ],
    };

    const Template = args => <DescriptionOfApp {...args} />;
    
    export const DescriptionOfAppAB = Template.bind({});
    DescriptionOfAppAB.args = {
      
    };

    export const DescriptionOfAppXY = Template.bind({});
    DescriptionOfAppXY.args = {
      
    };
  