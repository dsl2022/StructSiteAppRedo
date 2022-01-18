## Introduction

A demo app for construction floorplan design by using leafletJs.
Through building this demo app, it has been a perfect oppotunity for me to review many subjects such as redux, and many of the react fundemental ideas. It also made me to learn how to use LeafletJS which is a fantastic tool.

This app is by no mean perfect, and it's a working in progress.

### Deployment Demo

The React Client is deployed to Vercel, check out [demo url](https://struct-site-app-redo-c7h4hdirv-2015rpro.vercel.app/) fo

## Basic Requirement

- Render all of the markers that have been attached to a given floor plan, not just the single one shown in the starter. (see sample_data.json)

- Change the markers to use an arrow icon, and make each point in the direction indicated by the rotation value in sample_data.json.

- Allow the user to move an existing marker around by clicking and dragging it. Persist the new location when they are done.

- Click anywhere on the map to add a new marker. Ultimately, this is also how the user will attach photos to the marker at that location.

### Technology stack

Javascript, React, Redux, leftletJs, Nodejs, ExpressJS, Docker

### How to run

first run

```
yarn
```

then run

```
yarn start
```

### Server API

The `feature-server-node` includes a NodeJs server, and the React client is built and served as static files through expressJS. The entire app is also containerized through Docker.
Check out [its branch](https://github.com/dsl2022/StructSiteAppRedo/tree/feature-server-node) for details. This is only for additional experiment to showcase how I would structure this app as a fullstack application.
