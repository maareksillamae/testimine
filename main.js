const app = new Vue({
	el: '#app',
	data: {
		time: '21:04',
		timer: ''
	},
	created() {
		this.updateClock();
	},
	methods: {
		updateClock() {
			this.time = new Date().toLocaleTimeString([], {hour12: false});
			this.timer = setInterval(this.updateClock, 1000);
		}
	}
});