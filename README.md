# grpc-nodejs-sample

# Env File

```
DB_HOSTNAME=<YOUR DATABASE HOSTNAME>
DB_USERNAME=<YOUR DATABASE USERNAME>
DB_PASSWORD=<YOUR DATABASE PASSWORD>
DB_NAME=<YOUR DATABASE NAME>
DB_TYPE=<YOUR DATABASE TYPE (mysql)>
```

File should be named ".env" without quotes

# Installing

Use

```
npm install
```

# Running

## Server

Use

```
npm run server
```

Database should be running before starting

## Client

Use

```
npm run client <id>
```

Replace <id> with an ID number from a Customer you want to get the email from
