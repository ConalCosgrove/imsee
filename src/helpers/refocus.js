const generics = require('./generics.js');
const REFOCUS_URL = 'http://localhost:3000/v1';
const ROOM_PATH = 'rooms';
const ROOMTYPE_PATH = 'roomTypes';
const BOT_PATH = 'bots';
const BOTDATA_PATH = 'botData';
const LIMIT_PARAM = 'limit'
const DEFAULT_LIMIT = '0';
const SORT_BY_ID = 'sort=-id';

const constructLimitString = (defaultLimit) => (limit) => {
  return `${LIMIT_PARAM}=${limit ? limit : defaultLimit}`;
}

const constructLimitDefaultZero = constructLimitString(DEFAULT_LIMIT);
module.exports = {
  api: (token) => {
    return {

      getRooms: (limit) => generics.get(token, `${REFOCUS_URL}/${ROOM_PATH}?${constructLimitDefaultZero(limit)}&${SORT_BY_ID}`),

      getRoom: (id) => generics.get(token, `${REFOCUS_URL}/${ROOM_PATH}/${id}`),

      createRoom: (roomObject) => generics.post(token, `${REFOCUS_URL}/${ROOM_PATH}`, roomObject),

      updateRoom: (id, roomObject) => generics.patch(token, `${REFOCUS_URL}/${ROOM_PATH}/${id}`, roomObject),

      getRoomTypes: (limit) => generics.get(token, `${REFOCUS_URL}/${ROOMTYPE_PATH}?${constructLimitDefaultZero(limit)}&${SORT_BY_ID}`),

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
