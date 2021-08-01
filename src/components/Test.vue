<template>
  <b-container fluid>
    <h1>veux-orm 테스트</h1>
    <b-row>
      <b-col>
        <b-form-group label="결제방법:">
          <b-form-checkbox-group
            v-model="paymentSelected"
            :options="paymentOptions"
            plain
            @change="getData"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="카테고리:">
          <b-form-checkbox-group
            v-model="categorySelected"
            :options="categoryOptions"
            plain
            @change="getData"
          ></b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>

    <b-table-simple responsive="true">
      <b-thead head-variant="light">
        <b-tr>
          <b-th>No.</b-th>
          <b-th>주문번호</b-th>
          <b-th>주문일자</b-th>
          <b-th>주문자</b-th>
          <b-th>결제방법</b-th>
          <b-th>총 금액</b-th>
          <b-th>카테고리</b-th>
          <b-th>품목명</b-th>
          <b-th>수량</b-th>
          <b-th>가격</b-th>
          <b-th>배송지</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-for="(order, idx) in orderList" :key="order.orderId">
        <b-tr :class="{'odd-row': (idx+1)%2 === 1}">
          <b-td :rowspan="order.details.length+1">{{idx+1}}</b-td>
          <b-td :rowspan="order.details.length+1">{{order.orderNo}}</b-td>
          <b-td :rowspan="order.details.length+1">{{order.orderDate}}</b-td>
          <b-td :rowspan="order.details.length+1">{{order.name}}</b-td>
          <b-td :rowspan="order.details.length+1">{{order.paymentType}}</b-td>
          <b-td :rowspan="order.details.length+1">{{numberWithCommas(order.totalPrice)}}원</b-td>
        </b-tr>
        <template v-for="detail in order.details">
          <b-tr :key="detail.detailId" :class="{'odd-row': (idx+1)%2 === 1}">
            <b-td>{{detail.itemCategory}}</b-td>
            <b-td>{{detail.itemName}}</b-td>
            <b-td>{{detail.quantity}}</b-td>
            <b-td>{{numberWithCommas(detail.price)}}원</b-td>
            <b-td>
              <b-button size="sm" @click="onClickDelivery(detail.delivery, $event.target)" class="mr-1">
                배송지
              </b-button>
            </b-td>
          </b-tr>
        </template>
      </b-tbody>
    </b-table-simple>

    <b-table-simple responsive="true">
      <b-thead head-variant="light">
        <b-tr>
          <b-th>Query Result</b-th>
          <b-th>Result</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>{{ queryResult }}</b-td>
          <b-td>{{ result }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <!-- 배송지 modal -->
    <b-modal :id="modalData.id" :title="modalData.title" ok-only :hide-header-close="false">
      <pre>{{ modalData.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
import { data } from '@/sample/data.js';
import { Order } from '@/models';
import { PAYMENT_TYPE, CATEGORY_TYPE } from '@/sample/enum.js';

export default {
  name: 'Test',
  data() {
    return {
      orderList: [],
      modalData: {
        id: 'info-modal',
        title: '배송지',
        content: null
      },
      paymentSelected: [],
      categorySelected: [],
      queryResult: [],
      result: []
    }
  },
  created() {
    this.paymentSelected = [ ...PAYMENT_TYPE ];
    this.categorySelected = [ ...CATEGORY_TYPE ];
    this.setVuexOrm();
    this.getData();
  },
  destroyed() {
    this.$store.dispatch('entities/deleteAll');
  },
  computed: {
    totalRows() {
      return this.orderList.length;
    },
    paymentOptions() {
      return PAYMENT_TYPE.map(e => {
        return { text: e, value: e };
      });
    },
    categoryOptions() {
      return CATEGORY_TYPE.map(e => {
        return { text: e, value: e };
      });
    }
  },
  methods: {
    async setVuexOrm() {
      await Order.create({ data });
    },
    getData() {
      let data = Order.query()
        .with('details', (query) => {
          query.with('delivery')
            .where((detail) => {
              return this.detailsQueryCheck(detail);
            })
        })
        .whereHas('details', (query) => {
          query.where((detail) => {
            return this.detailsQueryCheck(detail);
          })
        });
      if (this.paymentSelected.length > 0) {
        data = data.where('paymentType', (value) => this.paymentSelected.includes(value));
      }
      data = data.get();
      this.queryResult = [ ...data ];

      let result = [];
      data.forEach(order => {
        result.push({
          ...order.$toJson(), // $id 제외
          totalPrice: order.details.reduce((acc, cur) => {
            return acc + ( cur.quantity * cur.price );
          }, 0)
        });
      });
      this.orderList = result;
      this.result = [ ...result ];
    },
    detailsQueryCheck(data) {
      let result = true;
      if (!this.categorySelected.includes(data.itemCategory)) result = false;
      return result;
    },
    onClickDelivery(data, target) {
      this.modalData = { ...this.modalData, content: data };
      this.$root.$emit('bv::show::modal', this.modalData.id, target);
    },
    numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.odd-row {
  background-color: ivory;
}
</style>
