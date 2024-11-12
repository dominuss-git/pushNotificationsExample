# SCHEMA

![schema image](./images/schema.png)

## Technologies

- Node [install](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- http-server execute for installation
  
  ```sh
  npm install -g http-server
  ```

## How to start

0. install dependencies

* run in the backend/src folder

```sh
  npm i
```

1. run http client server from the root folder

```sh
  http-server -p {port}
```

2. start express server in a separate terminal from the backend/src folder

```sh
  node server.js
```

- tested on node 18.x

3. subscribe to push notifications

![screen1](./images/screen1.png)

- also in settings/notifications/allow notification (mac)
  ![screen2](./images/screen2.png)

4. send push notification from server in a separate terminal from the backend/src folder

```sh
  node push.js
```

5. Done
   ![screen3](./images/screen3.png)
