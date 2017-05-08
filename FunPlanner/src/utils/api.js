import axios from 'axios';

module.exports = {
  fetchAdventures: () =>
    axios.get('/api/adventures')
      .then((res) => console.log(res))
}