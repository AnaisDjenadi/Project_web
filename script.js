const { createApp } = Vue;

createApp({
  data() {
    return {
      artistes: artistes, 
      current: 0,
      showTitle: true
    };
  },
  methods: {
    nextItem() {
      this.current = (this.current + 1) % this.artistes.length;
    },
    prevItem() {
      this.current = (this.current - 1 + this.artistes.length) % this.artistes.length;
    },
    toggleText() {
      this.showTitle = !this.showTitle;
    }
  }
}).mount("#app");
