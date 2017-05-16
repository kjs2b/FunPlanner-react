import axios from 'axios';

module.exports = {
  fetchAdventures: () =>
    axios.get('/api/adventures')
      .then((res) => res.data)
}