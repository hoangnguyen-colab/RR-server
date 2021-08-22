const usersGeneral = [];
const users = [];

const addUserGeneral = ({ socketId, userId, name }) => {
  name = name.trim().toLowerCase();
  if (!name) return { error: 'Username are required.' };

  const existingUser = usersGeneral.find((user) => user.name === name);

  if (existingUser) return { error: 'Username is taken.' };

  const user = { socketId, userId, name };

  usersGeneral.push(user);

  return { user };
}

const removeUserGeneral = (socketId) => {
  const index = usersGeneral.findIndex((user) => user.socketId === socketId);

  if (index !== -1) return usersGeneral.splice(index, 1)[0];
}

const addUserRoom = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUserRoom = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUserGeneral, removeUserGeneral, addUserRoom, removeUserRoom, getUser, getUsersInRoom };