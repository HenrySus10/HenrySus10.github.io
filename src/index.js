import { App } from "./App";
console.clear();

/**
 * [ ] Turn Antialias on
 *
 *
 */

const options = {
  length: 400,
  width: 20,
  roadWidth: 9,
  islandWidth: 2,
  nPairs: 50,
  roadSections: 3
};

const container = document.getElementById("app");
console.log("Container", container);
const myApp = new App(container, options);
myApp.loadAssets().then(myApp.init);

if (module && module.hot) {
  // module.hot.accept((a, b) => {
  //   // For some reason having this function here makes dat gui work correctly
  //   // when using hot module replacement
  // });
  module.hot.dispose(() => {
    if (myApp) myApp.dispose();
  });
}
