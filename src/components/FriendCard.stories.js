
    import FriendCard from './FriendCard.js';
    import GlobalStyles from '../GlobalStyles.js';
    
    export default {
      title: 'Component/FriendCard',
      component: FriendCard,
      decorators: [
        Story => (
          <>
            <GlobalStyles />
            <Story />
          </>
        ),
      ],
    };

    const Template = args => <FriendCard {...args} />;
    
    export const FriendCardAB = Template.bind({});
    FriendCardAB.args = {
      
    };

    export const FriendCardXY = Template.bind({});
    FriendCardXY.args = {
      
    };
  