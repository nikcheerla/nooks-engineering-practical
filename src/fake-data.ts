import { AppHistoryEntry } from "./AppStore";

const fakeData = [
  {
    appName: "Github",
    title: "Discrete probability distribution sampling in JavaScript",
    URL:
      "https://gist.github.com/brannondorsey/dc4cfe00d6b124aebd3277159dcbdb14"
  },
  {
    appName: "Github",
    title: "NooksApp: nooks-release-server",
    URL: "https://github.com/NooksApp/nooks-release-server"
  },
  {
    appName: "Github",
    title: "NooksApp: nooks-release-server",
    URL: "https://github.com/NooksApp/nooks-release-server"
  },
  {
    appName: "Figma",
    title: "Future Features",
    URL:
      "https://www.figma.com/proto/NG6b9A88zPiVDkR4VV48ZV/Web-App?page-id=5151%3A208223&node-id=5952%3A231358&viewport=6389%2C-4837%2C0.4292146563529968&scaling=min-zoom&starting-point-node-id=5952%3A231358&show-proto-sidebar=1"
  },
  {
    appName: "Figma",
    title: "Web App",
    URL: "https://www.figma.com/file/NG6b9A88zPiVDkR4VV48ZV/Web-App"
  },
  {
    appName: "Stack Overflow",
    title:
      "javascript - A better way to do random sampling with a probability distribution",
    URL:
      "https://stackoverflow.com/questions/44915948/a-better-way-to-do-random-sampling-with-a-probability-distribution"
  },
  {
    appName: "Stack Overflow",
    title: "javascript - A weighted version of random.choice",
    URL:
      "https://stackoverflow.com/questions/3679694/a-weighted-version-of-random-choice"
  },
  {
    appName: "Stack Overflow",
    title: "python - How do I parse a string to a float or an int?",
    URL:
      "https://stackoverflow.com/questions/379906/how-do-i-parse-a-string-to-a-float-or-int?rq=1"
  },
  {
    appName: "Stack Overflow",
    title:
      "python - determine function name from within that function (without using traceback)",
    URL:
      "https://stackoverflow.com/questions/5067604/determine-function-name-from-within-that-function-without-using-traceback?rq=1"
  },
  {
    appName: "Stack Overflow",
    title:
      "python - determine function name from within that function (without using traceback)",
    URL:
      "https://stackoverflow.com/questions/5067604/determine-function-name-from-within-that-function-without-using-traceback?rq=1"
  },
  {
    appName: "Stack Overflow",
    title:
      "python - determine function name from within that function (without using traceback)",
    URL:
      "https://stackoverflow.com/questions/5067604/determine-function-name-from-within-that-function-without-using-traceback?rq=1"
  },
  {
    appName: "Google Docs",
    title: "Nikhil's Presentation",
    URL:
      "https://docs.google.com/presentation/d/1Mhce742BwradKNq4Q_V2f02H73vVRHTI-Xxy90e_19o/edit#slide=id.p"
  },
  {
    appName: "Google Docs",
    title: "Work Planning",
    URL:
      "https://docs.google.com/document/d/1xj_dGIQwQMoNlZ4tbhFUJgqmmY3a0LqoyP4TufWn6UQ/edit"
  },
  {
    appName: "Google Docs",
    title: "Vacation Ideas",
    URL:
      "https://docs.google.com/spreadsheets/d/1L4ThgQfiuU717PpnmYWjfdy_jAMP9IZQT3ZAkqYzRLs/edit"
  }
];

const weights = [
  0.2,
  0.3,
  0.04,
  0.25,
  0.2,
  0.1,
  0.05,
  0.03,
  0.3,
  0.4,
  0.1,
  0.5,
  0.05
];

function weightedChoice(array: any[], weights: number[]) {
  let s = weights.reduce((a: number, e: number) => a + e);
  let r = Math.random() * s;
  return array.find((e, i) => (r -= weights[i]) < 0);
}

function sampleFakeData(): AppHistoryEntry {
  let choice: any = weightedChoice(fakeData, weights);
  return { ...choice, timestamp: Date.now() };
}

export { sampleFakeData };
