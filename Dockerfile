# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.12.2
ARG PNPM_VERSION=9.10.0

################################################################################
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

COPY package.json .

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

################################################################################
FROM base as final

EXPOSE 3000

CMD pnpm start
