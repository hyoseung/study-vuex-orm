import { Model } from '@vuex-orm/core'
import Detail from './Detail';

export default class Order extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'order'

  // Override Pirmary Key
  static primaryKey = 'orderId'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      orderId: this.number(null),
      orderNo: this.string(null).nullable(),
      name: this.string(null).nullable(),
      phone: this.string(null).nullable(),
      paymentType: this.string(null).nullable(), // 결제방법 (카드, 무통장입금)
      details: this.hasMany(Detail, 'orderId')
    }
  }
}