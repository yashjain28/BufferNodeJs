function TestBufferNodeJs(req, resp) {
  const Buffer = BufferNodeJs().Buffer;
  const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64'); //output: {"type": "Buffer", "data": [ 120, 156, 211, 211, 35, 0, 0, 100, 239, 5, 239]}
  log(buffer);
  resp.success('Success');
}
