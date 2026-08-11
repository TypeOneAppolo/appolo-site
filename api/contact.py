from http.server import BaseHTTPRequestHandler
import json
import os
import urllib.request

NOTIFY = os.environ.get("NOTIFY_URL", "")
KEY = os.environ.get("CONTACT_KEY", "")

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            body_len = int(self.headers.get("Content-Length", 0))
        except Exception:
            body_len = 0

        body = self.rfile.read(body_len) if body_len > 0 else b""
        auth = self.headers.get("X-Form-Key", "")

        if not NOTIFY or not KEY or auth != KEY or len(body) < 12:
            self._ok()
            return

        try:
            text = body.decode("utf-8", errors="replace")
            chunks = [text[i:i+1900] for i in range(0, len(text), 1900)]
            for chunk in chunks:
                data = json.dumps({"content": f"```\n{chunk}\n```"}).encode()
                req = urllib.request.Request(
                    NOTIFY,
                    data=data,
                    headers={"Content-Type": "application/json"},
                )
                urllib.request.urlopen(req, timeout=10)
        except Exception:
            pass

        self._ok()

    def do_GET(self):
        self._ok()

    def _ok(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/plain")
        self.end_headers()
        self.wfile.write(b"ok")
