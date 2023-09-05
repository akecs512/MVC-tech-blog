# Tech Blog

## Description
A developer who writes about tech can have a  CMS-style blog site so they can publish articles, blog posts, and their thoughts and opinions.

## Usage
When a user visits the site for the first time, they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
When they  click on the homepage option they are taken to the homepage.
When they click on any other links in the navigation they are prompted to either sign up or sign in.
When they choose to sign up they are prompted to create a username and password.
When they click on the sign-up button, their user credentials are saved and they are logged into the site.
When they revisit the site at a later time and choose to sign in they are prompted to enter their username and password.
When they are signed in to the site they see navigation links for the homepage, the dashboard, and the option to log out.
When they click on the homepage option in the navigation they are taken to the homepage and presented with existing blog posts that include the post title and the date created.
When they click on an existing blog post they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
When they enter a comment and click on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.
When they click on the dashboard option in the navigation they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post.
When they click on the button to add a new blog post they are prompted to enter both a title and contents for their blog post.
When they click on the button to create a new blog post then the title and contents of their post are saved and they are taken back to an updated dashboard with their new blog post.
When they click on one of their existing posts in the dashboard they are able to delete or update their post and taken back to an updated dashboard.
When they click on the logout option in the navigation they are signed out of the site.
When they are idle on the site for more than a set time then they are able to view posts and comments but they are prompted to log in again before they can add, update, or delete posts.

## System Usage
### Styling
Styling is done through Bootstrap 5 and basic css files located in the [css folder](/public/assets/css/).

### VSCode Extensions
VS Code should recommend the following extensions:
- Prettier
- ESLint
- Code Spell Checker
- React JS Snippets (even though this not a React project, the `clg` snippet is just too useful not to have)

### Package.json Scripts
These scripts have been added to help keep the code clean:
- `npm run lint`: checks for lint errors
- `npm run lint-fix`: tries to fix lint errors
- `npm run prettier-fix`: standardize all the formatting

## License

Copyright (c) 2023 Adrienne Kecskes

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
