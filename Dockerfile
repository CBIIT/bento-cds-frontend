FROM node:16.20.2-slim  as build

WORKDIR /usr/src/app

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=4096" npm install --legacy-peer-deps

RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

FROM nginx:1.25-alpine as  fnl_base_image

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/conf/inject.template.js /usr/share/nginx/html/inject.template.js
COPY --from=build /usr/src/app/conf/nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=build /usr/src/app/conf/entrypoint.sh /

ENV PORT 80

ENV HOST 0.0.0.0

RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"

EXPOSE 80

ENTRYPOINT [ "sh", "/entrypoint.sh" ]
