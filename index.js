self.addEventListener('push', function(event) {
  console.log(event?.data?.text());
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
  const options = {
    body: event?.data?.text() ||  "Sample",
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration-sample",
  }

  let promise = self.registration.showNotification('Push notification!', options);
  event.waitUntil(promise);
});
