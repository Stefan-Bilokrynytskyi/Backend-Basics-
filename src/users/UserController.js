'use strict';
import Data from '../Data/Data.js';

export default class UserController {
  getUsers(req, res) {
    try {
      const data = Data.users;
      res.status(200).json(data);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  getUser(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const data = Data.users.find((user) => user.id === Number(id));
      res.status(200).json(data);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = Data.users.find((user) => user.id === Number(id));
      Data.users = Data.users.filter((user) => user.id !== Number(id));
      res.status(200).json(user);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  createUser(req, res) {
    try {
      const { username } = req.body;
      const user = {
        id: Data.users.length + 1,
        username,
      };
      Data.users.push(user);
      res.status(200).json(user);
    } catch (error) {
      console.error('Error', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
