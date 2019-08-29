import cluster from 'cluster';
import { cpus } from 'os';

const cpusAvailable = cpus();

const upWorkerProcesses = () => {
  global.console.log(`Master cluster setting up ${cpusAvailable.length} workers`);
  cpusAvailable.forEach(() => cluster.fork());
  cluster.on('online', worker => global.console.log(`Worker ${worker.process.pid} is listening`));
  cluster.on('exit', (worker, code, signal) => {
    global.console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    global.console.log('Starting a new worker');
    cluster.fork();
  });
};

export default applicationSetup => {
  if (cluster.isMaster) {
    upWorkerProcesses();
  } else {
    applicationSetup();
  }
};
