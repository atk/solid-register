import { readdir } from 'fs/promises';
import { execFile } from 'child_process';

const processes = {};

const testExample = (example) => new Promise((resolve, reject) => {
  console.log(`installing ${example}`);
  processes[example] = execFile('npm', ['i'], { cwd: `./example/${example}` }, (error, stdout, stderr) => {
    if (error) {
      reject(error);
    }
    console.log(stdout);
    console.error(stderr);
  }).on('close', () => {
    delete processes[example];
    resolve();
  });
}).then(() => new Promise((resolve, reject) => {
  console.log(`testing ${example}`);
  processes[example] = execFile('npm', ['test'], { cwd: `./example/${example}` }, (error, stdout, stderr) => {
    if (error) {
      reject(error);
    }
    console.log(stdout);
    console.error(stderr);
  }).on('close', () => {
    delete processes[example];
    resolve();
  });
}));

const examples = await readdir('./example');

await Promise.all(examples.map(testExample)).catch((error) => { 
  console.error(error);
  Object.values(processes).forEach(process => process.kill());
  process.exit(1);
});

process.exit()
