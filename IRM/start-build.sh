docker build -t irm-client .
docker run -d --name irm-client -p 80:80 irm-client
