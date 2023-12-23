FROM node:21-bookworm as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate
ARG DOMAIN_NAME
ENV DOMAIN ${DOMAIN_NAME}

FROM nginx:1.25-bookworm
COPY --from=build /app/.output/public /usr/share/nginx/html
COPY --from=build /app/nginx /etc/nginx/conf.d
