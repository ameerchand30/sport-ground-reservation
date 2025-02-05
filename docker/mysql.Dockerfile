# Here are the contents for the file: /sport-ground-reservation/sport-ground-reservation/docker/mysql.Dockerfile

FROM mysql:5.7

ENV MYSQL_DATABASE=sport_ground_reservation
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password
ENV MYSQL_ROOT_PASSWORD=rootpassword

COPY ./docker/init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306