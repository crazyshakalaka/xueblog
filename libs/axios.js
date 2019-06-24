import axios from 'axios'

class HttpRequest {
    constructor () {
        this.baseUrl = '/api'
        this.queue = {}
    }

    getInsideConfig () {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                // token: getToken()
            }
        }
        return config
    }

    destroy (url) {
        delete this.queue[url]
        /*if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }*/
    }

    interceptors (instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            /*if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }*/
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            if (res.data.hasOwnProperty('code')) {
                let data = res.data
                if (data.code === 10002) {
                    for (let a in data.msg) {
                        // Message.error(data.msg[a])
                        break
                    }
                } else if (data.code === 10001) {
                    // setToken('')
                    // Message.error(data.msg)
                    setTimeout(() => {
                        // window.location.href = '/login'
                    }, 1000)

                } else if (data.code > 0) {
                    // Message.error(data.msg)
                }
                return data
            } else {
                // Message.error(data.msg)
            }

        }, error => {
            this.destroy(url)
            let errorInfo = error.response
            if (!errorInfo) {
                const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
                errorInfo = {
                    statusText,
                    status,
                    request: { responseURL: config.url }
                }
            }
            // addErrorLog(errorInfo)
            return Promise.reject(error)
        })
    }

    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest
