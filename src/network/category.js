import { request } from './request'

export function getTabs() {
  return request({
    url: '/category'
  })
}

export function getSubTabs(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getItems(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

export class SubTab {
  constructor(subTabs) {
    this.title = subTabs.title
    this.img = subTabs.image
    this.link = subTabs.link
  }
}

export class Item {
  constructor(item) {
    this.iid = item.iid
    this.title = item.title
    this.cfav = item.cfav
    this.sales = item.sale
    this.image = item.img
  }
}
