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
        itemCode: 'A1000',
        itemName: '흰색 셔츠',
        itemCategory: '패션', // 패션, 뷰티, 식품, 생필품, 디지털
        quantity: 1,
        price: 12000,
        orderId: 1,
        deliveryIdTest: 1000,
        delivery: {
          deliveryId: 1000,
          address: '서울시 동대문구 답십리',
          post: '12345'
        }
      }
    ]
  }
];