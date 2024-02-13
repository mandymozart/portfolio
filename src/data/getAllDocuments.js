const uriTemplate = `https://mandymozart-dev.cdn.prismic.io/api/v2/documents/search?ref=ZYRGzBEAACQA8kWO&q=%5B%5Bat%28document.type%2C%22${type}%22%29%5D%5D&page=1&pageSize=100`;

const TYPES = [
  'skill',
  'experience',
  'method',
  'collaborator',
  'client',
  'project',
];
const makeUri = (type) => {
  return uriTemplate.replace('${type}', type);
};
export const getAllDocuments = async () => {
  try {
    await Promise.all([
      fetch(makeUri(TYPES[0])),
      fetch(makeUri(TYPES[1])),
      fetch(makeUri(TYPES[2])),
      fetch(makeUri(TYPES[3])),
      fetch(makeUri(TYPES[4])),
      fetch(makeUri(TYPES[5])),
    ]).then((res) => {
      let data = [];
      res.forEach((res) => {});
      return res.json();
    });
  } catch (err) {
    console.warn(err);
  }
};
