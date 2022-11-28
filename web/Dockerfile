FROM node:19.1
WORKDIR /climatempo
COPY ./package.json ./package.json
RUN npm install --quiet
COPY . .

EXPOSE 3000
CMD ["npm", "start", "--", "--host"]