<template>
  <div>
    <h1>veux-orm 테스트</h1>
  </div>
</template>

<script>
import { data } from '@/sample/data.js';
import { Order } from '@/models';

export default {
  name: 'Test',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.setVuexOrm();
  },
  methods: {
    async setVuexOrm() {
      await Order.create({ data });
      //await Order.create({ data: data });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
