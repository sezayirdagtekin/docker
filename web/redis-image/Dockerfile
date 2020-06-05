#Use  an existing docker as a base
from alpine

#Download and  install  a dependency
Run apk add --update gcc
Run apk add --update redis

#Tell the image what to do  when it starts as a contaner
CMD ["redis-server"]