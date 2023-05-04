---
title: Sui Documentation Contribution Process
slug: /contribution-process
---

As open source software, Sui depends on community contributions. This page covers the process for contributing to Sui's documentation.

1. Click the fork button in the upper-right of the docs' [GitHub repository](https://github.com/sui-foundation/sui-docs) to create a copy of the documentation. This copy is known as a fork, and you are free to create any changes in your fork.
2. In accordance with the style guide (redirect to the style guide) create a new `.md` file in your directory of choice, inside `sui-docs/docs/{directory}` and populate it with the content you want to see added. Then in `sidebars.js` add your file path to the corresponding category where you want your file added.
3. Once you have made all your changes, enter `yarn` into a terminal at the root directory to build the project, then `yarn start` to view the changes on `localhost` to ensure that the website works as intended. To learn more `yarn` see here.
4. Once you have confirmed that everything works, submit a pull request (PR) to let us know about your changes.
5. A reviewer will then take responsibility for providing clear and actionable feedback to your PR. As the owner of the pull request, it is your responsibility to modify your pull request to address the feedback that has been provided to you by the reviewer. Keep in mind that you may receive feedback from multiple reviewers.
6. Once a reviewer has approved your PR it will be merged into `main` and your contributions will be made public for all to see!

If you are interested in localizing the documentation into another language, please do so via crowdin (another hyperlink)
