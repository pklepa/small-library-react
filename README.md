# small-library-react

## Description

[Odin] Recreation of my own [small-library](https://github.com/pklepa/small-library) project, this time using ReactJS.

Implementation of a basic system for book tracking. Make your own reading list and mark them complete as you finish. Book data is stored locally on your browser via Local Browser integration.

![SS_small-library-react_web](https://user-images.githubusercontent.com/22618438/90070807-d1d31e80-dcca-11ea-8487-c0b36105a5c0.png)

![SS_small-library-react_mobile](https://user-images.githubusercontent.com/22618438/90070994-31c9c500-dccb-11ea-8088-e6b12e52dfd4.png)

> See it live on [pklepa.github.io/small-library-react](https://pklepa.github.io/small-library-react/)

## Objectives

The main objective of this project is to familiarize and apply the following:

- Recreate the [small-library project](https://github.com/pklepa/small-library) using React, originally done using Vanilla JS.
- Practice React development, applying concepts as Reusable Components, State, Props and Lifecycle of components.

- Make use of the modern React syntax of Hooks, as in useState() and useEffect()

- Further improve JSX proficiency

- Rethink the design of an existing application, making it better suited for scaling and adding new features

- Port the existing design to be Mobile-friendly

## Development

### Javascript Framework

- [React](https://github.com/facebook/create-react-app)

### Libraries, extensions and tools

- [ESLint](https://eslint.org/) - A linter tool to standardize code
- [Prettier](https://prettier.io/) - Code formatter
- [Github Pages](https://pages.github.com/) - Hosting

### Step-by-step setup

Here's a simple guide to get the basic environment for a React application.

1. Bootstrap the create-react-app

   ```
     npx create-react-app small-library-react
   ```

2. Clear all of the src/ folder

   ```
     cd src
     rm -f *
   ```

3. Setup git and github

   3.1. Initialize local repo and stage/commit files to it:

   ```
     cd small-library-react
     git init
     git add .
     git commit -m "First commit"
   ```

   3.1. Create a github repo.

   3.2. Link the remote repository with your local one:

   ```
     git remote add origin {REMOTE-REPOSITORY-URL}
     git remote -v
   ```

   3.4. Push changes to remote

   ```
    git push origin master
   ```

4. Add and configure ESLint and Prettier

   4.1. Add a `.eslintrc` file to extend rules from react-app. It should look like this:

   ```
    {
      "extends": ["react-app", "plugin:prettier/recommended"]
    }
   ```

   4.2. Install Prettier and Prettier integration for ESLint:
   `npm i prettier eslint-config-prettier eslint-plugin-prettier -D`

5. There are a few configurations to be made on VSCode JSON Settings - for that, see [this video](https://www.youtube.com/watch?v=bfyI9yl3qfE) by Manorisms.

6. As for hosting checkout YuriBenjamin's [post](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

I wrote this mainly because I want to have a quick reference to look at. For full reference, see:

- [React Tutorial on official documentation](https://reactjs.org/tutorial/tutorial.html)
- [Github guide to adding existing projects to a remote repository](https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line)
- [ESLint and Prettier configuration on VSCode, by Manorisms](https://www.youtube.com/watch?v=bfyI9yl3qfE)
- [GH-Pages Deployment](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

## More information

- Made as a solution for the Frameworks Project in [The Odin Project](https://www.theodinproject.com/courses/javascript/lessons/frameworks)

- [Web Local Storage API's Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
