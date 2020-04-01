import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const fetch = Vue.axios.create({
    baseURL: "https://www.fastmock.site/mock/",
    timeout: 20000
}
)

export default fetch
