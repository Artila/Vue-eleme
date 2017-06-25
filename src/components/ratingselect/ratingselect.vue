<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="select(2, $event)" class="block positive"
            :class="{'active':selectType === 2}">
        {{desc.all}}<span class="count">{{ratings.length}}</span>
      </span>
      <span @click="select(0, $event)" class="block positive"
            :class="{'active':selectType === 0}">
        {{desc.positive}}<span class="count">{{positives.length}}</span>
      </span>
      <span @click="select(1, $event)" class="block negative"
            :class="{'active':selectType === 1}">
        {{desc.negative}}<span class="count">{{negatives.length}}</span>
      </span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;

  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          };
        }
      }
    },
    computed: {
      positives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negatives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    },
    methods: {
      select(type, event) {
        if (!event._constructed) {
          return;
        }
//      在这里修改会出错
//      this.selectType = type;
        this.$emit('select', type);
      },
      toggleContent(event) {
        if (!event._constructed) {
          return;
        }
//      在这里修改会出错
//      this.onlyContent = !this.onlyContent;
//      这里不用驼峰， 在网上找到的解释是：例子 v-on:clickFn="myclickFn"，因为 v-on:clickFn 属于 HTML 标签属性，会被浏览器自动转换为小写，即会变为 v-on:clickfn。所以用 this.$emit('clickFn', 'xxx') 无法调用，但你可以使用 this.$emit('clickfn', 'xxx') 来调用。
        this.$emit('toggle');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./ratingselect.styl";
</style>
