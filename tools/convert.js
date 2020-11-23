const fs = require('fs')

function copy(source, target) {
  const readStream = fs.createReadStream(source)
  const writeStream = fs.createWriteStream(target)

  readStream.on('error', console.error)
  writeStream.on('error', console.error)

  readStream.on('close', function () {
    fs.unlink(source)
  })

  readStream.pipe(writeStream)
}
function move(source, target) {
  fs.rename(source, target, function (err) {
    if (err) {
      // attempt copy
      copy(source, target)
    }
  })
}
async function convert(path) {
  const dirs = await fs.promises.opendir(path)
  console.log(dirs)
  for await (const dirent of dirs) {
    console.log(dirent)
    if (dirent.isDirectory()) {
      const rename = dirent.name.split('.')[1]
      console.log(rename)
      await move(`./${dirent.name}/item.md`, `./${rename}.md`, () => {})
      fs.rmdir(`${path}/${dirent.name}`, (err) => {
        if (err) console.error(err)
      })
    }
  }
}

convert('../content/archived').catch(console.error)
