import urllib.request

url = 'https://framerusercontent.com/sites/5kAAx9JsWuxzgQjPkbHezN/shared-lib.CWNqIP8f.mjs'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=5) as r:
    code = r.read().decode('utf-8', errors='ignore')

idx = code.find('F=`')
if idx == -1:
    idx = code.find('F = `')
if idx == -1:
    # search for fragmentShader or precision
    idx = code.find('precision')
print('idx:', idx)
if idx != -1:
    with open('/tmp/shader.txt', 'w') as out:
        out.write(code[max(0, idx-50):min(len(code), idx+4500)])
    print('Written to /tmp/shader.txt')
