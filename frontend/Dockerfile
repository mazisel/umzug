FROM node:20-alpine AS build

WORKDIR /app

ARG REACT_APP_BACKEND_URL=http://localhost:8001
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

# Install dependencies and build
COPY package.json ./
COPY public ./public
COPY src ./src
COPY craco.config.js tailwind.config.js postcss.config.js jsconfig.json ./
COPY components.json ./components.json

RUN corepack enable && yarn install --non-interactive && yarn build

# Production image
FROM nginx:1.27-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
