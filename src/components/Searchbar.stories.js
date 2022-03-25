
    import Searchbar from './Searchbar.js';
    import GlobalStyles from '../GlobalStyles.js';
    
    export default {
      title: 'Component/Searchbar',
      component: Searchbar,
      decorators: [
        Story => (
          <>
            <GlobalStyles />
            <Story />
          </>
        ),
      ],
    };

    const Template = args => <Searchbar {...args} />;
    
    export const SearchbarAB = Template.bind({});
    SearchbarAB.args = {
      
    };

    export const SearchbarXY = Template.bind({});
    SearchbarXY.args = {
      
    };
  