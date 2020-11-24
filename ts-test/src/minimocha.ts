import '@imports/index';

type TestRunner = { title; fn: () => void };

interface DescGroup {
  title: string;
  tests: TestRunner[];
}

const descGroups: DescGroup[] = [];

let descGroup: DescGroup | null = null;

export function describe(title, fn) {
  descGroup = { title, tests: [] };
  descGroups.push({ ...descGroup });
  fn();
}

export function it(title, fn) {
  if (!descGroup) {
    throw new Error();
  }
  descGroup.tests.push({
    title,
    fn,
  });
}

export function runAll() {
  let errors = 0;
  descGroups.forEach(({ title, tests }) => {
    print('** ' + title);
    tests.forEach(({ title: testTitle, fn }) => {
      print('**** ' + testTitle);
      try {
        fn();
      } catch (e) {
        print(`error in test "${testTitle}": ${e}`);
        logError(e);
        errors++;
      }
      print('');
    });
    print('');
  });

  if (errors > 0) {
    throw new Error(`${errors} errors`);
  }
}
