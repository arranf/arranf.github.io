---
{
  "layout": "CV",
  "title": "CV"
}
---
<c-v-header />

## Profile

A full-stack developer with a broad experience of building products for clients and a strong grasp of computer science fundamentals looking to join an established team of developers.

<grid title="Languages" items="languages" class="block" />

## Experience

<block title="Limejump" subtitle="Fullstack Developer" years="February 2019-Current">

I'm responsible for the architecture, design, and implementation of microservices to support customer facing and internal tools. Services are designed and built within the frame of an aggressive scaling plan and to work with large volumes of real-time data. Services are deployed as containers and managed with Kubernetes.

<skills :list="['Python', 'Node.js', 'React', 'Go', 'Postgres', 'GraphQL', 'Google Cloud', 'AWS', 'Rabbit MQ', 'Microservices', 'Docker', 'Kubernetes', 'Nginx', 'Scrum']" />

</block>

<block title="Spark Development Network" subtitle="Developer, Remote" years="June 2018-February 2019">

I built and designed features to specification for clients, incorporating them into the core OSS product when appropriate, or building them as a custom solution when not. Solutions were built to work at scale (millions of records) while maintaining high performance and reliability on both on-premise or cloud infrastructure.

I also acted as the lead developer for a strategic partner which requireed me to field informal client requests, analyse the requirements, provide an effort estimate, produce a specification, and communicate the requirements with other developers to plan the feature as part of the ongoing product release cycle.

During my time I introduced developer best practices including code reviews and tools for enforcing code style and static analysis.

<skills :list="['C#', 'ASP.NET', 'SQL', 'SQL Server', 'jQuery', 'IIS', 'Azure', 'Windows Server',  'Requirements Analysis', 'OSS Community Management', 'Release Planning', 'Retainer Management']" />

</block>

<block title="Bricks and Mortar Studio" subtitle="Consultant" years="2016-Current">
I am a consultant for non-profits (and their partners) using Rock RMS, an open source CMS/CRM. I perform data migration and write code for client-specific features. Examples include designing the API for a leading giving provider with $1m+ weekly revenue.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Python3', 'Pandas', 'Requirements Analysis', 'Project Management']" />

</block>

<block title="Royal Holloway, University of London" subtitle="Undergraduate Researcher" years="Summer 2016 / Summer 2017">

**2016**

I produced a web interface (Rust/Angular 1) to queue jobs for ExpoSE.js, a JavaScript symbolic execution engine. I also added multiple modes of serialization to ExpoSE.js and identified and wrote a PR to fix a bug in Samsung’s JavaScript analysis framework.

**2017**

I added features to ExpoSE.js to help users analyse line coverage and to provide preliminary support for creating new paths when accessing objects. I also performed case studies on popular NPM libraries to identify causes of concretization which helped inform my third year project work on ExpoSE.js.

<skills :list="['Rust', 'GDB', 'Z3', 'SMT', 'Angular 1', 'JavaScript', 'Node.js', 'Bash']" />

</block>

<block title="Spark Development Network" subtitle="Internship" years="Summer 2016">

I worked on v6 of [Rock RMS](https://github.com/SparkDevNetwork/Rock/), a large (1000 KLOC+) C#/ASP.NET open source application for non-profits, including the first iteration of their notification and telemetry system. I also gave a talk at their annual conference on the benefits of open source software and the different roles that users and developers have within that ecosystem.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Entity Framework 6', 'SQL Server', 'HTML5', 'CSS3', 'jQuery', 'Git', 'Public Speaking']" />

</block>

<block title="Hope Church" subtitle="Communications Director" years="2013-2015">

I architected an information strategy for people data. I also modernised internal tools and processes, including a migration to Google Apps and the introduction of a modern CRM.

</block>

## Projects

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

<h4 style="margin-bottom: 0px">Final Year Project</h4>

<div style="margin-top: 4px;"></div>

I added SMT models of popular array prototype functions to the research tool ExpoSE.js and demonstrated a method of verifying array polyfills which I used to identify a bug in a popular polyfill library.

<!-- <div style="margin-bottom: 2em;"></div> -->
<!-- <grid title="Elective Modules" items="modules" width="33" /> -->

</block>
