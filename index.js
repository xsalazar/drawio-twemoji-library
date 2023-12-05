const emojiData = require("emoji-datasource-twitter/emoji_pretty.json");
const twemoji = require("@twemoji/api");
const axios = require("axios");
const fs = require("fs");

async function getData() {
  var emojis = [];

  emojiData.forEach((emoji) => {
    if (emoji.has_img_twitter) {
      // Create local path for emoji category
      path = `downloads/${emoji.category}`;
      fs.mkdirSync(path, { recursive: true }, (err) => {
        if (err) throw err;
      });

      // Parse emoji and save URL
      twemoji.parse(
        emoji.unified.split("-").map(twemoji.convert.fromCodePoint).join(""),
        {
          callback: function (iconId, options) {
            url = `${options.base}svg/${iconId}.svg`;
            emojis.push({ url: url, shortName: emoji.short_name, path: path });
          },
        }
      );
    }
  });

  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    try {
      console.log(`Requesting ${emoji.url}`);

      let response = await axios.get(emoji.url, {
        responseType: "stream",
        timeout: 5000,
      });

      response.data.pipe(
        fs.createWriteStream(`${emoji.path}/${emoji.shortName}.svg`)
      );
    } catch (e) {
      console.log(`Failed to get ${emoji.short_name} at ${emoji.path}`);
    }
  }
}

getData();
