#!/usr/bin/env python3
from livereload import Server, shell
import os
import formic

ROOT = 'preview-www'
LIGHTNING = os.path.expanduser('~/Projects/lightning/lightning')

BUILD_COMMAND = shell('%s -o %s' % (LIGHTNING, ROOT))

server = Server()

for filepath in formic.FileSet(include="**.md"):
  server.watch(filepath, BUILD_COMMAND)

server.serve(root=ROOT)
