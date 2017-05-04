// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'; // 这里引入的是router目录，会默认识别里面的index.js文件（不能是其他文字）
import VueResource from 'vue-resource';

import 'common/stylus/index.styl';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
