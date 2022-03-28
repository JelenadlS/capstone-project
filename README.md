# Capstone Project

## About the App

Don't you hate these times: friends ask you out for dinner and you keep forgetting the name of this one restaurant you always wanted to go to?
Or just imagine, you see a poster of an upcoming amazing event somewhere and you directly know; I wanna go there with my best friend but how should I remember?
.... Forget these struggles by using the Togather!

You can add an activity to your list either linked with a friends name or just for yourself. Later on, when being home and you have time to share it or someone asks, you can check the app and it tells you what you saved for your future activities. Also you can check what you did and linked - get inspired!

## Functionality

- Overview
  - Start screen shows a list of friends with a #no. When clicking on this friend a list with activities is displayed (#no of activities = #no in start screen)
  - At the very top "Things I still need to plan with someone:" will be displayed for all activities which did not get a friends information
  - It is possible to click on each activity to receive further information which was entered.
- Add/ edit an activity with the following information:
  - Activity (required)
  - Category (optional, other by default)
  - Friends (optional)
  - Notes (optional)
  - Picture (optional - if not uploaded placeholder picture is available)
  - Date (optional)
  - Location (optional)
- Delete items from the list
- Filter your activities which you have with a specific friend
- Pages
  - All activities page where you can search and filter through all activities not dependent on which friend is part of it
  - Inspiration page where you can toggle between liked and not liked activities (check on the overview page of the activity to set the activity past), also individually search and filter them
- Storage: localStorage

## How to use it?

- Clone the project
- Install: `npm install`
- Tests: `npm test`
- Storybook: `npm run storybook`
- Visible in Browser: `npm start`
