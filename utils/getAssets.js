/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { v4: uuidv4 } = require('uuid');

const getPosts = () => {
  glob('./public/assets/*/*', (er, files) => {
    const data = [];
    for (let i = 0; i < files.length; i += 1) {
      const element = files[i];

      data.push({
        id: uuidv4(),
        name: path.basename(element).split('.')[0],
        category: element.split('/')[3],
        path: element.split('/')[4],
        fileType: path.extname(element),
      });
    }

    fs.writeFile('./public/data.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Saved to data.json');
    });
  });
};

getPosts();
