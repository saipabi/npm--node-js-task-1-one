const http = require ("node:http");

const hostname ="127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode=200;
    res.setHeader ("Content-Type","text/html");
    const { writeFile } = require("node:fs/promises");



    


async function createAndWriteDataIntoFile(curr_date = new Date()) {
  try {
    var fileData = {
      date: curr_date.getDate(),
      hour: curr_date.getHours(),
      minutes: curr_date.getMinutes(),
    };
    await writeFile(
      `${fileData.date}-${fileData.hour}-${fileData.minutes}.txt`,
      curr_date.toString()
    );
  } catch (err) {
    console.error(err);
  }
}


createAndWriteDataIntoFile(new Date());

async function readDataFromFile() {
  try {
    const result = await readFile("./25-10-29.txt");
    console.log(result.toString());
  } catch (error) {
    console.log(error);
  }
}
readDataFromFile();

    res.end(`<html> 
    <head>
    <title>Node</title>
    </head>
    <body>
    <h1> Hello, this is suriya</h1>
    <h3> </h3>
    </body>
    </html>`);
});


server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});