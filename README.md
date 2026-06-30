# WP Dev Toolset

CassidyDC default code formatting, linting, and build toolset for WordPress Block Theme and Plugin development.

## Quick Start Guide

1. Add the files in this repo's `files/wp-content` directory to your local development `wp-content` directory.
2. Add the files in this repo's `files/theme` and/or `files/plugin` directory to your specific theme or plugin directories you are developing.
3. Add your theme and/or plugin directories to your `wp-content/package.json` file in the `workspaces` object, and add the build and start commands for each theme and/or plugin to the `scripts` object in the same file using the same format that is included there.
4. Update the following config files to replace or add your theme/plugin directories to the linting and formatting rules:

    - `.gitignore` (under mu-plugins, plugins, and/or themes)
    - `composer.json` (in `scripts > syntax > themes/cassidydc-block-theme`)
    - `phpcs.xml` (under "Directories and files to check")
    - `phpstan.neon` (under "paths")

5. OPTIONAL: Install the recommended VSCode extensions listed in this repo's `files/wp-content/.vscode/extensions.json` file. Not all extensions are required, but I recommend at least installing the formatting and linting extensions if you want VSCode show linting errors and format your files without needing to go through the command line.
