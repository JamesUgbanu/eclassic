import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

class UserController {
  /**
   *  @param {Object} request
   *  @param {Object} response
   *  @return {Object} json
   */
  static login(req, res, next) {
    axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
      grant_type: 'password',
      username: req.body.username,
      password: req.body.password,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
      json: true
    }).then((response) => {
    // access_token!
      return res.status(200).json({ token: response.data.access_token });
    }).catch(error => res.status(error.response.status).json({ error: error.response.data.error_description }));
  }
}

export default UserController;
