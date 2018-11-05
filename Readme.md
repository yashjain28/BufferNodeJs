
# ipm package: BufferNodeJs

## Overview

Partial Implementation of NodeJs' Buffer Library

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup
Import Just the Code Library, Code Service just gives an exmaple of how to use it.
## Usage
Example Checkout the Code Service, once system is imported.

```javascript
function TestBufferNodeJs(req, resp) {
  const Buffer = BufferNodeJs().Buffer;
  const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
  log(buffer);
  resp.success('Success');
}

```
## API
The goal is to provide an API that is identical to [node's Buffer API](https://nodejs.org/api/buffer.html). 
