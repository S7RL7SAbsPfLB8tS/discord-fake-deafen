const text = new TextDecoder('utf-8')

WebSocket.prototype.original = WebSocket.prototype.send

WebSocket.prototype.send = data => {
  if (
    Object.prototype.toString.call(data) === '[object ArrayBuffer]' &&
    text.decode(data).includes('self_deaf')
  )
    data = data.replace('"self_mute":false', 'ez')

  WebSocket.prototype.original.apply(this, [data])
}
