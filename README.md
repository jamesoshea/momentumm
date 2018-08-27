# momentumm by <a href="https://github.com/jamesoshea">jamesoshea</a>

## Description

A streak/habit tracking app with Telegram integration.

## Motivation

This app is a vehicle to try out various technologies that I am interested in, including Telegram bots, CI/CD and through testing. It'll also hopefully help me to reinforce some good habits :)

## Build Status

[![Build Status](https://travis-ci.com/jamesoshea/momentumm.svg?branch=master)](https://travis-ci.com/jamesoshea/momentumm)

## Tech Used

Built and deployed using with Vue, Express, MongoDB, MLab, Docker, Now and Travis CI

## Installation

### Prerequisites

This app requires a few environment variables to be set : `MOMENTUMM_DB_USER`, `MOMENTUMM_DB_PASSWORD` and `MOMENTUMM_TELEGRAM_TOKEN`. You'll need to set up a Telegram bot and get the token for this.

### Run the app

`yarn install`

Run the frontend dev server:

`yarn dev`

Run the backend:

`yarn start-dev`

Build the docker container:
`docker build .`

## License

MIT
