### IMSEE 👀

# A visualiser for working with IMC 

- QuickStart

  - Clone this repo
  - Create an env.json file in the src folder
  - Add preferences

# Env Variables: 
  - refocusUrl: {String} Url of refocus instance to connect to (ending in /v1)
  - token: {String} - refocus API token (required)
  - toExclude: {Array} - names of any properties to exclude from displaying in tables ie. ["apiLinks", "owner","settings"]
    - Note - excluding 'settings' and 'sharedContext' will remove them from the room and settings table respectively but their data will still be available if their specific button is selected.