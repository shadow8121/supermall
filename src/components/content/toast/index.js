import Toast from './Toast'

let plugin = {}

plugin.install = Vue => {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 创建组件对象
  let toast = new toastConstructor()

  // 将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'))

  // 将组件加入到 body 元素中
  document.body.appendChild(toast.$el)

  // 将 Toast 加入到 Vue 的原型中
  Vue.prototype.$toast = toast
}

export default plugin
