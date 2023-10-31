FROM node:18-alpine
WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN npm install
CMD ["node", "./src/server.js"]