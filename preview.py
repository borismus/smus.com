#!/usr/bin/env python3
from livereload import Server, shell
import os

ROOT = 'preview-www'
LIGHTNING = os.path.expanduser('~/Projects/lightning/lightning')
server = Server()
server.watch('content', shell('%s -o %s' % (LIGHTNING, ROOT)))
server.serve(root=ROOT)
