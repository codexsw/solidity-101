const { onExit } = require("@rauschma/stringio");
const { spawn } = require("child_process");

async function main() {
  const childProcess = spawn("npx", ["hardhat", "test", "test/02-test.ts"], {
    stdio: [process.stdin, process.stdout, process.stderr],
  });

  await onExit(childProcess);

  console.log("### DONE");
}

test("02-steps", async () => {
  await main();
});
