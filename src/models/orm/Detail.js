import { Model } from '@vuex-orm/core'

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
      itemCode: this.string(null).nullable(),
      itemName: this.string(null).nullable(),
      itemCategory: this.string(null).nullable(), // 품목카테고리 (패션, 뷰티, 식품, 생필품, 디지털)
      quantity: this.number(0),
      price: this.number(0)
    }
  }
}