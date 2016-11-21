export function search (subject, objects, key) {
  let matches = []
  let regexp = new RegExp(subject, 'g')

  for (let i = 0; i < objects.length; i++) {
  //  for (let key in objects[i]) {
    if (objects[i][key].match(regexp)) matches.push(objects[i])
  //  }
  }
  return matches
};
