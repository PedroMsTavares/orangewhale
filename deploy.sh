

$(aws ecr get-login --no-include-email --region us-east-1)
docker tag orangewhale:latest 226342546049.dkr.ecr.us-east-1.amazonaws.com/orangewhale:latest
docker push 226342546049.dkr.ecr.us-east-1.amazonaws.com/orangewhale:latest
