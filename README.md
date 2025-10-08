# hannaan.dev
The source code for my website [tarna.dev](https://tarna.dev). 

## Original Template
This is a modified version of a template by [@manuelernestog](https://github.com/manuelernestog). You can find the original source code [here](https://github.com/manuelernestog/astrofy).

## Changes from Original
- Made projects into a collection that can be defined in the [`src/content/project`](src/content/project/) folder.
- Added categories to projects.
- Ability to create hidden posts.
- Added an automatic age getter on the [CV](src/pages/cv.astro) and [main page](src/pages/index.astro). Birthday can be configured in the [config](src/config.ts).
- Removed the [store](src/pages/store/) and [services](src/pages/services.astro) from the [sidebar](src/components/SideBarMenu.astro).