### IMSEE 👀

# A visualiser for working with IMC 

- QuickStart

  - Clone this repo
  - Create an env.json file in the src folder
  - Add preferences

# Env Variables: 

  - token: {String} - refocus API token (required)
  - toExclude: {Array} - names of any properties to exclude from displaying in tables ie. ['apiLinks', 'owner']
    - Note - excluding 'settings' and 'sharedContext' will remove them from the room and settings table respectively but their data will still be available if their specific button is selected.