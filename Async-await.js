function getUser(id) {
  return Promise.resolve({ id: id });
}

(async function main() {
  let user = await getUser(55);
  console.log(user);
})();
