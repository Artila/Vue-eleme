<template>
	<!--根元素： 在2.0中template下需要有一个根元素（app-wrapper），否则会报错；-->
	<div class="app-wrapper">
	  <v-header :seller="seller"></v-header>
	  <div class="tab">
	  	<!--使用 router-link 组件来导航-->
	  	<!--通过传入 'to' 属性指定链接-->
	  	<!--<router-link>默认会被渲染成一个 '<a>' 标签-->
	  	<router-link to="/goods">商品</router-link>
	  	<router-link to="/ratings">评论</router-link>
	  	<router-link to="/seller">商家</router-link>
	  </div>

	  <!--路由出口-->
	  <!--路由匹配到的组件将渲染在这里-->
	  <router-view :seller="seller"></router-view>
	</div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';

	const ERR_OK = 0;

  export default {
  	data() {
  		return {
  			seller: {}
  		};
  	},
		created() {
			this.$http.get('/api/seller').then((response) => {
				response = response.body;
				if (response.errno === ERR_OK) {
					this.seller = response.data;
				}
			});
		},
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
/*记得要缩进*/
@import './common/stylus/mixin.styl'

.app-wrapper
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    a
      flex: 1
      text-align: center
      display: block
      font-size: 14px
      color: rgb(77, 85, 93)
      &.active
        color: rgb(240, 20, 20)
</style>
