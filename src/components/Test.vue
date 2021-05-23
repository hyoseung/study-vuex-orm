<template>
  <div>
    <h1>veux-orm 테스트</h1>
    <div>
      {{ orderList }}
    </div>
  </div>
</template>

<script>
import { data } from '@/sample/data.js';
import { Order } from '@/models';

export default {
  name: 'Test',
  data() {
    return {
      orderList: []
    }
  },
  created() {
    this.setVuexOrm();
    this.getData();
  },
  methods: {
    async setVuexOrm() {
      await Order.create({ data });
      //await Order.create({ data: data });
    },
    getData() {
      let data = Order.query().with('details', (query) => {
          query.with('delivery')
        }).get();
      console.log(data);

      let result = [];
      data.forEach(order => {
        result.push({
          ...order.$toJson() // $id 제외
        });
      });
      this.orderList = result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
