import http.server
import socketserver
import threading
import urllib.request
import os

os.chdir('dist')
PORT = 8089

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(('127.0.0.1', PORT), Handler)

thread = threading.Thread(target=httpd.serve_forever)
thread.daemon = True
thread.start()
print(f'Server started on port {PORT}')

urls_to_test = [
    f'http://127.0.0.1:{PORT}/',
    f'http://127.0.0.1:{PORT}/robots.txt',
    f'http://127.0.0.1:{PORT}/sitemap.xml',
    f'http://127.0.0.1:{PORT}/assets/logos/4.0_Logo_PNG_without_BG_logo_with_no_BG.png',
    f'http://127.0.0.1:{PORT}/assets/logos/6.0_White_LOGO_WHITE_primary_logo.png',
    f'http://127.0.0.1:{PORT}/assets/slides/5-2.png',
    f'http://127.0.0.1:{PORT}/assets/slides/13-1.png',
    f'http://127.0.0.1:{PORT}/assets/slides/14-1.png',
    f'http://127.0.0.1:{PORT}/assets/index-B_XVqum4.js',
    f'http://127.0.0.1:{PORT}/assets/index-DCdMmmph.css'
]

success = 0
for u in urls_to_test:
    try:
        with urllib.request.urlopen(u) as resp:
            content = resp.read()
            print(f'PASS [200]: {u} ({len(content)} bytes)')
            success += 1
    except Exception as e:
        print(f'FAIL: {u} -> {e}')

httpd.shutdown()
print(f'\nTotal verified: {success}/{len(urls_to_test)} endpoints passed!')
