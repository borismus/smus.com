#!/usr/bin/env python3
from livereload import Server, shell
import os

ROOT = os.path.expanduser('~/Blog/www')
LIGHTNING = os.path.expanduser('~/Projects/lightning/lightning')
server = Server()
server.watch('content/**.md', shell('%s -o %s' % (LIGHTNING, ROOT)))
server.serve(root=ROOT)
