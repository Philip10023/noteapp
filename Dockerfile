FROM node:19-alpine
WORKDIR /note-app/
COPY public/ /note-app/public/
COPY src/ /note-app/src/
COPY package.json /note-app/
RUN npm install
CMD ["npm", "start"]