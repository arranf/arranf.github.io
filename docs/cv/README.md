---
{
  "layout": "CV",
  "title": "CV"
}
---
<c-v-header />

## Experience

<block title="Spark Development Network" subtitle="Developer, Remote" years="2018-Current">

My main responsibility is acting the primary point of contact for a large client - I design features to their requests and either incorporate them into the core OSS code or build custom functionality unique to their deployment.
Additional responsibilities include leading code reviews at all-hands developer meeting managing offshore resources. Introduced company wide tools for enforcing code style and static analysis.  

<skills :list="['C#', 'ASP.NET', 'SQL', 'SQL Server', 'jQuery', 'IIS', 'Azure', 'Windows Server',  'Requirements Analysis', 'OSS Community Management', 'Release Planning', 'Retainer Management']" />

</block>

<block title="Bricks and Mortar Studio" subtitle="Consultant" years="2016-Current">
I am a self employed consultant for non-profits using Rock RMS, an open source CMS/CRM. I perform data migration and produce custom solutions for their needs. Project details available on request.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Python3', 'Pandas', 'Requirements Analysis', 'Project Management']" />

</block>

<block title="Royal Holloway, University of London" subtitle="Undergraduate Researcher" years="Summer 2016 / Summer 2017">

**2016**

Produced a web interface (Rust/Angular 1) to queue jobs for ExpoSE.js, a JavaScript symbolic execution engine. I also added multiple modes of serialization to ExpoSE.js and identified a bug which led to a pull request in Samsung’s Jalangi2’s analysis framework.

**2017**

Added features to ExpoSE.js to help users analyse line coverage and added preliminary support for creating new paths when performing object access. I also performed case studies on notable NPM libraries to identify causes of concretization which helped inform my third year project work on ExpoSE.js.

<skills :list="['Rust', 'GDB', 'Z3', 'SMT', 'Angular 1', 'JavaScript', 'Node.js', 'Bash']" />
</block>

<block title="Spark Development Network" subtitle="Internship" years="Summer 2016">

I worked on v6 of [Rock RMS](https://github.com/SparkDevNetwork/Rock/), a large (1000 KLOC+) C#/ASP.NET open source application for non-profits. Notably I shipped the first iteration of their notification and telemetry system and gave a talk at their annual conference.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Entity Framework 6', 'SQL Server', 'HTML5', 'CSS3', 'jQuery', 'Git']" />
</block>

<block title="Hope Church" subtitle="Communications Director" years="2013-2015">

Architected an information strategy. Modernised processes including a migration to Google Apps and an implementation of an OSS CRM on Azure.

</block>

## Projects

<block title="Heroes Companion" github-url="arranf/HeroesCompanion">

A Flutter application for Android and iOS that displays high win % combinations of talents for the game Heroes of the Storm.

Uses the redux paradigm for state management and a SQLite database for persisted data. Updates provided by an Express REST server which connects to a Mongo database. Uses S3 as an asset store. Statistics scraped using Puppeteer and game data is translated using an AWS Lambda Python script function.

<skills :list="['Dart', 'Redux', 'Java', 'SQLite', 'Express', 'MongoDB', 'Mongoose', 'AWS', 'S3', 'Puppeteer', 'Heroku']" />

</block>

<block title="Jonathan's Movies" github-url="arranf/Jonathans-Movies-Client">

A Vue.js web application to make hosting movie nights among friends easier. Users, in real time, nominate and then vote on movies in a library. Notable features include per user movie recommendations, SQIP lazy-loading for movie posters and backdrops, and a combination of local and Facebook auth.

<skills :list="['Vue', 'Webpack', 'Jest', 'Real-Time', 'Web Sockets', 'Machine Learning', 'OAuth']" />

</block>

## Education
<block title="First Class Software Engineering BSc" subtitle="Royal Holloway, University of London" years="2015-2018">

<grid title="Awards" items="awards" width="100" style="margin-bottom: 2em;" />

<h4 style="margin-bottom: 0px">Final Year Project</h4>

<div style="margin-top: 4px;"></div>

Added support for JavaScript arrays to the research tool ExpoSE.js and produced SMT models for notable array prototype functions including `indexOf()`, `pop()`, and `slice()`. I also produced a method of verifying array polyfills which I used to identify a bug in a popular array polyfill library.

<div style="margin-bottom: 2em;"></div>

<grid title="Elective Modules" items="modules" width="33" />
</block>

## Languages
<grid items="languages" />

<style>
h2 {
  border-bottom: 0 !important;
}

h4 {
  color: #888888;
}
</style>