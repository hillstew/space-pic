const vm = new Vue({
  el: '#app',
  data: {
    picture: '',
    url:
      'https://api.nasa.gov/planetary/apod?api_key=SEOAT78ctXgcPYT4XE7S24WE9FNO9v0G7nNIh2RJ',
    counter: 1
  },
  methods: {
    previousDayPicture() {
      var today = new Date().getDate();
      var date1 = today - this.counter;
      this.counter !== today - 1
        ? (this.counter += 1)
        : (this.counter = today - 1);
      const url2 = `${this.url}&date=2019-04-${date1}`;
      axios.get(url2).then(response => {
        this.picture = response.data;
      });
    },
    resetPicture() {
      this.counter = 1;
      axios.get(this.url).then(response => {
        this.picture = response.data;
      });
    }
  },
  mounted() {
    axios.get(this.url).then(response => {
      this.picture = response.data;
    });
  }
});
