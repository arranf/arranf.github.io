---
{
  "layout": "CV",
  "title": "CV"
}
---
<c-v-header />

## Profile

A full-stack developer with a track record of building well engineered products and a strong grasp of computer science fundamentals looking to join an established team of developers solving challenging problems building their platform in Rust or Go.

<grid title="Languages" items="languages" class="block" />

<grid title="Affiliations" :items="['Rust CLI Working Group']" />

## Experience

<block title="Limejump" subtitle="Fullstack Developer" years="February 2019-Current">

I'm responsible for the architecture, design, and implementation of microservices to support customer facing and internal tools. Services are designed and built within the frame of an aggressive scaling plan and to work with large volumes of real-time data, and are managed with Kubernetes across two cloud providers, AWS and GCP. 

I also have a significant role in hiring pipeline at both the telephone and on-site stages.

<skills :list="['Python', 'Node.js', 'Rust', 'React', 'Go', 'Postgres', 'Redis', 'Airflow', 'Google Cloud', 'AWS', 'Microservices', 'Docker', 'Kubernetes', 'CircleCI', 'Nginx', 'Scrum']" />

</block>

<block title="Spark Development Network" subtitle="Developer, Remote" years="June 2016-February 2019">

I worked on [Rock RMS](https://github.com/SparkDevNetwork/Rock/), a large (1000 KLOC+) C#/ASP.NET open source application for non-profits. I built and designed solutions as the lead developer for a strategic partner, incorporating them into the core OSS product when appropriate, or building them as a custom solution when not. My role required me to field informal client requests, analyse the requirements, provide an effort estimate, produce a specification, and communicate the requirements with other developers to plan the feature as part of the ongoing product release cycle.

During my time I introduced developer best practices including code reviews and tools for enforcing code style and static analysis, and I also regularly spoke at conferences.

<skills :list="['C#', 'ASP.NET', 'SQL', 'SQL Server', 'jQuery', 'IIS', 'Azure', 'Windows Server',  'Requirements Analysis', 'OSS Community Management', 'Release Planning', 'Retainer Management']" />

</block>

<block title="Royal Holloway, University of London" subtitle="Undergraduate Researcher" years="Summer 2016 / Summer 2017 / Final Year Project 2018">

I produced a RESTful API and web app using Rust and Angular JS to queue jobs for ExpoSE.js, a JavaScript symbolic execution engine. I extended the engine to add multiple modes of serialization, record line coverage, and to provide preliminary support for creating new paths when accessing objects. 

I also performed case studies on popular NPM libraries to identify causes of concretization which helped inform my third year project work of adding support for arrays array prototype functions by producing SMT models. This work enabled me to demonstrate a method of verifying array polyfills which I used to identify a bug in a popular polyfill library.

<skills :list="['Rust', 'GDB', 'Z3', 'SMT', 'Angular 1', 'JavaScript', 'Node.js', 'Bash']" />

</block>

<block title="Bricks and Mortar Studio" subtitle="Consultant" years="2016-Present">

I founded a consultancy focusing on non-profits and their partners. Work performed includes data migration, customization of OSS, designing and writing the API for a leading giving provider with $1m+ weekly revenue, and a proof-of-concept web application for a startup.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Python 3', 'Pandas', 'Node.js', 'TDD', 'Requirements Analysis', 'Project Management']" />

</block>

<block title="Hope Church" subtitle="Communications Director" years="2013-2015">

I architected an information strategy for recording data on people, in line with ICO recommendations. I also modernised internal tools and processes, including a migration to Google Apps and the introduction of a modern CRM.

</block>

## Notable Projects

<block title="Rust Projects">

#### Hugo to JSON <github url="arranf/HugoToJSON" />
An application to parse and index the contents of a Hugo blog and produce a JSON index. It demonstrates testing best practises by using a suite of unit and integration tests as well fuzzing to test for errors.

#### Responsive Image to Hugo Shortcode <github url="arranf/responsive-image-to-hugo-shortcode" />

A command line tool to convert the verbose output of responsivebreakpoints.com into a Hugo shortcode and upload the relevant images to an S3 bucket, notably the program builds against a Go binary and uses FFI.

#### Deck Codes <github url="arranf/deck-codes" />
A library for encoding and decoding Hearthstone deck codes or deckstrings - an example of parsing basic structures without the use of crates like nom.

<skills :list="['Rust', 'CircleCI', 'Go', 'FFI', 'AFL', 'Structopt']" />

</block>

<block title="Heroes Companion" github-url="arranf/Heroes-Companion">

I built a Flutter application for Android and iOS to help users identify the optimal talent combinations for the game Heroes of the Storm.

The project combines multiple technologies and paradigms spread over multiple services to power the on-device application. App content updates are provided by a Express/MongoDB backend which also scrapes statistics from the web. Game data is translated using an AWS Lambda function, images are served by S3, and the API is backed by CloudFront.

<skills :list="['Flutter', 'Dart', 'Redux', 'Java', 'SQLite', 'Express', 'MongoDB', 'Mongoose', 'AWS', 'S3', 'Puppeteer', 'Heroku']" />

</block>

<block title="Jonathan's Movies" github-url="arranf/Jonathans-Movies-Client">

I built a Vue.js web application to make hosting movie nights among friends easier. The project leverages FeathersJS and web sockets to display selections in real-time to all connected users. The server side also uses machine learning to produce movie recommendations for users using a cosine similarity matrix.

<skills :list="['Vue', 'Webpack', 'Jest', 'Real-Time', 'Web Sockets', 'Machine Learning', 'OAuth']" />

</block>

## Education
<block title="First Class Software Engineering BSc" subtitle="Royal Holloway, University of London" years="2015-2018">

<grid title="Awards" items="awards" width="100" />

</block>
