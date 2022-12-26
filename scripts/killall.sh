for port in 3000 3333
do
  kill -9 $(lsof -t -i:$port) > /dev/null 2> /dev/null || :
done