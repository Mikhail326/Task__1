const tz = [
  { id: 1, universe: "marvel", name: "Spider Man" },
  { id: 2, universe: "marvel", name: "Iron Man" },
  { id: 3, universe: "dc", name: "Aqua Man" },
  { id: 4, universe: "dc", name: "Bat Man" },
  { id: 5, universe: "marvel", name: "Hulk" }
]
function groupBy(arr, key) {
  if (!arr || Array.isArray(arr) !== true) throw new Error('NO ARRAY').message
  if (!key || typeof key !== 'string') throw new Error('NO KEY').message
  return arr.reduce((acc, obj) => {
    if (!obj.hasOwnProperty(key)) {
      return {}
    }
    const keys = obj[key];
    if (!acc[keys]) {
      acc[keys] = [];
    }
    acc[keys].push(obj);
    return acc;
  }, {});
}



