/**
 * snabbdom v1.0.1
 * 
 * 用户学习测试用途，观摩virtual dom的原型
 * 
 * 及vuejs的使用
 * 
 * 
 * 
 */

// 错误引入模块
// import { h } from 'snabbdom/h'

// 正确引入模块
import { init } from 'snabbdom/src/package/init'
import { h } from 'snabbdom/src/package/h'
import { styleModule } from 'snabbdom/src/package/modules/style'
import { attributesModule } from 'snabbdom/src/package/modules/attributes'
import { eventListenersModule } from 'snabbdom/src/package/modules/eventlisteners'
import { classModule } from 'snabbdom/src/package/modules/class'
import { datasetModule } from 'snabbdom/src/package/modules/dataset'
import { heroModule } from 'snabbdom/src/package/modules/hero'
import { propsModule } from 'snabbdom/src/package/modules/props'

const patch = init([styleModule, attributesModule, classModule, eventListenersModule, datasetModule, heroModule, propsModule])

const $parentVnode = h('div#app', [
    h('h1', {
        style: {
            backgroundColor: 'red',
            'font-weight': 'bold'
        }
    }, 'Title'),
    h('p', {
        on: {
            click: function () {
                setTimeout(() => {
                    this.text += Date.now()
                    this.sel += Date.now()
                    this.elm.textContent += Date.now()
                    // console.log(this)
                }, 1000);
            }
        }
    }, 'pppp')
])

const $container = document.querySelector('#app')

patch($container, $parentVnode)
