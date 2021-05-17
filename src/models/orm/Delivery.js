import { Model } from '@vuex-orm/core'

export default class Delivery extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'delivery'

  // Override Pirmary Key
  static primaryKey = 'deliveryId'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      deliveryId: this.number(null),
      address: this.string(null).nullable(),
      post: this.string(null).nullable()
    }
  }
}