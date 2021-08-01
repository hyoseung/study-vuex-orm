export const data = [
  {
    orderId: 1,
    orderNo: '20210517001',
    name: '홍길동',
    phone: '010-1111-1111',
    paymentType: '카드',
    orderDate: '2021-05-17 09:00:00',
    details: [
      {
        detailId: 100,
        itemName: '플렌디 플라워 랩스타일 롱 원피스',
        itemCategory: '원피스',
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
  },
  {
    orderId: 2,
    orderNo: '20210801001',
    name: '강동원',
    phone: '010-2222-2222',
    paymentType: '무통장입금',
    orderDate: '2021-08-01 10:30:00',
    details: [
      {
        detailId: 102,
        itemName: '로스빈 뒷밴딩 썸머 슬랙스 팬츠',
        itemCategory: '하의',
        quantity: 1,
        price: 24500,
        orderId: 2,
        deliveryIdTest: 1002,
        delivery: {
          deliveryId: 1002,
          address: '서울시 성동구 A',
          post: '12345'
        }
      }, {
        detailId: 103,
        itemName: '큐티멍 프린팅 박시핏 반팔 티셔츠',
        itemCategory: '상의',
        quantity: 2,
        price: 12000,
        orderId: 2,
        deliveryIdTest: 1003,
        delivery: {
          deliveryId: 1003,
          address: '서울시 성동구 B',
          post: '12346'
        }
      }
    ]
  }
];