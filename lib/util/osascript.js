'use babel';

const execFile = require('child_process').execFile

export default (cmd) => {
  return new Promise((resolve, reject) => {
    execFile(
      'osascript',
      ['-l', 'JavaScript', '-e', cmd, '-ss'],
      (error, stdout, stderr) => {
        if (error) reject(error)
        resolve(stdout.trim())
      }
    )
  });
}
