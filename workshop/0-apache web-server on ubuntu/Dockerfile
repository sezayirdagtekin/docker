
# Dockerfile contents:

FROM ubuntu:20.10

RUN apt-get update

RUN apt-get install -y apache2

ADD index.html /var/www/html/

CMD /usr/sbin/apache2ctl -D FOREGROUND

EXPOSE 80 