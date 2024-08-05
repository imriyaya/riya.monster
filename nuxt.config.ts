export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxt/ui"],
    ssr: false,
    routeRules: {
        '/**': {
            ssr: false,
            prerender: true
        }
    }
})