import PocketBase from 'pocketbase'

export const usePB = () => {
  const config = useRuntimeConfig()
  const domain = config.public.domain
  const port = domain === 'localhost' ? 8080 : 8443
  const pb = new PocketBase(`http://${domain}:${port}`)
  return pb
}
