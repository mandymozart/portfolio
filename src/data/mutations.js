import data from './index-premute.json';
let newData = { ...data };
let urls = [];
function removeProperties(obj) {
  for (let prop in obj) {
    if (
      [
        'id',
        'linked_documents',
        'copyright',
        'slugs',
        'tags',
        'href',
        'alternate_languages',
        'lang',
      ].includes(prop)
    ) {
      delete obj[prop];
    } else if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      removeProperties(obj[prop]);
    }
  }
  return obj;
}

function extractImageUrls(data) {
  for (let key in data) {
    if (typeof data[key] === 'object' && data[key] !== null) {
      urls = urls.concat(extractImageUrls(data[key]));
    } else if (
      key === 'url' &&
      typeof data[key] === 'string' &&
      /\.(png|svg|jpg)$/.test(data[key])
    ) {
      urls.push(data[key]);
    }
  }
}

function extractImageUrls2(data) {
  let urls = [];
  for (let key in data) {
    if (typeof data[key] === 'object' && data[key] !== null) {
      urls = urls.concat(extractImageUrls(data[key]));
    } else if (
      key === 'url' &&
      typeof data[key] === 'string' &&
      /\.(png|svg|jpg)$/.test(data[key])
    ) {
      urls.push(data[key]);
      let filename = data[key].split('/').pop();
      data[key] = '/images/' + filename;
    }
  }
  return urls;
}

export function mutate() {
  const keysToSimplify = ['methods', 'partners', 'skills', 'roles', 'projects'];

  // simplify linked docs
  ['projects', 'experiences'].forEach((key) => {
    if (key in data) {
      data[key].forEach((item) => {
        keysToSimplify.forEach((subKey) => {
          if (subKey in item.data) {
            const subKeyValues = [];
            if (item.data[subKey] && typeof item.data[subKey][0] !== 'string') {
              item.data[subKey].map((ref) => {
                const newRef = {
                  type: ref[subKey.slice(0, -1)].type,
                  uid: ref[subKey.slice(0, -1)].uid,
                };
                subKeyValues.push(newRef);
                return newRef;
              });
              item.data[subKey] = subKeyValues;
            } else {
              item.data[subKey].map((ref) => {
                const newRef = { type: subKey.slice(0, -1), uid: ref };
                subKeyValues.push(newRef);
                return newRef;
              });
              item.data[subKey] = subKeyValues;
            }
            console.log('after', item.data[subKey]);
          }
        });
      });
    }
  });

  newData = removeProperties(data);

  function extractAllUrls(data) {
    let urls = [];
    for (let key in data) {
      if (typeof data[key] === 'object' && data[key] !== null) {
        urls = urls.concat(extractAllUrls(data[key]));
      } else if (key === 'url' && typeof data[key] === 'string') {
        if (
          data[key].includes('images.prismic.io') ||
          data[key].includes('.svg')
        ) {
          urls.push(data[key].replace('https://', ''));
        }
      }
    }
    return urls;
  }

  const allUrls = extractAllUrls(newData);
  console.log('urls', JSON.stringify(allUrls));

  return newData;
}
