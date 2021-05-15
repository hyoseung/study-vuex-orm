import Vue from 'vue'
import Vuex from 'vuex'

import VuexORM from '@vuex-orm/core'
import * as models from '@/models';

Vue.use(Vuex)

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(models.Order);
database.register(models.Detail);
database.register(models.Delivery);

// Create Vuex Store and register database through Vuex ORM.
export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
