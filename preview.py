#!/usr/bin/env python3
from livereload import Server, shell
import os
import formic

ROOT = '/tmp/smus.com-preview'
LIGHTNING = os.path.expanduser('~/Projects/lightning/lightning')

BUILD_COMMAND = shell('uv run %s -o %s' % (LIGHTNING, ROOT))

server = Server()

for pattern in ("**.md", "template/**.html", "template/**.xml", "template/static/**"):
  for filepath in formic.FileSet(include=pattern):
    server.watch(filepath, BUILD_COMMAND)

server.serve(root=ROOT)
