// plugins/axios.js
import axios from 'axios'
import {useRuntimeConfig} from '#app'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    const instance = axios.create({
        baseURL: runtimeConfig.public.baseURL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${runtimeConfig.public.baseToken}`
        },
        timeout: 10000
    })

    return {
        provide: {
            axios: instance
        }
    }
})
