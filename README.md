# Development

### Link to Deployed Website
https://lazyelephant420.github.io/development/

### Goal and Value of the Application
To view and filter/sort through a list of restaurants
### Usability Principles Considered
I used this layout to represent a heirarchy for the different files present mainly just works with the map component and the other components have to do with decorating this main App component.
### Organization of Components
    App.js --> components folder:
        - FilterUser.js/FilterRating.js/SortRating.js all have to do with sorting and FilterRating
        - Sidebar has to do with the sidebar capabilities
        - Restaurants receive a list of filtered/sorted items and lists them in the sidebar
        - Topbar.js deals with the top header
### How Data is Passed Down Through Components
via props
### How the User Triggers State Changes
click on either dropdown or buttons
