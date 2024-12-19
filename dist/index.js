function e(o) {
  console.log(`hi, ${o}`);
}
function l() {
  console.log("goodbye");
}
export {
  l as sayGoodbye,
  e as sayHello
};
