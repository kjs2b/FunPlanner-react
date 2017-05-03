import axios from 'axios';

module.exports = {
  fetchAdventures: () =>
    axios.get('localhost:4040/adventures')
      .then((res) => console.log(res))
}