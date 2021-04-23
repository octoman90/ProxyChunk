# ProxyChunk

ProxyChunk is a web-based open proxy checker and aggregator app.

## Installation
1. Install PostgreSQL, then create a user and database for ProxyChunk to use.
2. Create a file with the name ".env" in the backend directory using this template:
```
# Self-explanatory
POSTGRES_USER=username
POSTGRES_PASSWORD=password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=proxychunk

# A limit to how many proxies GET /api/proxies will return for each ?page
PROXIES_PER_PAGE=20

# Set to true to ignore IP addresses from reserved ranges
# https://en.wikipedia.org/wiki/Reserved_IP_addresses
SKIP_RESERVED=true

# Set to true to not check proxies' certificates
ANY_CERT=false

# After how many seconds a proxy is considered bad
TIMEOUT=5
```
3. Execute this in *both* the backend and frontend directories:
```bash
yarn install
yarn build
```
4. Install Nginx or Apache or something similar and point it to serve files from the frontend/build directory, here's an example snippet for Nginx:
```
server {
	listen 80;
	server_name local;

	root /path/to/where/you/have/ProxyChunk/frontend/build;

	location / {
		index index.html;
		try_files $uri /index.html;
	}
}
```

## Running
1. Run PostgreSQL and Nginx.
2. Run this from the backend directory:
```bash
node ./dist/js/app.js
```
3. Visit http://localhost:80 and voilà.

## API
You can find OpenAPI documentation [here](https://gitlab.com/man90/proxychunk/-/blob/master/backend/doc/api/openapi.json).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)