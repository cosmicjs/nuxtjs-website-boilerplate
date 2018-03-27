# Nuxt.js Website Boilerplate

![nuxtjs-website-boilerplate](https://cosmic-s3.imgix.net/f761b6c0-31c3-11e8-b70e-833ed2e4b04d-nuxtjs-cosmicjs.jpg)
A website template that satisfies some common website requirements including dynamic pages, blog articles, author management, SEO ability, contact form and website search.  Contributions welcome!

## Demo
[Click here to view the demo](https://cosmicjs.com/apps/nuxtjs-website-boilerplate)

> [Read how this app was built](https://cosmicjs.com/articles/nuxtjs-website-boilerplate-jezdxaxb)

## Features
1. Fully responsive down to mobile w/ [Bootstrap](http://getbootstrap.com) frontend<br />
2. SEO ready<br />
3. A contact form that sends an email to your email(s) of choice and to [Cosmic JS](https://cosmicjs.com) for easy reference<br />
4. Full-site search functionality<br />
5. All content is easily managed in [Cosmic JS](https://cosmicjs.com) including pages, blog and contact info.

Sign up for [Cosmic JS](https://cosmicjs.com) to install the demo content and deploy this website.

## Getting Started

```bash
git clone https://github.com/cosmicjs/nodejs-website-boilerplate
cd nuxtjs-website-boilerplate
npm install

# Run in development and serve at localhost:3000
npm run dev

# build for production
npm run build

# Run in production and serve at localhost:3000
COSMIC_BUCKET=your-bucket-slug npm start
```


## Configure

After you deploy your app, to add your [MailGun](https://www.mailgun.com/) credentials go to your Cosmic Bucket Dashboard and click Settings > Deploy Web App.  Click 'Set Environment Variables' tab and add the following variables:

Key | Value
--- | ---
| MAILGUN_KEY     | your key
| MAILGUN_DOMAIN      | your domain
