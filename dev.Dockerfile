FROM gessnerfl/fake-smtp-server:2.1.1

RUN yum update -y

RUN yum install -y nodejs-1:18.12.1-1.amzn2023.0.3

RUN npm install yarn -g

# The SMTP Server Port used by the Fake SMTP Server
ENV FAKESMTP_PORT=8025

# The following "secrets" are not real ones,
# they are just used for testing purposes
ENV FAKESMTP_AUTHENTICATION_USERNAME=user
ENV FAKESMTP_AUTHENTICATION_PASSWORD=user_password

# Port of the web interface
ENV SERVER_PORT=8080

# Port of the http management api
ENV MANAGEMENT_SERVER_PORT=8081
