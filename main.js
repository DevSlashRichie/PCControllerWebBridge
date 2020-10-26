// Initialize Channels client
let channels = new Pusher('83913f65af1492cd2762', {
    cluster: 'us2',
  })
  
  // Subscribe to the appropriate channel
  let channel = channels.subscribe('my-channel')
  
  // Bind a callback function to an event within the subscribed channel
  channel.bind('my-event', function (data) {
    alert(data);
  })

  async function pushData(data) {
    const res = await fetch('/api/channels-event.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      console.error('failed to push data')
    }
  }