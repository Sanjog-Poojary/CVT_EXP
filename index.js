const express = require('express');
const app = express();
const PORT = 3000;

/**
 * GET /
 * Returns a styled HTML page for the CI/CD Assignment
 */
app.get('/', (req, res) => {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CA2 CI/CD App</title>
    <style>
        :root {
            --bg-color: #0f172a;
            --text-color: #ffffff;
            --accent-color: #10b981; /* Emerald accent for v2 */
            --card-bg: rgba(255, 255, 255, 0.05);
            --border-color: rgba(255, 255, 255, 0.1);
        }

        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
        }

        .container {
            max-width: 600px;
            padding: 2rem;
            animation: fadeIn 0.8s ease-out;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            background: linear-gradient(to right, #10b981, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h2 {
            font-weight: 400;
            color: #94a3b8;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1.1rem;
            color: #cbd5e1;
            margin-bottom: 2rem;
        }

        .timestamp {
            font-family: monospace;
            background: var(--card-bg);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            display: inline-block;
            margin-bottom: 2rem;
        }

        .card {
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-color);
        }

        .version-label {
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1em;
            color: #64748b;
            margin-bottom: 0.5rem;
        }

        .version-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--accent-color);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CA2 - CI/CD Pipeline App - v2</h1>
        <h2>Deployed via GitHub Actions + Docker + Watchtower</h2>
        <p>Server is running on AWS EC2</p>
        <div class="timestamp">
            ${dateTimeString}
        </div>
        <div class="card">
            <div class="version-label">App Version</div>
            <div class="version-number">2.0.0</div>
        </div>
    </div>
</body>
</html>
    `;
    res.send(html);
});

/**
 * GET /health
 * Status endpoint for monitoring
 */
app.get('/health', (req, res) => {
    res.json({
        status: "ok",
        version: "2.0.0",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
