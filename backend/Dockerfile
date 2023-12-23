FROM debian:bookworm-slim
WORKDIR /app
EXPOSE 8090
ARG DOMAIN_NAME
ENV DOMAIN_NAME ${DOMAIN_NAME}
CMD ./pocketbase serve --http=0.0.0.0:8090
