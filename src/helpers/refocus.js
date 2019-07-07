const generics = require('./generics.js');
const REFOCUS_URL = 'http://localhost:3000/v1';
const ROOM_PATH = 'rooms';
const ROOMTYPE_PATH = 'roomTypes';
const BOT_PATH = 'bots';
const BOTDATA_PATH = 'botData';
module.exports = {
  api: (token) => {
    return {

      getRooms: () => generics.get(token, `${REFOCUS_URL}/${ROOM_PATH}`),

      /**
       * @param {String} id - Id of room to get
       * @returns {Promise} promise resolving to room object
       */
      getRoom: (id) => generics.get(token, `${REFOCUS_URL}/${ROOM_PATH}/${id}`),

      createRoom: (roomObject) => generics.post(token, `${REFOCUS_URL}/${ROOM_PATH}`, roomObject),

      updateRoom: (id, roomObject) => generics.patch(token, `${REFOCUS_URL}/${ROOM_PATH}/${id}`, roomObject),

      getRoomTypes: () => generics.get(token, `${REFOCUS_URL}/${ROOMTYPE_PATH}`),

      getRoomType: (id) => generics.get(token, `${REFOCUS_URL}/${ROOMTYPE_PATH}/${id}`),

      createRoomType: (roomTypeObject) => generics.post(token, `${REFOCUS_URL}/${ROOMTYPE_PATH}`, roomTypeObject),

      updateRoomType: (id, roomTypeObject) => generics.patch(token, `${REFOCUS_URL}/${ROOMTYPE_PATH}/${id}`, roomTypeObject),

      getBots: () => generics.get(token, `${REFOCUS_URL}/${BOT_PATH}`),

      getBot: (id) => generics.get(token, `${REFOCUS_URL}/${BOT_PATH}/${id}`),

      getBotsData: (botId) => generics.get(token, `${REFOCUS_URL}/${BOTDATA_PATH}?botId=${botId}`),

      getBotData: (id) => generics.get(token, `${REFOCUS_URL}/${BOTDATA_PATH}/${id}`),

    }
  }
};
