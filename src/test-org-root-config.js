import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@test-org/app1",
  app: () =>
    System.import(
      "@test-org/app1"
    ),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@test-org/app2",
  app: () =>
    System.import(
      "@test-org/app2"
    ),
  activeWhen: ["/app2"],
});


// registerApplication({
//   name: "@test-org/navbar",
//   app: () => System.import("@test-org/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
