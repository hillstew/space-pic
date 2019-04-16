const url =
  'https://api.nasa.gov/planetary/apod?api_key=SEOAT78ctXgcPYT4XE7S24WE9FNO9v0G7nNIh2RJ';
const vm = new Vue({
  el: '#app',
  data: {
    pictureOfDay: '',
    path: null
  },
  mounted() {
    axios.get(url).then(response => {
      this.pictureOfDay = response.data;
    });
  }
});
