import fetch from '../http/fetch'

export const getCommonGoods = () => fetch.get('0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods')

export const getCategoryGoods = () => fetch.get('0bf6a5bae7eab8507e44b56191ddff36/vuepos/typeGoods')