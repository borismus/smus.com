#!/usr/bin/env python3
from livereload import Server, shell

ROOT = '/Users/smus/Blog/www'
LIGHTNING = '/Users/smus/Projects/lightning/lightning'
server = Server()
server.watch('content', shell('%s -o %s' % (LIGHTNING, ROOT)))
server.serve(root=ROOT)
