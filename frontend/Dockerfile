FROM node:20-alpine AS build

WORKDIR /app

ARG REACT_APP_BACKEND_URL=http://localhost:8001
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL} \
    NODE_ENV=production

# Install build dependencies for native modules
RUN apk add --no-cache python3 make g++ bash

# Prepare Yarn 1.x
RUN corepack enable && corepack prepare yarn@1.22.22 --activate

# Install dependencies
COPY package.json ./
RUN yarn install --non-interactive --prefer-offline

# Copy source and build
COPY public ./public
COPY src ./src
COPY craco.config.js tailwind.config.js postcss.config.js jsconfig.json ./ 
COPY components.json ./components.json

RUN yarn build

# Production image
FROM nginx:1.27-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
