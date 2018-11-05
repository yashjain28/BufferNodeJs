function TestBufferNodeJs(req, resp) {
  const Buffer = BufferNodeJs().Buffer;
  const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
  log(buffer);
  resp.success('Success');
}
