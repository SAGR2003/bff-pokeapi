
# BFF & Front-end for PokeAPI

Done with: 
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)


## How to run

### Dev and Tests
#### We highly suggest you to use Docker for this purpose, and the instructions are pretty straight foward. 
 

### Frontend

1. Navigate to the [`front/`](command:_github.copilot.openRelativePath?%5B%22front%2F%22%5D "front/") directory:

```sh
cd front/
```

2. Build the Docker image:

```sh
docker build -t front-dev .
```

3. Run the Docker container:

```sh
docker run -p 3000:5000 front-dev
```

Your frontend application should now be accessible at `http://localhost:3000`. You can use it as is

### BFF

1. Navigate to the [`bff/`](command:_github.copilot.openRelativePath?%5B%22bff%2F%22%5D "bff/") directory:

```sh
cd ../bff/
```

2. Build the Docker image:

```sh
docker build -t bff-dev .
```

3. Run the Docker container:

```sh
docker run -p 3001:3001 bff-dev
```
### Now done with it, it's mandatory have BFF and Frontend running for the app to work.

### Deployment
#### You can use your cloud of choice to deploy the docker images.

## Diagrams
### Component diagram:
![App Screenshot](docu\Componnetes.png)

