FROM node:18-alpine as BUILDER
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /app

COPY --from=BUILDER /app/dist /app/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80