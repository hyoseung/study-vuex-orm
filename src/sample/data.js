export const data = [
  {
    orderId: 1,
    orderNo: '20210517001',
    name: '홍길동',
    phone: '010-1111-1111',
    paymentType: '카드', // 무통장입금
    orderDate: '2021-05-17 09:00:00',
    details: [
      {
        detailId: 100,
        storeName: '리리엔코',
        itemName: '플렌디 플라워 랩스타일 롱 원피스',
        itemCategory: '원피스', // 상의, 하의, 원피스, 아우터
        quantity: 1,
        price: 38800,
        orderId: 1,
        deliveryIdTest: 1000,
        delivery: {
          deliveryId: 1000,
          address: '서울시 동대문구 A',
          post: '12345'
        }
      }, {
        detailId: 101,
        storeName: '에브리모닝',
        itemName: '웰드하프크롭자켓 (3color)',
        itemCategory: '아우터',
        quantity: 1,
        price: 52000,
        orderId: 1,
        deliveryIdTest: 1001,
        delivery: {
          deliveryId: 1001,
          address: '서울시 동대문구 B',
          post: '12346'
        }
      }
    ]
  }
];