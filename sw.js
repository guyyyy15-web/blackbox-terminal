// Removes the offline copy of the app that used to live here, then unregisters itself.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      await caches.delete('nekamot-v1.0.0')
      await self.registration.unregister()
      for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url)
    })(),
  )
})
