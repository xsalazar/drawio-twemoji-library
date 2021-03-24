# draw.io / diagrams.net Twemoji Icon Libraries

This repository contains custom libraries to enable importing Twitter's [twemoji](https://github.com/twitter/twemoji) images into your diagrams.

The latest version of these libraries was generated with [Emoji v13.0](https://unicode.org/emoji/charts-13.0/emoji-list.html).

## Install

Clone the repository

```bash
git clone https://github.com/xsalazar/drawio-twemoji-library.git
```

Install packages

```bash
npm install
```

Run the script

```bash
node index.js
```

The script will scrape the SVG images from the Twemoji CDN and put them in a local `downloads/` directory, further organized with their "Categories" as subdirectories, e.g. `downloads/Activities`, `downloads/Animals & Nature`.

## Usage

This repository already includes the XML [libraries](./libraries) to use directly with diagrams.net (formerly draw.io).

### Automatic Import URLs

The following links will quick-load the libraries into a new diagram in your browser. This is useful to see which emojis are in which packs.

- [Activities](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FActivities.xml)
- [Animals and Nature](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FAnimals%2520and%2520Nature.xml)
- [Flags](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FFlags.xml)
- [Food and Drink](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FFood%2520and%2520Drink.xml)
- [Objects](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FObjects.xml)
- [People and Body](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FPeople%2520and%2520Body.xml)
- [Skin Tones](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FSkin%2520Tones.xml)
- [Smileys and Emotion](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FSmileys%2520and%2520Emotion.xml)
- [Symbols](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FSymbols.xml)
- [Travel and Places](https://app.diagrams.net/?splash=0&clibs=Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fxsalazar%2Fdrawio-twemoji-library%2Fmain%2Flibraries%2FTravel%2520and%2520Places.xml)

### Manual Import

Download the XML library you wish to use from the [libraries](./libraries) in this repository.

Import them into your application through `File > Open Library from > Device...` and upload the file.

Further instructions here: https://drawio.freshdesk.com/support/solutions/articles/16000067790-how-to-create-and-use-custom-libraries-

### VSCode Support

To import these libraries into the [VSCode drawio plugin](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio), load a local diagram, import via `File > Import`, and choose the local library XML file.
