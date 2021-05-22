# A Warm Place to Stay

This is a text-based interactive story written in [Twee 3](https://github.com/iftechfoundation/twine-specs/blob/master/twee-3-specification.md). It contains prose content which **may be unsuitable for all except a unique adult audience**, including references to vore, sex, and death. Reader discretion is strongly advised.

## Building from source

1. Install [Tweego](http://www.motoslave.net/tweego/) and [NodeJS](https://nodejs.org/).
  * The `tweego` and `node` binaries must be in your system's PATH.
  * If you built Tweego from scratch, you'll need to manually install the [snowman-2](https://github.com/videlais/snowman/tree/master/dist/snowman-2.0.3) format into `storyformats/` story format, if you don't already have it.
4. Install story formats into `./storyformats` (optional)
    * [snowman-2](https://github.com/videlais/snowman/tree/master/dist/snowman-2.0.3)
    * [poof](https://github.com/ChapelR/poof/releases) – Proof-reading tool
    * [illume](https://www.maximumverbosity.net/twine/Illume/) – Provides passage analysis
    * [dotgraph](https://github.com/mcdemarco/dotgraph/releases/tag/v2.2.0) – Generates story graphs
5. `npm run develop` - Launch live server for development
6. `npm run twee-build` - Generates game at ./dist/index.html

## Credits

This story was written and developed by me, [▽ Double-A ▽](https://aryion.com/g4/user/DoubleA).

If you really enjoyed this, and want me to spend more time making things like it, consider supporting me at [☕ Ko-fi](https://ko-fi.com/doublea).

Special thanks to the creators and contributors of the following open source projects:

* 🏍️ [tmedwards/tweego](https://github.com/tmedwards/tweego) – Compiler for Twee 3
* ⛄️ [videlais/snowman](https://github.com/videlais/snowman) – Story format

Special thanks to [Chris Klimas](https://github.com/klembot) and all contributors to the <a href="https://github.com/tweecode">Twine and Twee</a> project.

## License

All prose and image content in *A Warm Place to Stay* is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). You are free to share and adapt this content in any medium or format **with attribution** for **non-commercial purposes** under **the same license**.

All non-textual source code underlying this project (excluding the prose content described above), including configuration files and scripts, is licensed under the [MIT-0 license](/LICENSE-CODE). You may use any or all of this code for any purpose **without attribution**.
