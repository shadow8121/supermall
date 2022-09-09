import { request } from './request'

export function getGoodsDatil(id) {
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.id = itemInfo.iid
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.info = info.set
    this.infoKey = info.key
    this.rule = rule.tables
    this.ruleKey = rule.key
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
  }
}
