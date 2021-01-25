export const containerScroll = (selector) => {
  let container = null
  let interval = null
  let maxHeight = 0
  let i = 0
  let timer = null
  let animateId = null
  return new class {
    constructor () {
      this.init()
    }

    async init () {
      await this.promiseGetHeight()
      this.stop()
      this.start()
      container.onmouseover = () => {
        this.stop()
      }
      container.onmouseout = () => {
        i = container.scrollTop
        this.start()
      }
    }

    promiseGetHeight () {
      return new Promise(resolve => {
        this.getMaxHeight(resolve)
      })
    }

    getMaxHeight (resolve) {
      if (timer) clearTimeout(timer)
      container = document.querySelector(selector)
      if (!container) return
      maxHeight = container.scrollHeight - container.clientHeight
      if (maxHeight <= 0) {
        timer = setTimeout(() => {
          this.getMaxHeight(resolve)
        }, 20)
      } else {
        resolve()
      }
    }

    start () {
      if (window.requestAnimationFrame) {
        if (i >= maxHeight) i = 0
        container.scrollTo(0, i += 0.5)
        animateId = requestAnimationFrame(() => {
          this.start()
        })
      } else {
        interval = setInterval(() => {
          if (i >= maxHeight) i = 0
          container.scrollTo(0, i += 0.5)
        }, 20)
      }
    }

    stop () {
      if (animateId) {
        if (window.cancelAnimationFrame) {
          cancelAnimationFrame(animateId)
          animateId = null
        } else {
          clearInterval(interval)
          interval = null
        }
      }
    }
  }()
}

export const containerScrollX = (selector) => {
  let container = null
  let interval = null
  let maxWidth = 0
  let i = 0
  let timer = null
  let animateId = null
  return new class {
    constructor () {
      this.init()
    }

    async init () {
      await this.promiseGetHeight()
      this.stop()
      this.start()
      container.onmouseover = () => {
        this.stop()
      }
      container.onmouseout = () => {
        i = container.scrollLeft
        this.start()
      }
    }

    promiseGetHeight () {
      return new Promise(resolve => {
        this.getMaxHeight(resolve)
      })
    }

    getMaxHeight (resolve) {
      if (timer) clearTimeout(timer)
      container = document.querySelector(selector)
      maxWidth = container.scrollWidth - container.clientWidth
      if (maxWidth <= 0) {
        timer = setTimeout(() => {
          this.getMaxHeight(resolve)
        }, 20)
      } else {
        resolve()
      }
    }

    start () {
      if (window.requestAnimationFrame) {
        if (i >= maxWidth) i = 0
        container.scrollTo(i += 0.5, 0)
        animateId = requestAnimationFrame(() => {
          this.start()
        })
      } else {
        interval = setInterval(() => {
          if (i >= maxWidth) i = 0
          container.scrollTo(i += 0.5, 0)
        }, 20)
      }
    }

    stop () {
      if (animateId) {
        if (window.cancelAnimationFrame) {
          cancelAnimationFrame(animateId)
          animateId = null
        } else {
          clearInterval(interval)
          interval = null
        }
      }
    }
  }()
}
