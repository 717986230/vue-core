/*
 * @Author: 杨兴隆 81056572+717986230@users.noreply.github.com
 * @Date: 2022-10-23 10:19:04
 * @LastEditors: 杨兴隆 81056572+717986230@users.noreply.github.com
 * @LastEditTime: 2022-10-23 10:26:57
 * @FilePath: \vue-core\packages\vue\src\dev.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { initCustomFormatter } from '@vue/runtime-dom'

export function initDev() {
  if (__BROWSER__) {
    if (!__ESM_BUNDLER__) {
      console.info(
        `You are running a development build of Vue. \n` +
          `Make sure to use the production build (*.prod.js) when deploying for production.`
      )
    }

    initCustomFormatter()
  }
}
