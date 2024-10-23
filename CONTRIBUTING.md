# Contributing to @wuchuheng/react

We appreciate your interest in contributing to @wuchuheng/express. This document provides guidelines for contributing to the project, with a focus on how to release new versions.

## How to Contribute

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes
4. Submit a pull request

## Releasing a New Version

To release a new version of @wuchuheng/react, follow these steps:

1. Tag a new version with the "v" prefix like "v0.0.22".

   ```
   git tag -a v0.0.22 -m "Version 0.0.22"
   ```

2. Push the tag to the remote repository. like this:

   ```
   git push main v0.0.22
   ```

3. The GitHub Actions workflow will automatically do the following things:

   - Update the version number in `package.json`
   - Build the project
   - Publish the project to npm

4. After the release success, you have to fetch the new commit locally for the `package.json` file. because the new version number is updated in the remote repository by the GitHub Actions workflow.
   ```
   git pull origin main
   ```
5. Done.
