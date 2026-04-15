FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV REACT_APP_API_URL=http://backend:5000
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]