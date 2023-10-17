<p align="center">
<a href=https://github.com/FrancoCanzani/blog target="_blank">
</a>
</p>

<p align="center">
<img src="https://img.shields.io/github/languages/code-size/FrancoCanzani/blog" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/FrancoCanzani/blog" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/FrancoCanzani/blog" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/FrancoCanzani/blog" alt="GitHub license" />
</p>

<p></p>
<p></p>

# 📌 Overview

This blog project utilizes essential dependencies like mdx-js, next.js, contentlayer, tailwindcss, and more for efficient and seamless development.

## 🔍 Table of Contents

- [📁 Project Structure](#project-structure)

- [📝 Project Summary](#project-summary)

- [💻 Stack](#stack)

- [⚙️ Setting Up](#setting-up)

- [🚀 Run Locally](#run-locally)

- [🙌 Contributors](#contributors)

- [☁️ Deploy](#deploy)

- [📄 License](#license)

## 📁 Project Structure

bash
├── .eslintrc.json
├── .gitignore
├── .vscode
│ └── settings.json
├── README.md
├── contentlayer.config.js
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── posts
│ ├── pre-rendering.mdx
│ └── ssg-ssr.mdx
├── src
│ └── app
│ ├── api
│ │ ├── auth
│ │ │ └── [...nextauth]
│ │ │ └── route.ts
│ │ ├── comments
│ │ │ └── route.ts
│ │ └── og
│ │ └── route.tsx
│ ├── components
│ │ ├── PostsFilter.tsx
│ │ ├── about.tsx
│ │ ├── buttons
│ │ │ ├── deleteComment.tsx
│ │ │ ├── scrollIntoViewButton.tsx
│ │ │ ├── signIn.tsx
│ │ │ └── submitButton.tsx
│ │ ├── commentSection.tsx
│ │ ├── comments.tsx
│ │ ├── contribute.tsx
│ │ ├── footer.tsx
│ │ ├── form
│ │ │ ├── commentForm.tsx
│ │ │ └── subscriptionForm.tsx
│ │ ├── header.tsx
│ │ ├── nextPostsAside.tsx
│ │ ├── previewPosts.tsx
│ │ ├── sessionProvider.tsx
│ │ ├── subscribe.tsx
│ │ ├── themeSwitch.tsx
│ │ ├── toggleProvider.tsx
│ │ ├── topicsCovered.tsx
│ │ └── validationMessage.tsx
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ ├── posts
│ │ ├── [slug]
│ │ │ └── page.tsx
│ │ └── allPosts
│ │ └── page.tsx
│ ├── topics
│ │ └── [[...slug]]
│ │ └── page.tsx
│ └── utils
│ ├── actions
│ │ ├── addComment.ts
│ │ ├── addEmail.ts
│ │ └── isEmailInDatabase.ts
│ ├── authOptions.ts
│ ├── calculateReadingTime.ts
│ ├── db
│ │ ├── dbConnect.ts
│ │ └── models
│ │ ├── comments.ts
│ │ ├── emails.ts
│ │ └── likes.ts
│ ├── formatDate.ts
│ ├── getComments.ts
│ ├── hooks
│ │ └── useDateFilter.ts
│ ├── types.ts
│ └── validateEmail.ts
├── tailwind.config.ts
└── tsconfig.json

## 📝 Project Summary

- [src](src): Main source code directory for the TypeScript project.
- [src/app](src/app): Contains the core application logic and components.
- [src/app/api](src/app/api): Handles API requests and responses.
- [src/app/components](src/app/components): Houses reusable UI components.
- [src/app/posts](src/app/posts): Manages blog post related functionality.
- [src/app/topics](src/app/topics): Deals with topic-related functionality.
- [src/app/utils](src/app/utils): Provides utility functions and helpers.
- [src/app/utils/actions](src/app/utils/actions): Defines Redux actions.
- [src/app/utils/db](src/app/utils/db): Handles database operations.
- [src/app/utils/hooks](src/app/utils/hooks): Contains custom React hooks.

## 💻 Stack

- [next-auth](https://github.com/nextauthjs/next-auth): Authentication library for Next.js applications.
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote): Render MDX content on the server and client side in Next.js applications.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for styling.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [mongoose](https://mongoosejs.com/): Object Data Modeling (ODM) library for MongoDB and Node.js.
- [next](https://nextjs.org/): Framework for server-rendered React applications.
- [typescript](https://www.typescriptlang.org/): Typed superset of JavaScript that compiles to plain JavaScript.

## ⚙️ Setting Up

## 🚀 Run Locally

1.Clone the blog repository:
sh
git clone https://github.com/FrancoCanzani/blog

2.Install the dependencies with one of the package managers listed below:
bash
pnpm install
bun install
npm install
yarn install

3.Start the development mode:
bash
pnpm dev
bun dev
npm run dev
yarn dev
