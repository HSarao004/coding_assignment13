
FROM node:lts-iron
 
WORKDIR /singh_harsimran_ui_garden/
 
COPY public/ /singh_harsimran_ui_garden/public
COPY src/ /singh_harsimran_ui_garden/src
COPY package.json /singh_harsimran_ui_garden/
COPY . /singh_harsimran_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook","ci:test"]