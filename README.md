# momentumm by <a href="https://github.com/jamesoshea">jamesoshea</a>

[![Build Status](https://travis-ci.com/jamesoshea/momentumm.svg?branch=master)](https://travis-ci.com/jamesoshea/momentumm)

## Description

> A streak/habit tracking app with Telegram integration.

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
