const { spawn } = require("child_process");

async function main() {
  return new Promise((resolve, reject) => {
    const ls = spawn("npx", ["hardhat", "test", "test/02-test.ts"], {
      stdio: [process.stdin, process.stdout, process.stderr],
    });

    ls.stdout.on("data", function (data) {
      console.log("stdout: " + data.toString());
    });

    ls.stderr.on("data", function (data) {
      console.log("stderr: " + data.toString());
    });

    ls.on("exit", function (code) {
      console.log("child process exited with code " + code.toString());
    });

    console.log("### DONE");
  });
}

test("02-steps", async () => {
  await main();
});
