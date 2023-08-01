#!/usr/bin/env python3
'''Given a CSV file with rows like this:

    ,Device pairing via a cloud server,Boris Smus,Christian Plagemann,Trond Thomas Wuellner,Antonio Bernardo Monteiro Costa,2013,"US9,621,645",Google


Convert it into a markdown list like this:

    <li><a class="patent" href="/patents/My Patent.pdf">US20100095198</a> Shared comments for online document collaboration
            <span class="authors">Bultrowicz, M., Smus, B.</span></li>

Also, convert paper CSV with rows like this:

    telejam,Telejam: From Low Latency to No Latency,Mark Goldstein,Michael McNabb,Boris Smus,,Web Audio Conference,2022,https://webaudioconf.com/,2022 - Telejam - From Low Latency to No Latency.pdf

Into markdown list like this:

    <li><a class="paper" href="/papers/My Paper.pdf"></a> Telejam: From Low Latency to No Latency
            <span class="authors">Goldstein, M., McNabb, M., Smus, B.</span> <a href="https://webaudioconf.com/">WAC 2022</a></li>
'''

import csv
import os

PAPERS_DIR = './pages/papers/'
PATENTS_DIR = './pages/patents/'


def format_author(author):
  tokens = author.strip().split(' ')
  first_names = tokens[:-1]
  last_name = tokens[-1]
  first_initials = [name[0].capitalize() for name in first_names]
  formatted = last_name
  for init in first_initials:
    formatted += f' {init}.'
  return formatted


def format_authors(row):
  author_string = ''
  author_headers = [f'Author {index}' for index in range(1, 8)]
  authors = [row[header] for header in author_headers if header in row]
  authors = [author for author in authors if author != '']
  for author in authors[:-1]:
    author_string += f'{format_author(author)}, '
  author_string += format_author(authors[-1])
  return author_string


def format_patent(row):
  authors = format_authors(row)

  title = row['Title']
  year = row['Year Filed']
  patent_number = row['Patent Number']
  url = row['Filename']

  patent_link = f'/patents/{url}'

  return f'''<li><a class="patent" href="{patent_link}">{patent_number}</a> {title}. <span class="authors">{authors}</span> {year}</li>'''


def format_paper(row):
  authors = format_authors(row)
  title = row['Title']
  year = row['Year']
  conference_url = row['Conference URL']
  conference_name = row['Conference']
  url = row['Filename']
  paper_link = f'/papers/{url}'

  return f'''<li><a class="paper" href="{paper_link}">{title}</a> <span class="authors">{authors}</span> <a href="{conference_url}"> {conference_name} {year}</a></li>'''

def convert_patents():
  out = '''Patents
=======

<ul>'''
  patents_csv_path = os.path.join(PATENTS_DIR, 'index.csv')
  with open(patents_csv_path, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
      patent = format_patent(row)
      out += patent + '\n'
  out += '</ul>'

  patents_out_path = os.path.join(PATENTS_DIR, 'index.md')
  with open(patents_out_path, 'w') as f:
    f.write(out)

def convert_papers():
  out = '''Papers
======

<ul>'''
  csv_path = os.path.join(PAPERS_DIR, 'index.csv')
  with open(csv_path, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
      paper = format_paper(row)
      out += paper + '\n'
  out += '</ul>'

  out_path = os.path.join(PAPERS_DIR, 'index.md')
  with open(out_path, 'w') as f:
    f.write(out)

if __name__ == '__main__':
  # Both pages/papers/index.md and pages/patents/index.md are generated from
  # their respective index.csv files.
  convert_patents()
  convert_papers()


