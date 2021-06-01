---
{ "layout": "CV", "title": "CV" }
---

<c-v-header />

## Profile

A full-stack software engineer with a product focus and leadership experience looking to make an impact.

<grid title="Languages" items="languages" class="block" />

## Experience

<block title="Perfect Ward" subtitle="Developer" years="June 2021-Current">

I am responsible for building and maintaining a backend infrastructure expanding into multiple geographies.

<skills :list="['Ruby', 'Rails']" />

</block>

<block title="Tractable" subtitle="Developer" years="September 2020-June 2021">

I was responsible for building a growing feature set and scaling our architecture to meet a rapidly number of clients across multiple geographies.

During my time I took on several solo initiatives including: adjusting our pipeline to support flows using both fully AI driven decisions and human in the loop decisions; rebuiliding applications to migrate the team's services to Kubernetes from DC/OS; creating a framework for automated end-to-end testing of our pipeline in production; and making the product reproducible across environments.

I also helped improve the robustness of our codebase by kickstarting an initiative to introduce stronger types, extracting reused functionality into well tested libraries, and improving the resilience of our release process to prevent downtimes during deploys.

<skills :list="['TypeScript', 'GraphQL', 'Kafka', 'Node.js', 'React', 'Kubernetes', 'Postgres', 'Redis', 'Docker', 'AWS', 'Gauge', 'E2E', 'Kafka', 'Jenkins', 'Datadog', 'Microservices', 'ArgoCD', 'Monorepo']" />

</block>

<block title="Limejump" subtitle="Developer" years="February 2019-September 2020">

I was responsible for the ongoing rearchitecture and redesign of a critical customer facing application as part of a cross disciplinary UX focused team. On a day to day basis I worked on creating abstractions to trade-off simplicity, speed, and correctness whilst working on identifying what users really need.

During my time at Limejump I designed and implemented a solution that allows us to combine the existing legacy application with a new React implementation to allow us to incrementally deliver improvements to the user. I also architected and implemented a microservice approach to the backend to accommodate scale and cleanly divide responsibilities in a growing team.

Whilst at Limejump I drove change to several processes. I made significant contributions to our hiring and interview process, taking ownership of the technical screening phase of our process for full-stack and QA engineers. I also introduced guidance and led training around code reviews, introduced and led training on Kubernetes, and created and led an on-call system for our team. I took a role in mentoring developers and introduced a 'Friday Developer Talk' slot.

<skills :list="['Node.js', 'React', 'Redux', 'Kubernetes', 'Docker', 'AWS', 'Kafka', 'Prometheus', 'Humio', 'CircleCI', 'Git', 'Google Cloud', 'Microservices', 'Nginx', 'Scrum', 'Angular 1']" />

</block>

<block title="Spark Development Network" subtitle="Developer, Remote" years="June 2018-February 2019">

I built and designed features to specification for clients, incorporating them into the core OSS product when appropriate, or building them as a custom solution when not. Solutions were built to work at scale while maintaining high performance and reliability on both on-premise and cloud infrastructure. My primary focus was coordinating the development for a key strategic partner.

During my time I introduced developer best practices including code reviews and tools for enforcing code style and static analysis.

<skills :list="['C#', 'ASP.NET', 'SQL', 'SQL Server', 'jQuery', 'IIS', 'Azure', 'Windows Server',  'Requirements Analysis', 'OSS Community Management', 'Release Planning', 'Retainer Management']" />

</block>

<block title="Bricks and Mortar Studio" subtitle="Consultant" years="2016-2020">
I consulted with non-profits (and their partners) using Rock RMS, an open source CMS/CRM. I performed data migration and wrote code for client-specific features. Examples include designing the API for a leading giving provider with $1m+ weekly revenue and producing a fit validating prototype for a pre-seed startup.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Python3', 'Pandas', 'Requirements Analysis', 'Project Management']" />

</block>

<block title="Royal Holloway, University of London" subtitle="Undergraduate Researcher" years="Summer 2016 / Summer 2017">

I produced a web interface (Rust/Angular 1) to queue jobs for a JavaScript symbolic execution engine and identified, wrote, and contributed a fix for a bug in Samsung’s JavaScript analysis framework.

I also added features to the symbolic engine to help users analyse line coverage and to provide preliminary support for symbolic objects. Additionally, I performed a number of case studies on popular NPM libraries to identify areas of the engine that required improvement.

<skills :list="['Rust', 'GDB', 'Z3', 'SMT', 'Angular 1', 'JavaScript', 'Node.js', 'Bash']" />

</block>

<block title="Spark Development Network" subtitle="Internship" years="Summer 2016">

I worked on v6 of [Rock RMS](https://github.com/SparkDevNetwork/Rock/), a large (1000 KLOC+) C#/ASP.NET open source application for non-profits, including the first iteration of their notification and telemetry system. I also gave a talk at their annual conference on the benefits of open source software and the different roles that users and developers have within that ecosystem.

<skills :list="['C#', 'ASP.NET', 'SQL', 'Entity Framework 6', 'SQL Server', 'HTML5', 'CSS3', 'jQuery', 'Git', 'Public Speaking']" />

</block>

<block title="Hope Church" subtitle="Communications Director" years="2013-2015">

I architected an information strategy for storing and recording PII data within ICO guidelines. This strategy led to me modernising internal tools and processes, which included a migration to Google Apps and the introduction of a modern CRM.

</block>

## Projects

<block title="Jonathan's Movies" github-url="arranf/Jonathans-Movies-Client">

I built a Vue.js web application to make hosting movie nights among friends easier. The project leverages FeathersJS and web sockets to display selections in real-time to all connected users. The server side also uses machine learning to produce movie recommendations for users using a cosine similarity matrix.

<skills :list="['TypeScript', 'Node.js', 'Vue', 'Webpack', 'Jest', 'Real-Time', 'Web Sockets', 'Machine Learning', 'OAuth']" />
</block>

<block title="Heroes Companion" github-url="arranf/Heroes-Companion">

I built a Flutter application for Android and iOS to help users identify the optimal talent combinations for the game Heroes of the Storm.

The on-device application is supported by a data pipeline that translates in-game data via an AWS Lambda function. App content updates are provided by a Express/MongoDB backend which also scrapes statistics from the web. Images are served by S3, and the API is backed by CloudFront.

<skills :list="['Flutter', 'Dart', 'Redux', 'Java', 'SQLite', 'Express', 'MongoDB', 'Mongoose', 'AWS', 'S3', 'Cloudfront', 'Lambda', 'Puppeteer', 'Heroku']" />

</block>

<block title="Miscellaneous">

I maintain a number of open source Rust libraries and tools including applications for parsing D&D dice roll strings, building a search index for a static site, adding IP addresses to AWS EC2 instances, parsing and decoding Hearthstone deck strings, and removing markdown syntax from a string. I also have my own gitops powered home Kubernetes cluster.

</block>

## Education

<block title="First Class Software Engineering BSc" subtitle="Royal Holloway, University of London" years="2015-2018">

<grid title="Awards" items="awards" width="100" />

</block>
