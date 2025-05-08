# Portfolio Website

This is the source code for the frontend of my online portfolio at http://theogoossens.com/. The backend source code can be found [here](https://github.com/Theodora605/Portfolio-API).

## Build Instructions

Once the backend service is running as decribed [here](https://github.com/Theodora605/Portfolio-API), build the docker image:

```
docker buid -t portfolio-site .
```

Next, run the docker image:

```
docker run -p 3000:3000 portfolio-site
```
