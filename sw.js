// This address used to host the "נקמות שלי" app (now at /deck-surfers/). Phones that installed it check
// this file for updates; this version deletes the old offline copy, unregisters itself and reloads,
// so they see the landing page.
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
