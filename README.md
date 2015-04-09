# init-opb

CURL-able script for initialising an [origami-product-boilerplate](https://github.com/callumlocke/origami-product-boilerplate) project.

What the script does:

1. Verifies required globals are installed (ruby, gulp, bower).
2. Downloads the latest snapshot of [origami-product-boilerplate](https://github.com/callumlocke/origami-product-boilerplate) and extracts it.
3. Deletes docs and other extras, leaving just the actual boilerplate files.
4. Installs all npm, bower and ruby deps.
5. Prints out basic instructions for use.
