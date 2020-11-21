export default function ({ $axios, $config: { apiKey } }, inject) {
  const devToApi = $axios.create({
    baseURL: 'https://dev.to/api/',
    headers: { 'api-key': apiKey },
  })
  inject('api', devToApi)
}
