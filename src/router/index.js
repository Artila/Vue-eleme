// 负责路由映射，便于管理
import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from 'components/goods/goods';
import Ratings from 'components/ratings/ratings';
import Seller from 'components/seller/seller';

Vue.use(VueRouter);

// 创建路由实例并配置路由映射
const router = new VueRouter({
	linkActiveClass: 'active',
  routes: [
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller }
  ]
});

// 默认
router.push({ path: '/goods' });

// 输出router
export default router;
