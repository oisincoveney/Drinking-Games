﻿cd C:\Users\oisin\Code\React
docker-compose down
docker rm -f @(docker ps -a -q)
docker volume rm @(docker volume ls -q)
docker-compose up -d --build