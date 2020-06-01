---
{
  "layout": "CV",
  "title": "CV"
}
---
<c-v-header />

## Profile

A full-stack software engineer with a product focus and leadership experience looking to make an impact.

<grid title="Languages" items="languages" class="block" />

## Experience

<block title="Limejump" subtitle="Developer" years="February 2019-Current">

I am responsible for the ongoing rearchitecture and redesign of a critical customer facing application as part of a cross disciplinary UX focused team. On a day to day basis I trade-off simplictly, speed, and correctness whilst working on identifying what users really need.

During my time at Limejump I designed and implemented a solution that allows us to combine the existing legacy application with a new React implementation to allow us to incrementally deliver improvements to the user. I also architectured and implemented a set of microservices, split by domain, running in Kubernetes to improve the performance, productivity, and maintainability of the codebase.

Whilst at Limejump I also made signifcant contributions to our hiring and interview process, taking key ownership of the technical screening phase of our process for full-stack, frontend, and QA engineers. I also introduced guidance and led training around code reviews, codified our process of promoting releases to production, and created and led an on-call system for our team. I also took a role in mentoring developers and introduced a 'Friday Developer Talk' slot.

<skills :list="['Node.js', 'React', 'Redux', 'Kubernetes', 'Docker', 'AWS', 'Kafka', 'Prometheus', 'Humio', 'CircleCI', 'Git', 'Google Cloud', 'Microservices', 'Nginx', 'Scrum', 'Angular 1']" />

</block>

<block title="Spark Development Network" subtitle="Developer, Remote" years="June 2018-February 2019">

I built and designed features to specification for clients, incorporating them into the core OSS product when appropriate, or building them as a custom solution when not. Solutions were built to work at scale while maintaining high performance and reliability on both on-premise and cloud infrastructure.

My primary focus was coordinating the development for a key strategic partner which required me to translate informal client requests into requirements, provide an effort estimate, produce a specification, and communicate the requirements with other developers to plan the feature as part of the ongoing product release cycle.

During my time I introduced developer best practices including code reviews and tools for enforcing code style and static analysis.

<skills :list="['C#', 'ASP.NET', 'SQL', 'SQL Server', 'jQuery', 'IIS', 'Azure', 'Windows Server',  'Requirements Analysis', 'OSS Community Management', 'Release Planning', 'Retainer Management']" />

</block>

<block title="Bricks and Mortar Studio" subtitle="Consultant" years="2016-Current">
I am a consultant for non-profits (and their partners) using Rock RMS, an open source CMS/CRM. I perform data migration and write code for client-specific features. Examples include designing the API for a leading giving provider with $1m+ weekly revenue.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Python3', 'Pandas', 'Requirements Analysis', 'Project Management']" />

</block>

<block title="Royal Holloway, University of London" subtitle="Undergraduate Researcher" years="Summer 2016 / Summer 2017">

I produced a web interface (Rust/Angular 1) to queue jobs for a JavaScript symbolic execution engine and identified, wrote, and contributed a fix for a bug in Samsung’s JavaScript analysis framework.

In my second year, I added features to the symbolic engine to help users analyse line coverage and to provide preliminary support for symbolic objects. I also performed a number of case studies on popular NPM libraries to identify areas of the engine that required improvement.

<skills :list="['Rust', 'GDB', 'Z3', 'SMT', 'Angular 1', 'JavaScript', 'Node.js', 'Bash']" />

</block>

<block title="Spark Development Network" subtitle="Internship" years="Summer 2016">

I worked on v6 of [Rock RMS](https://github.com/SparkDevNetwork/Rock/), a large (1000 KLOC+) C#/ASP.NET open source application for non-profits, including the first iteration of their notification and telemetry system. I also gave a talk at their annual conference on the benefits of open source software and the different roles that users and developers have within that ecosystem.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Entity Framework 6', 'SQL Server', 'HTML5', 'CSS3', 'jQuery', 'Git', 'Public Speaking']" />

</block>

<block title="Hope Church" subtitle="Communications Director" years="2013-2015">

I architected an information strategy for storing and recording data within ICO guidelines. I also modernised internal tools and processes, including a migration to Google Apps and the introduction of a modern CRM.

</block>

## Projects

<block title="Heroes Companion" github-url="arranf/Heroes-Companion">

I built a Flutter application for Android and iOS to help users identify the optimal talent combinations for the game Heroes of the Storm.

The on-device application is supported by a data pipeline that translates in-game data via an AWS Lambda function. App content updates are provided by a Express/MongoDB backend which also scrapes statistics from the web. Images are served by S3, and the API is backed by CloudFront.

<skills :list="['Flutter', 'Dart', 'Redux', 'Java', 'SQLite', 'Express', 'MongoDB', 'Mongoose', 'AWS', 'S3', 'Cloudfront', 'Lambda', 'Puppeteer', 'Heroku']" />

</block>

<block title="Jonathan's Movies" github-url="arranf/Jonathans-Movies-Client">

I built a Vue.js web application to make hosting movie nights among friends easier. The project leverages FeathersJS and web sockets to display selections in real-time to all connected users. The server side also uses machine learning to produce movie recommendations for users using a cosine similarity matrix.

<skills :list="['Node.js', 'Vue', 'Webpack', 'Jest', 'Real-Time', 'Web Sockets', 'Machine Learning', 'OAuth']" />
</block>

<block title="Rust Libraries">

I maintain a number of open source Rust libraries and applications including applications for parsing D&D dice roll strings, building a search index for a static site, adding IP addresses to AWS EC2 instances, parsing and decoding Hearthstone deck strings, and removing markdown syntax from a string.

</block>

## Education
<block title="First Class Software Engineering BSc" subtitle="Royal Holloway, University of London" years="2015-2018">

<grid title="Awards" items="awards" width="100" />

</block>
