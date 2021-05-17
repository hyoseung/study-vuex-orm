import { Model } from '@vuex-orm/core'
import Delivery from './Delivery';

export default class Detail extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'detail'

  // Override Pirmary Key
  static primaryKey = 'detailId'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      detailId : this.number(null),
      storeName: this.string(null).nullable(),
      itemName: this.string(null).nullable(),
      itemCategory: this.string(null).nullable(), // 품목카테고리 (상의, 하의, 원피스, 아우터)
      quantity: this.number(0),
      price: this.number(0),
      orderId: this.number(null),
      deliveryIdTest: this.number(null),
      delivery: this.hasOne(Delivery, 'deliveryId', 'deliveryIdTest')
    }
  }
}