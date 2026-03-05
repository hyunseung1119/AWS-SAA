# SAA TXT Question Index

- Source file: `references/raw/saa-c03-solution.txt`
- Generated at: 2026-03-05 10:30:06 KST

| Q# | Line | Scenario (first line) |
|---:|---:|---|
| 1 | 1 | A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company... |
| 2 | 18 | A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will ... |
| 3 | 26 | A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains proj... |
| 4 | 35 | An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to acce... |
| 5 | 48 | A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scal... |
| 6 | 56 | A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage ... |
| 7 | 64 | A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number o... |
| 8 | 75 | A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coo... |
| 9 | 83 | A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the ... |
| 10 | 92 | A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. T... |
| 11 | 100 | A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user na... |
| 12 | 108 | A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic... |
| 13 | 117 | A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Am... |
| 14 | 125 | A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group ac... |
| 15 | 135 | A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an i... |
| 16 | 143 | A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that pr... |
| 17 | 151 | A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A s... |
| 18 | 159 | An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image throug... |
| 19 | 172 | A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and dat... |
| 20 | 181 | A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon... |
| 21 | 190 | An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company... |
| 22 | 200 | A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss... |
| 23 | 210 | A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed aft... |
| 24 | 220 | A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple... |
| 25 | 230 | A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the informa... |
| 26 | 240 | A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes. |
| 27 | 247 | A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to acces... |
| 28 | 256 | A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Orga... |
| 29 | 264 | A company provides a Voice over Internet Protocol (VoIP) service that uses UDP connections. The service consists of Amazon EC2 instances that run in an Auto ... |
| 30 | 274 | A development team runs monthly resource-intensive tests on its general purpose Amazon RDS for MySQL DB instance with Performance Insights enabled. The testi... |
| 31 | 282 | A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configure... |
| 32 | 290 | A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images. |
| 33 | 299 | A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a sca... |
| 34 | 311 | A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its A... |
| 35 | 321 | A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an E... |
| 36 | 329 |  |
| 37 | 338 | A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and admin... |
| 38 | 346 | A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. ... |
| 39 | 356 | A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 ... |
| 40 | 367 | A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions arch... |
| 41 | 376 | A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive t... |
| 42 | 386 | A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across m... |
| 43 | 394 | A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and t... |
| 44 | 402 | A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion. |
| 45 | 418 | A company has a data ingestion workflow that consists of the following: |
| 46 | 432 | A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload t... |
| 47 | 441 | A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week. |
| 48 | 449 | A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that ... |
| 49 | 457 | A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently... |
| 50 | 466 | A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patc... |
| 186 | 1100 | A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple... |
| 187 | 1109 | A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A ... |
| 188 | 1118 | A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a ... |
| 189 | 1127 | A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be ove... |
| 190 | 1140 | A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the abili... |
| 201 | 1153 | A company is developing a marketing communications service that targets mobile app users. The company needs to send its users confirmation messages with Shor... |
| 202 | 1162 | A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption ke... |
| 203 | 1171 | The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances... |
| 204 | 1182 | An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for cust... |
| 205 | 1195 | A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator upd... |
| 206 | 1206 | A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company nee... |
| 207 | 1215 |  |
| 208 | 1223 | A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through pub... |
| 209 | 1234 | A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand In... |
| 210 | 1245 |  |
| 211 | 1253 | A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notifi... |
| 212 | 1264 | A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object size varies between 2 GB and 5 GB. The S3 acces... |
| 213 | 1275 | A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common a... |
| 214 | 1285 | A company’s reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format a... |
| 215 | 1297 | A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup data need to be accessible for infrequent regula... |
| 216 | 1307 | A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3 bucket as the origin for an Amazon CloudFront dis... |
| 217 | 1317 | A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The compan... |
| 218 | 1324 | A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The default security group is assigned to the EC2... |
| 219 | 1333 | A company’s application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company ... |
| 220 | 1341 | A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; sever... |
| 221 | 1350 | A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company must retain all application log files for 7 years... |
| 222 | 1359 | A company has hired an external vendor to perform work in the company’s AWS account. The vendor uses an automated tool that is hosted in an AWS account that ... |
| 223 | 1370 | A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service (Amazon EKS) in private subnets. The applicatio... |
| 224 | 1383 |  |
| 225 | 1392 | A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will ... |
| 226 | 1405 | A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance re... |
| 227 | 1418 | A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set of AWS accounts by using AWS Organizations fr... |
| 228 | 1429 | A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an Amazon RDS DB instance for later analysi... |
| 229 | 1442 | A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decr... |
| 230 | 1451 | A company is concerned that two NAT instances in use will no longer be able to support the traffic needed for the company’s application. A solutions architec... |
| 231 | 1465 | An application runs on an Amazon EC2 instance that has an Elastic IP address in VPC A. The application requires access to a database in VPC B. Both VPCs are ... |
| 232 | 1474 | A company runs demonstration environments for its customers on Amazon EC2 instances. Each environment is isolated in its own VPC. The company’s operations te... |
| 233 | 1492 | A solutions architect has created a new AWS account and must secure AWS account root user access. |
| 234 | 1503 | A company is building a new web-based customer relationship management application. The application will use several Amazon EC2 instances that are backed by ... |
| 235 | 1514 |  |
| 236 | 1522 | A company has a three-tier application for image sharing. The application uses an Amazon EC2 instance for the front-end layer, another EC2 instance for the a... |
| 237 | 1535 | An application running on an Amazon EC2 instance in VPC-A needs to access files in another EC2 instance in VPC-B. Both VPCs are in separate AWS accounts. The... |
| 238 | 1544 | A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be notified as soon as the Amazon EC2 instance usage f... |
| 239 | 1553 | A solutions architect needs to design a new microservice for a company’s application. Clients must be able to call an HTTPS endpoint to reach the microservic... |
| 240 | 1562 | A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect connection. Corporate office users query the dat... |
| 241 | 1571 | n online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in ... |
| 242 | 1580 | A company hosts its web application on AWS using seven Amazon EC2 instances. The company requires that the IP addresses of all healthy EC2 instances be retur... |
| 243 | 1594 | A medical research lab produces data that is related to a new study. The lab wants to make the data available with minimum latency to clinics across the coun... |
| 244 | 1603 | A company is using a content management system that runs on a single Amazon EC2 instance. The EC2 instance contains both the web server and the database soft... |
| 245 | 1612 | A company is launching an application on AWS. The application uses an Application Load Balancer (ALB) to direct traffic to at least two Amazon EC2 instances ... |
| 246 | 1621 | A company runs a web application on Amazon EC2 instances in multiple Availability Zones. The EC2 instances are in private subnets. A solutions architect impl... |
| 247 | 1630 | A company has deployed a database in Amazon RDS for MySQL. Due to increased transactions, the database support team is reporting slow reads against the DB in... |
| 248 | 1638 | Users report that some submitted data is not being processed Amazon CloudWatch reveals that the EC2 instances have a consistent CPU utilization at or near 10... |
| 249 | 1647 | 249Topic 1 |
| 250 | 1657 | A company’s security team requests that network traffic be captured in VPC Flow Logs. The logs will be frequently accessed for 90 days and then accessed inte... |
| 251 | 1666 | An Amazon EC2 instance is located in a private subnet in a new VPC. This subnet does not have outbound internet access, but the EC2 instance needs the abilit... |
| 252 | 1675 | A solutions architect needs to design a system to store client case files. The files are core company assets and are important. The number of files will grow... |
| 253 | 1684 |  |
| 254 | 1690 | A company is reviewing a recent migration of a three-tier application to a VPC. The security team discovers that the principle of least privilege is not bein... |
| 255 | 1699 | A company has an ecommerce checkout workflow that writes an order to a database and calls a service to process the payment. Users are experiencing timeouts d... |
| 256 | 1708 | A solutions architect is implementing a document review application using an Amazon S3 bucket for storage. The solution must prevent accidental deletion of t... |
| 257 | 1720 |  |
| 258 | 1727 | A company has an application that places hundreds of .csv files into an Amazon S3 bucket every hour. The files are 1 GB in size. Each time a file is uploaded... |
| 259 | 1742 | A company is implementing new data retention policies for all databases that run on Amazon RDS DB instances. The company must retain daily backups for a mini... |
| 260 | 1750 | A company’s compliance team needs to move its file shares to AWS. The shares run on a Windows Server SMB file share. A self-managed on-premises Active Direct... |
| 261 | 1766 | A company recently announced the deployment of its retail website to a global audience. The website runs on multiple Amazon EC2 instances behind an Elastic L... |
| 262 | 1783 | A company plans to use Amazon ElastiCache for its multi-tier web application. A solutions architect creates a Cache VPC for the ElastiCache cluster and an Ap... |
| 263 | 1799 | A company is building an application that consists of several microservices. The company has decided to use container technologies to deploy its software on ... |
| 264 | 1814 | A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53. The company occasionally experiences a timeout ... |
| 265 | 1825 | A solutions architect needs to design a highly available application consisting of web, application, and database tiers. HTTPS content delivery should be as ... |
| 266 | 1840 | A company has a popular gaming platform running on AWS. The application is sensitive to latency because latency can impact the user experience and introduce ... |
| 267 | 1851 | A company has one million users that use its mobile app. The company must analyze the data usage in near-real time. The company also must encrypt the data in... |
| 268 | 1860 | A gaming company has a web application that displays scores. The application runs on Amazon EC2 instances behind an Application Load Balancer. The applicatio... |
| 269 | 1870 | An ecommerce company has noticed performance degradation of its Amazon RDS based web application. The performance degradation is attributed to an increase in... |
| 270 | 1882 | A company is using a centralized AWS account to store log data in various Amazon S3 buckets. A solutions architect needs to ensure that the data is encrypted... |
| 271 | 1889 | A solutions architect observes that a nightly batch processing job is automatically scaled up for 1 hour before the desired Amazon EC2 capacity is reached. T... |
| 272 | 1899 | A company serves a dynamic website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The website needs to support multiple lang... |
| 273 | 1908 | 273Topic 1 |
| 274 | 1919 | A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery (DR) solution for the application. The DR solution ... |
| 275 | 1928 | A company runs an internal browser-based application. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in ... |
| 276 | 1935 | A company has a multi-tier application deployed on several Amazon EC2 instances in an Auto Scaling group. An Amazon RDS for Oracle instance is the applicatio... |
| 277 | 1948 | A company provides an online service for posting video content and transcoding it for use by any mobile platform. The application architecture uses Amazon El... |
| 278 | 1958 | A company wants to create an application to store employee data in a hierarchical structured relationship. The company needs a minimum-latency response to hi... |
| 279 | 1973 | A company has an application that is backed by an Amazon DynamoDB table. The company’s compliance requirements specify that database backups must be taken ev... |
| 280 | 1985 | A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront distribution, and logs are saved in one of the compa... |
| 281 | 1998 | A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requ... |
| 282 | 2007 | A company runs a web application that is deployed on Amazon EC2 instances in the private subnet of a VPC. An Application Load Balancer (ALB) that extends acr... |
| 283 | 2018 |  |
| 284 | 2025 | As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions arc... |
| 285 | 2036 | A company hosts its static website by using Amazon S3. The company wants to add a contact form to its webpage. The contact form will have dynamic server-side... |
| 286 | 2049 | A company has a static website that is hosted on Amazon CloudFront in front of Amazon S3. The static website uses a database backend. The company notices tha... |
| 287 | 2062 | A company wants to migrate a Windows-based application from on premises to the AWS Cloud. The application has three tiers: an application tier, a business ti... |
| 288 | 2073 | A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not... |
| 289 | 2082 | A company has an AWS Lambda function that needs read access to an Amazon S3 bucket that is located in the same AWS account. |
| 290 | 2093 | A company hosts a web application on multiple Amazon EC2 instances. The EC2 instances are in an Auto Scaling group that scales in response to user demand. Th... |
| 291 | 2104 | A media company uses Amazon CloudFront for its publicly available streaming video content. The company wants to secure the video content that is hosted in Am... |
| 292 | 2112 | A company is preparing a new data platform that will ingest real-time streaming data from multiple sources. The company needs to transform the data before wr... |
| 293 | 2131 | A company has an on-premises volume backup solution that has reached its end of life. The company wants to use AWS as part of a new backup solution and wants... |
| 294 | 2139 | An application that is hosted on Amazon EC2 instances needs to access an Amazon S3 bucket. Traffic must not traverse the internet. |
| 295 | 2148 | An ecommerce company stores terabytes of customer data in the AWS Cloud. The data contains personally identifiable information (PII). The company wants to us... |
| 296 | 2159 | A development team has launched a new application that is hosted on Amazon EC2 instances inside a development VPC. A solutions architect needs to create a ne... |
| 297 | 2170 | A solutions architect needs to implement a solution to automate the scalability of the application. The solution must optimize the cost of the architecture a... |
| 298 | 2181 | A company is running a critical business application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances run in an Auto Scaling gr... |
| 299 | 2189 | A research laboratory needs to process approximately 8 TB of data. The laboratory requires sub-millisecond latencies and a minimum throughput of 6 GBps for t... |
| 300 | 2200 | A company needs to migrate a legacy application from an on-premises data center to the AWS Cloud because of hardware capacity constraints. The application ru... |
| 301 | 2213 | 301Topic 1 |
| 302 | 2228 | A company wants to create a mobile app that allows users to stream slow-motion video clips on their mobile devices. Currently, the app captures video clips a... |
| 303 | 2245 | A company is launching a new application deployed on an Amazon Elastic Container Service (Amazon ECS) cluster and is using the Fargate launch type for ECS ta... |
| 304 | 2256 | A company recently created a disaster recovery site in a different AWS Region. The company needs to transfer large amounts of data back and forth between NFS... |
| 305 | 2265 | A company is designing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients t... |
| 306 | 2276 | A company wants to run an in-memory database for a latency-sensitive application that runs on Amazon EC2 instances. The application processes more than 100,0... |
| 307 | 2286 | A company that primarily runs its application servers on premises has decided to migrate to AWS. The company wants to minimize its need to scale its Internet... |
| 308 | 2297 | A company has multiple AWS accounts that use consolidated billing. The company runs several active high performance Amazon RDS for Oracle On-Demand DB instan... |
| 309 | 2307 | A solutions architect needs to optimize storage costs. The solutions architect must identify any Amazon S3 buckets that are no longer being accessed or are r... |
| 310 | 2318 | A company sells datasets to customers who do research in artificial intelligence and machine learning (AI/ML). The datasets are large, formatted files that a... |
| 311 | 2331 | A company is using AWS to design a web application that will process insurance quotes. Users will request quotes from the application. Quotes must be separat... |
| 312 | 2337 | A company has an application that runs on several Amazon EC2 instances. Each EC2 instance has multiple Amazon Elastic Block Store (Amazon EBS) data volumes a... |
| 313 | 2347 | A company is building a mobile app on AWS. The company wants to expand its reach to millions of users. The company needs to build a platform so that authoriz... |
| 314 | 2357 | A company has an on-premises MySQL database used by the global sales team with infrequent access patterns. The sales team requires the database to have minim... |
| 215 | 2366 | A company experienced a breach that affected several applications in its on-premises data center. The attacker took advantage of vulnerabilities in the custo... |
| 316 | 2372 | A company uses an Amazon EC2 instance to run a script to poll for and process messages in an Amazon Simple Queue Service (Amazon SQS) queue. The company want... |
| 317 | 2384 | A company uses a legacy application to produce data in CSV format. The legacy application stores the output data in Amazon S3. The company is deploying a new... |
| 318 | 2393 | A company recently migrated its entire IT environment to the AWS Cloud. The company discovers that users are provisioning oversized Amazon EC2 instances and ... |
| 319 | 2406 | A company has hundreds of Amazon EC2 Linux-based instances in the AWS Cloud. Systems administrators have used shared SSH keys to manage the instances. After ... |
| 320 | 2415 | A company is using a fleet of Amazon EC2 instances to ingest data from on-premises data sources. The data is in JSON format and ingestion rates can be as hig... |
| 321 | 2426 | What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted? |
| 322 | 2433 | A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application genera... |
| 323 | 2444 | A company’s facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate ... |
| 324 | 2454 | A company wants to implement a disaster recovery plan for its primary on-premises file storage volume. The file storage volume is mounted from an Internet Sm... |
| 325 | 2464 | A company is hosting a web application from an Amazon S3 bucket. The application uses Amazon Cognito as an identity provider to authenticate users and return... |
| 326 | 2477 | An image hosting company uploads its large assets to Amazon S3 Standard buckets. The company uses multipart upload in parallel by using S3 APIs and overwrite... |
| 327 | 2490 | A solutions architect must secure a VPC network that hosts Amazon EC2 instances. The EC2 instances contain highly sensitive data and run in a private subnet.... |
| 328 | 2497 | A company is hosting a three-tier ecommerce application in the AWS Cloud. The company hosts the website on Amazon S3 and integrates the website with an API t... |
| 329 | 2510 | A security audit reveals that Amazon EC2 instances are not being patched regularly. A solutions architect needs to provide a solution that will run regular s... |
| 330 | 2517 | A company is planning to store data on Amazon RDS DB instances. The company must encrypt the data at rest. |
| 331 | 2528 | A company must migrate 20 TB of data from a data center to the AWS Cloud within 30 days. The company’s network bandwidth is limited to 15 Mbps and cannot exc... |
| 332 | 2537 | A company needs to provide its employees with secure access to confidential and sensitive files. The company wants to ensure that the files can be accessed o... |
| 333 | 2550 | A company’s application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group across ... |
| 334 | 2561 | A company wants to give a customer the ability to use on-premises Microsoft Active Directory to download files that are stored in Amazon S3. The customer’s a... |
| 335 | 2572 | A company is experiencing sudden increases in demand. The company needs to provision large Amazon EC2 instances from an Amazon Machine Image (AMI). The insta... |
| 336 | 2585 | A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances.... |
| 337 | 2594 | A company has deployed a web application on AWS. The company hosts the backend database on Amazon RDS for MySQL with a primary DB instance and five read repl... |
| 338 | 2607 | A solutions architect must create a disaster recovery (DR) plan for a high-volume software as a service (SaaS) platform. All data for the platform is stored ... |
| 339 | 2617 | A company has a custom application with embedded credentials that retrieves information from an Amazon RDS MySQL DB instance. Management says the application... |
| 340 | 2626 | A media company hosts its website on AWS. The website application’s architecture includes a fleet of Amazon EC2 instances behind an Application Load Balancer... |
| 341 | 2637 | A company has an Amazon S3 data lake that is governed by AWS Lake Formation. The company wants to create a visualization in Amazon QuickSight by joining the ... |
| 342 | 2645 | A transaction processing company has weekly scripted batch jobs that run on Amazon EC2 instances. The EC2 instances are in an Auto Scaling group. The number ... |
| 343 | 2656 | A solutions architect is designing a company’s disaster recovery (DR) architecture. The company has a MySQL database that runs on an Amazon EC2 instance in a... |
| 344 | 2663 | A company has a Java application that uses Amazon Simple Queue Service (Amazon SQS) to parse messages. The application cannot parse messages that are larger ... |
| 345 | 2674 | A company wants to restrict access to the content of one of its main web applications and to protect the content by using authorization techniques available ... |
| 346 | 2687 | A company has an aging network-attached storage (NAS) array in its data center. The NAS array presents SMB shares and NFS shares to client workstations. The ... |
| 347 | 2698 | A company has an application that is running on Amazon EC2 instances. A solutions architect has standardized the company on a particular instance family and ... |
| 348 | 2709 | A company collects data from a large number of participants who use wearable devices. The company stores the data in an Amazon DynamoDB table and uses applic... |
| 349 | 2718 | A company stores confidential data in an Amazon Aurora PostgreSQL database in the ap-southeast-3 Region. The database is encrypted with an AWS Key Management... |
| 350 | 2729 | A company uses a 100 GB Amazon RDS for Microsoft SQL Server Single-AZ DB instance in the us-east-1 Region to store customer transactions. The company needs h... |
| 351 | 2743 | A company is moving its data management application to AWS. The company wants to transition to an event-driven architecture. The architecture needs to be mor... |
| 352 | 2756 | A company is designing the network for an online multi-player game. The game uses the UDP networking protocol and will be deployed in eight AWS Regions. The ... |
| 353 | 2767 | A company hosts a three-tier web application on Amazon EC2 instances in a single Availability Zone. The web application uses a self-managed MySQL database th... |
| 354 | 2777 | A company hosts a serverless application on AWS. The application uses Amazon API Gateway, AWS Lambda, and an Amazon RDS for PostgreSQL database. The company ... |
| 355 | 2785 | A company is migrating an old application to AWS. The application runs a batch job every hour and is CPU intensive. The batch job takes 15 minutes on average... |
| 356 | 2793 | A company stores its data objects in Amazon S3 Standard storage. A solutions architect has found that 75% of the data is rarely accessed after 30 days. The c... |
| 357 | 2802 | A gaming company is moving its public scoreboard from a data center to the AWS Cloud. The company uses Amazon EC2 Windows Server instances behind an Applicat... |
| 358 | 2815 | A social media company runs its application on Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is the origin for an Amazon CloudFront... |
| 359 | 2826 | A hospital needs to store patient records in an Amazon S3 bucket. The hospital’s compliance team must ensure that all protected health information (PHI) is e... |
| 360 | 2835 | A company uses Amazon API Gateway to run a private gateway with two REST APIs in the same VPC. The BuyStock RESTful web service calls the CheckFunds RESTful ... |
| 361 | 2843 | A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with sub-millisecond latency and run one-time queries... |
| 362 | 2864 | A company uses a payment processing system that requires messages for a particular payment ID to be received in the same order that they were sent. Otherwise... |
| 363 | 2877 | A company is building a game system that needs to send unique events to separate leaderboard, matchmaking, and authentication services concurrently. The comp... |
| 364 | 2886 | A hospital is designing a new application that gathers symptoms from patients. The hospital has decided to use Amazon Simple Queue Service (Amazon SQS) and A... |
| 365 | 2901 | A company runs a web application that is backed by Amazon RDS. A new database administrator caused data loss by accidentally editing information in a databas... |
| 366 | 2914 |  |
| 367 | 2921 | A company is using Amazon Route 53 latency-based routing to route requests to its UDP-based application for users around the world. The application is hosted... |
| 368 | 2930 | A solutions architect wants all new users to have specific complexity requirements and mandatory rotation periods for IAM user passwords. |
| 369 | 2939 | A company has migrated an application to Amazon EC2 Linux instances. One of these EC2 instances runs several 1-hour tasks on a schedule. These tasks were wri... |
| 370 | 2948 | A company runs a public three-tier web application in a VPC. The application runs on Amazon EC2 instances across multiple Availability Zones. The EC2 instanc... |
| 371 | 2961 | A company needs to create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to host a digital media streaming application. The EKS cluster will use a... |
| 372 | 2972 | A company wants to migrate an Oracle database to AWS. The database consists of a single table that contains millions of geographic information systems (GIS) ... |
| 373 | 2984 | A company has an application that collects data from IoT sensors on automobiles. The data is streamed and stored in Amazon S3 through Amazon Kinesis Data Fir... |
| 374 | 3006 | A company is running several business applications in three separate VPCs within the us-east-1 Region. The applications must be able to communicate between V... |
| 375 | 3019 | An ecommerce company is building a distributed application that involves several serverless functions and AWS services to complete order-processing tasks. Th... |
| 376 | 3028 | A company has launched an Amazon RDS for MySQL DB instance. Most of the connections to the database come from serverless applications. Application traffic to... |
| 377 | 3037 | A company recently deployed a new auditing system to centralize information about operating system versions, patching, and installed software for Amazon EC2 ... |
| 378 | 3045 | A company is developing a real-time multiplayer game that uses UDP for communications between the client and servers in an Auto Scaling group. Spikes in dema... |
| 379 | 3055 | A company hosts a frontend application that uses an Amazon API Gateway API backend that is integrated with AWS Lambda. When the API receives requests, the La... |
| 380 | 3064 | A company is migrating its on-premises workload to the AWS Cloud. The company already uses several Amazon EC2 instances and Amazon RDS DB instances. The comp... |
| 381 | 3075 | A company hosts a three-tier web application that includes a PostgreSQL database. The database stores the metadata from documents. The company searches the m... |
| 382 | 3086 | A company has a three-tier application on AWS that ingests sensor data from its users’ devices. The traffic flows through a Network Load Balancer (NLB), then... |
| 383 | 3095 | A company is planning to migrate a commercial off-the-shelf application from its on-premises data center to AWS. The software has a software licensing model ... |
| 384 | 3107 | A company runs an application on Amazon EC2 Linux instances across multiple Availability Zones. The application needs a storage layer that is highly availabl... |
| 385 | 3118 | A solutions architect is creating a new VPC design. There are two public subnets for the load balancer, two private subnets for web servers, and two private ... |
| 386 | 3125 | An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS ... |
| 387 | 3135 | A new employee has joined a company as a deployment engineer. The deployment engineer will be using AWS CloudFormation templates to create multiple AWS resou... |
| 388 | 3148 | A company is deploying a two-tier web application in a VPC. The web tier is using an Amazon EC2 Auto Scaling group with public subnets that span multiple Ava... |
| 389 | 3161 | A company has a large dataset for its online advertising business stored in an Amazon RDS for MySQL DB instance in a single Availability Zone. The company wa... |
| 390 | 3170 | A company hosts a three-tier ecommerce application on a fleet of Amazon EC2 instances. The instances run in an Auto Scaling group behind an Application Load ... |
| 391 | 3179 | A company needs a backup strategy for its three-tier stateless web application. The web application runs on Amazon EC2 instances in an Auto Scaling group wit... |
| 392 | 3190 | A company wants to deploy a new public web application on AWS. The application includes a web server tier that uses Amazon EC2 instances. The application als... |
| 393 | 3199 | A payment processing company records all voice communication with its customers and stores the audio files in an Amazon S3 bucket. The company needs to captu... |
| 394 | 3209 | A company is running a multi-tier ecommerce web application in the AWS Cloud. The application runs on Amazon EC2 instances with an Amazon RDS for MySQL Multi... |
| 395 | 3222 | An IAM user made several configuration changes to AWS resources in their company's account during a production deployment last week. A solutions architect le... |
| 396 | 3231 | A company has implemented a self-managed DNS service on AWS. The solution consists of the following: |
| 397 | 3246 | An ecommerce company needs to run a scheduled daily job to aggregate and filter sales records for analytics. The company stores the sales records in an Amazo... |
| 398 | 3257 | A company needs to transfer 600 TB of data from its on-premises network-attached storage (NAS) system to the AWS Cloud. The data transfer must be complete wi... |
| 399 | 3266 | A financial company hosts a web application on AWS. The application uses an Amazon API Gateway Regional API endpoint to give users the ability to retrieve cu... |
| 400 | 3277 | A meteorological startup company has a custom web application to sell weather data to its users online. The company uses Amazon DynamoDB to store its data an... |
| 401 | 3287 | A company wants to use the AWS Cloud to make an existing application highly available and resilient. The current version of the application resides in the co... |
| 402 | 3298 | A company needs to ingest and handle large amounts of streaming data that its application generates. The application runs on Amazon EC2 instances and sends d... |
| 403 | 3305 | A developer has an application that uses an AWS Lambda function to upload files to Amazon S3 and needs the required permissions to perform the task. The deve... |
| 404 | 3314 | A company has deployed a serverless application that invokes an AWS Lambda function when new documents are uploaded to an Amazon S3 bucket. The application u... |
| 405 | 3323 | A solutions architect is designing the architecture for a software demonstration environment. The environment will run on Amazon EC2 instances in an Auto Sca... |
| 406 | 3336 | A solutions architect is designing a two-tiered architecture that includes a public subnet and a database subnet. The web servers in the public subnet must b... |
| 407 | 3349 | A company is implementing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre cli... |
| 408 | 3360 | A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data i... |
| 409 | 3375 | A solutions architect must migrate a Windows Internet Information Services (IIS) web application to AWS. The application currently relies on a file share hos... |
| 410 | 3384 | A company is deploying a new application on Amazon EC2 instances. The application writes data to Amazon Elastic Block Store (Amazon EBS) volumes. The company... |
| 411 | 3393 | A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, ... |
| 412 | 3404 | An image-hosting company stores its objects in Amazon S3 buckets. The company wants to avoid accidental exposure of the objects in the S3 buckets to the publ... |
| 413 | 3413 | An ecommerce company is experiencing an increase in user traffic. The company’s store is deployed on Amazon EC2 instances as a two-tier web application consi... |
| 414 | 3422 | A company has a business system that generates hundreds of reports each day. The business system saves the reports to a network share in CSV format. The comp... |
| 415 | 3430 | A company is storing petabytes of data in Amazon S3 Standard. The data is stored in multiple S3 buckets and is accessed with varying frequency. The company d... |
| 416 | 3439 | A rapidly growing global ecommerce company is hosting its web application on AWS. The web application includes static content and dynamic content. The websit... |
| 417 | 3453 | A company uses Amazon EC2 instances and AWS Lambda functions to run its application. The company has VPCs with public subnets and private subnets in its AWS ... |
| 418 | 3462 | A solutions architect needs to allow team members to access Amazon S3 buckets in two different AWS accounts: a development account and a production account. ... |
| 419 | 3475 | A company uses AWS Organizations with all features enabled and runs multiple Amazon EC2 workloads in the ap-southeast-2 Region. The company has a service con... |
| 420 | 3486 | A company wants to use an Amazon RDS for PostgreSQL DB cluster to simplify time-consuming database administrative tasks for production database workloads. Th... |
| 421 | 3495 | A company runs a highly available SFTP service. The SFTP service uses two Amazon EC2 Linux instances that run with elastic IP addresses to accept traffic fro... |
| 422 | 3504 | A company is developing a new machine learning (ML) model solution on AWS. The models are developed as independent microservices that fetch approximately 1 G... |
| 423 | 3519 | Josn format |
| 424 | 3523 | A company is running a custom application on Amazon EC2 On-Demand Instances. The application has frontend nodes that need to run 24 hours a day, 7 days a wee... |
| 425 | 3536 | A company uses high block storage capacity to runs its workloads on premises. The company's daily peak input and output transactions per second are not more ... |
| 426 | 3545 | A company needs to store data from its healthcare application. The application’s data frequently changes. A new regulation requires audit access at all level... |
| 427 | 3554 | A solutions architect is implementing a complex Java application with a MySQL database. The Java application must be deployed on Apache Tomcat and must be hi... |
| 428 | 3563 | A serverless application uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The Lambda function needs permissions to read and write to the DynamoDB ta... |
| 429 | 3572 | Json format |
| 430 | 3576 | A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files must be converted into images and must be made av... |
| 431 | 3586 | A company has developed a new video game as a web application. The application is in a three-tier architecture in a VPC with Amazon RDS for MySQL in the data... |
| 432 | 3595 | An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company will use the models to visualize complex scenarios ... |
| 433 | 3605 | A company is running its production and nonproduction environment workloads in multiple AWS accounts. The accounts are in an organization in AWS Organization... |
| 434 | 3614 | A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and w... |
| 435 | 3622 | A company needs to migrate a MySQL database from its on-premises data center to AWS within 2 weeks. The database is 20 TB in size. The company wants to compl... |
| 436 | 3633 | A company moved its on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. The company successfully launched a new product. The workloa... |
| 437 | 3644 | A company operates an ecommerce website on Amazon EC2 instances behind an Application Load Balancer (ALB) in an Auto Scaling group. The site is experiencing ... |
| 438 | 3654 | A company wants to share accounting data with an external auditor. The data is stored in an Amazon RDS DB instance that resides in a private subnet. The audi... |
| 439 | 3665 | A solutions architect configured a VPC that has a small range of IP addresses. The number of Amazon EC2 instances that are in the VPC is increasing, and ther... |
| 440 | 3675 | A company used an Amazon RDS for MySQL DB instance during application testing. Before terminating the DB instance at the end of the test cycle, a solutions a... |
| 441 | 3690 | A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling g... |
| 442 | 3701 | A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake Formation to manage its data lake. The company's data scie... |
| 443 | 3712 | A company wants to host a scalable web application on AWS. The application will be accessed by users from different geographic regions of the world. Applicat... |
| 444 | 3720 | A company has hired a solutions architect to design a reliable architecture for its application. The application consists of one Amazon RDS DB instance and t... |
| 445 | 3733 | A company is storing 700 terabytes of data on a large network-attached storage (NAS) system in its corporate data center. The company has a hybrid environmen... |
| 446 | 3744 | A company stores data in PDF format in an Amazon S3 bucket. The company must follow a legal requirement to retain all new and existing data in Amazon S3 for ... |
| 447 | 3751 | A company has a stateless web application that runs on AWS Lambda functions that are invoked by Amazon API Gateway. The company wants to deploy the applicati... |
| 448 | 3760 | A company has two VPCs named Management and Production. The Management VPC uses VPNs through a customer gateway to connect to a single device in the data cen... |
| 449 | 3769 | A company runs its application on an Oracle database. The company plans to quickly migrate to AWS because of limited resources for the database, backup admin... |
| 450 | 3777 | A company has a three-tier web application that is in a single server. The company wants to migrate the application to the AWS Cloud. The company also wants ... |
| 451 | 3794 | A company is migrating its applications and databases to the AWS Cloud. The company will use Amazon Elastic Container Service (Amazon ECS), AWS Direct Connec... |
| 452 | 3811 | A company runs a Java-based job on an Amazon EC2 instance. The job runs every hour and takes 10 seconds to run. The job runs on a scheduled interval and cons... |
| 453 | 3823 | A company wants to implement a backup strategy for Amazon EC2 data and multiple Amazon S3 buckets. Because of regulatory requirements, the company must retai... |
| 454 | 3832 | A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers a previous employee did not provide details abo... |
| 455 | 3841 | A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different budgets. The company wants to receive alerts and autom... |
| 456 | 3853 | A company runs applications on Amazon EC2 instances in one AWS Region. The company wants to back up the EC2 instances to a second Region. The company also wa... |
| 457 | 3862 | A company that uses AWS is building an application to transfer data to a product manufacturer. The company has its own identity provider (IdP). The company w... |
| 458 | 3871 | A solutions architect is designing a RESTAPI in Amazon API Gateway for a cash payback service. The application requires 1 GB of memory and 2 GB of storage fo... |
| 459 | 3883 | A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging policy adds department tags to AWS resources when the company creat... |
| 460 | 3895 | A company wants to securely exchange data between its software as a service (SaaS) application Salesforce account and Amazon S3. The company must encrypt the... |
| 461 | 3902 | A company is developing a mobile gaming app in a single AWS Region. The app runs on multiple Amazon EC2 instances in an Auto Scaling group. The company store... |
| 462 | 3909 | A company has an application that processes customer orders. The company hosts the application on an Amazon EC2 instance that saves the orders to an Amazon A... |
| 463 | 3920 | An IoT company is releasing a mattress that has sensors to collect data about a user’s sleep. The sensors will send data to an Amazon S3 bucket. The sensors ... |
| 464 | 3933 | A company hosts an online shopping application that stores all orders in an Amazon RDS for PostgreSQL Single-AZ DB instance. Management wants to eliminate si... |
| 465 | 3942 | A company is developing an application to support customer demands. The company wants to deploy the application on multiple Amazon EC2 Nitro-based instances ... |
| 466 | 3951 | A company designed a stateless two-tier application that uses Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ DB instance. New company ma... |
| 467 | 3958 | A company uses AWS Organizations. A member account has purchased a Compute Savings Plan. Because of changes in the workloads inside the member account, the a... |
| 468 | 3963 | A company is developing a microservices application that will provide a search catalog for customers. The company must use REST APIs to present the frontend ... |
| 469 | 3970 | A company stores raw collected data in an Amazon S3 bucket. The data is used for several types of analytics on behalf of the company's customers. The type of... |
| 470 | 3982 | A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The applications must initiate communications with other external applications... |
| 471 | 3992 | A company is creating an application that runs on containers in a VPC. The application stores and accesses data in an Amazon S3 bucket. During the developmen... |
| 472 | 4002 | A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new messages to be read with as little latency as possib... |
| 473 | 4013 | A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing... |
| 474 | 4021 | A company has multiple VPCs across AWS Regions to support and run workloads that are isolated from workloads in other Regions. Because of a recent applicatio... |
| 475 | 4031 | A company is designing a containerized application that will use Amazon Elastic Container Service (Amazon ECS). The application needs to access a shared file... |
| 476 | 4040 | A company is expecting rapid growth in the near future. A solutions architect needs to configure existing users and grant permissions to new users on AWS. Th... |
| 477 | 4049 | IAM  |
| 478 | 4052 | A law firm needs to share information with the public. The information includes hundreds of files that must be publicly readable. Modifications or deletions ... |
| 479 | 4061 | A company is making a prototype of the infrastructure for its new website by manually provisioning the necessary infrastructure. This infrastructure includes... |
| 480 | 4070 | A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief information security officer has directed that no a... |
| 481 | 4080 | A company hosts a three-tier web application in the AWS Cloud. A Multi-AZAmazon RDS for MySQL server forms the database layer Amazon ElastiCache forms the ca... |
| 482 | 4090 | A company wants to migrate 100 GB of historical data from an on-premises location to an Amazon S3 bucket. The company has a 100 megabits per second (Mbps) in... |
| 483 | 4101 | A company containerized a Windows job that runs on .NET 6 Framework under a Windows container. The company wants to run this job in the AWS Cloud. The job ru... |
| 484 | 4111 | A company wants to move from many standalone AWS accounts to a consolidated, multi-account architecture. The company plans to create many new AWS accounts fo... |
| 485 | 4123 | A company is looking for a solution that can store video archives in AWS from old news footage. The company needs to minimize costs and will rarely need to r... |
| 486 | 4131 | A company is building a three-tier application on AWS. The presentation tier will serve a static website The logic tier is a containerized application. This ... |
| 487 | 4141 | A company seeks a storage solution for its application. The solution must be highly available and scalable. The solution also must function as a file system ... |
| 488 | 4152 | A 4-year-old media company is using the AWS Organizations all features feature set to organize its AWS accounts. According to the company's finance team, the... |
| 489 | 4162 | An ecommerce company runs an application in the AWS Cloud that is integrated with an on-premises warehouse solution. The company uses Amazon Simple Notificat... |
| 490 | 4175 | A gaming company uses Amazon DynamoDB to store user information such as geographic location, player data, and leaderboards. The company needs to configure co... |
| 491 | 4183 | A solutions architect is designing an asynchronous application to process credit card data validation requests for a bank. The application must be secure and... |
| 492 | 4190 | A company has multiple AWS accounts for development work. Some staff consistently use oversized Amazon EC2 instances, which causes the company to exceed the ... |
| 493 | 4202 | A company wants to use artificial intelligence (AI) to determine the quality of its customer service calls. The company currently manages calls in four diffe... |
| 494 | 4223 | D. The request to terminate the EC2 instance does not originate from the CIDR blocks 192.0.2.0/24 or 203.0.113.0/24. |
| 495 | 4227 | A company is conducting an internal audit. The company wants to ensure that the data in an Amazon S3 bucket that is associated with the company’s AWS Lake Fo... |
| 496 | 4237 | A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS ... |
| 497 | 4246 | A company has a service that reads and writes large amounts of data from an Amazon S3 bucket in the same AWS Region. The service is deployed on Amazon EC2 in... |
| 498 | 4254 | A company uses Amazon S3 to store high-resolution pictures in an S3 bucket. To minimize application changes, the company stores the pictures as the latest ve... |
| 499 | 4265 | A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The company's average connection utilization is less than 10%. A solutions ... |
| 500 | 4273 | A company has multiple Windows file servers on premises. The company wants to migrate and consolidate its files into an Amazon FSx for Windows File Server fi... |
| 501 | 4282 | A company wants to ingest customer payment data into the company's data lake in Amazon S3. The company receives payment data every minute on average. The com... |
| 502 | 4301 | A company runs a website that uses a content management system (CMS) on Amazon EC2. The CMS runs on a single EC2 instance and uses an Amazon Aurora MySQL Mul... |
| 503 | 4315 | A company runs an infrastructure monitoring service. The company is building a new feature that will enable the service to monitor data in customer AWS accou... |
| 504 | 4322 | A company needs to connect several VPCs in the us-east-1 Region that span hundreds of AWS accounts. The company's networking team has its own AWS account to ... |
| 505 | 4331 | A company has Amazon EC2 instances that run nightly batch jobs to process data. The EC2 instances run in an Auto Scaling group that uses On-Demand billing. I... |
| 506 | 4342 | A social media company is building a feature for its website. The feature will give users the ability to upload photos. The company expects significant incre... |
| 507 | 4351 | A company has a web application for travel ticketing. The application is based on a database that runs in a single data center in North America. The company ... |
| 508 | 4362 | Topic 1 |
| 509 | 4375 | A company operates a two-tier application for image processing. The application uses two Availability Zones, each with one public subnet and one private subn... |
| 510 | 4385 | A global marketing company has applications that run in the ap-southeast-2 Region and the eu-west-1 Region. Applications that run in a VPC in eu-west-1 need ... |
| 511 | 4395 | A company is developing software that uses a PostgreSQL database schema. The company needs to configure multiple development environments and databases for t... |
| 512 | 4406 | A company uses AWS Organizations with resources tagged by account. The company also uses AWS Backup to back up its AWS infrastructure resources. The company ... |
| 513 | 4416 | A social media company wants to allow its users to upload images in an application that is hosted in the AWS Cloud. The company needs a solution that automat... |
| 514 | 4427 | A company is running a microservices application on Amazon EC2 instances. The company wants to migrate the application to an Amazon Elastic Kubernetes Servic... |
| 515 | 4437 | A company is migrating an on-premises application to AWS. The company wants to use Amazon Redshift as a solution. |
| 516 | 4450 | A company provides an API interface to customers so the customers can retrieve their financial information. Еhe company expects a larger number of requests d... |
| 517 | 4463 | A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3 bucket for archival purposes. |
| 518 | 4473 | An application uses an Amazon RDS MySQL DB instance. The RDS database is becoming low on disk space. A solutions architect wants to increase the disk space w... |
| 519 | 4483 | A consulting company provides professional services to customers worldwide. The company provides solutions and tools for customers to expedite gathering and ... |
| 520 | 4492 | A company is designing a new web application that will run on Amazon EC2 Instances. The application will use Amazon DynamoDB for backend data storage. The ap... |
| 521 | 4505 | A retail company has several businesses. The IT team for each business manages its own AWS account. Each team account is part of an organization in AWS Organ... |
| 522 | 4514 | A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon EKS). The company's workload is not consistent throughout the day. T... |
| 523 | 4529 | A company runs a microservice-based serverless web application. The application must be able to retrieve data from multiple Amazon DynamoDB tables A solution... |
| 524 | 4540 | A company wants to analyze and troubleshoot Access Denied errors and Unauthorized errors that are related to IAM permissions. The company has AWS CloudTrail ... |
| 525 | 4550 | A company wants to add its existing AWS usage cost to its operation cost dashboard. A solutions architect needs to recommend a solution that will give the co... |
| 526 | 4559 | A solutions architect is reviewing the resilience of an application. The solutions architect notices that a database administrator recently failed over the a... |
| 527 | 4568 | A company has a regional subscription-based streaming service that runs in a single AWS Region. The architecture consists of web servers and application serv... |
| 528 | 4580 |  |
| 529 | 4591 | A company is migrating its workloads to AWS. The company has transactional and sensitive data in its databases. The company wants to use AWS Cloud solutions ... |
| 530 | 4605 | A company has an online gaming application that has TCP and UDP multiplayer gaming capabilities. The company uses Amazon Route 53 to point the application tr... |
| 531 | 4614 | A company needs to integrate with a third-party data feed. The data feed sends a webhook to notify an external service when new data is ready for consumption... |
| 532 | 4627 | A company has a workload in an AWS Region. Customers connect to and access the workload by using an Amazon API Gateway REST API. The company uses Amazon Rout... |
| 533 | 4644 | A company stores data in Amazon S3. According to regulations, the data must not contain personally identifiable information (PII). The company recently disco... |
| 534 | 4653 | A company wants to build a logging solution for its multiple AWS accounts. The company currently stores the logs from all accounts in a centralized account. ... |
| 535 | 4661 | A company is building an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for its workloads. All secrets that are stored in Amazon EKS must be encrypte... |
| 536 | 4670 | A company wants to provide data scientists with near real-time read-only access to the company's production Amazon RDS for PostgreSQL database. The database ... |
| 537 | 4679 | A company runs a three-tier web application in the AWS Cloud that operates across three Availability Zones. The application architecture has an Application L... |
| 538 | 4689 | A global video streaming company uses Amazon CloudFront as a content distribution network (CDN). The company wants to roll out content in a phased manner acr... |
| 539 | 4698 | A company wants to use the AWS Cloud to improve its on-premises disaster recovery (DR) configuration. The company's core production business application uses... |
| 540 | 4704 | A company has an on-premises server that uses an Oracle database to process and store customer information. The company wants to use an AWS database service ... |
| 541 | 4713 | A company wants to build a web application on AWS. Client access requests to the website are not predictable and can be idle for a long time. Only customers ... |
| 542 | 4730 | A media company uses an Amazon CloudFront distribution to deliver content over the internet. The company wants only premium customers to have access to the m... |
| 543 | 4739 | A company runs Amazon EC2 instances in multiple AWS accounts that are individually bled. The company recently purchased a Savings Pian. Because of changes in... |
| 544 | 4745 | A retail company uses a regional Amazon API Gateway API for its public REST APIs. The API Gateway endpoint is a custom domain name that points to an Amazon R... |
| 545 | 4754 | A company wants to direct its users to a backup static error page if the company's primary website is unavailable. The primary website's DNS records are host... |
| 546 | 4764 | A recent analysis of a company's IT expenses highlights the need to reduce backup costs. The company's chief information officer wants to simplify the on-pre... |
| 547 | 4774 | A company has data collection sensors at different locations. The data collection sensors stream a high volume of data to the company. The company wants to d... |
| 548 | 4783 | A company has separate AWS accounts for its finance, data analytics, and development departments. Because of costs and security concerns, the company wants t... |
| 549 | 4792 | A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a... |
| 550 | 4801 | A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS Lambda environment variables. A solutions architect needs to ensure that the requ... |
| 551 | 4815 | A company has a financial application that produces reports. The reports average 50 KB in size and are stored in Amazon S3. The reports are frequently access... |
| 552 | 4824 | A company needs to optimize the cost of its Amazon EC2 instances. The company also needs to change the type and family of its EC2 instances every 2-3 months. |
| 553 | 4837 | A solutions architect needs to review a company's Amazon S3 buckets to discover personally identifiable information (PII). The company stores the PII data in... |
| 554 | 4846 | A company's SAP application has a backend SQL Server database in an on-premises environment. The company wants to migrate its on-premises application and dat... |
| 555 | 4855 | A company runs an application in a VPC with public and private subnets. The VPC extends across multiple Availability Zones. The application runs on Amazon EC... |
| 556 | 4866 | A solutions architect is using an AWS CloudFormation template to deploy a three-tier web application. The web application consists of a web tier and an appli... |
| 557 | 4875 | A solutions architect manages an analytics application. The application stores large amounts of semistructured data in an Amazon S3 bucket. The solutions arc... |
| 558 | 4884 | A company has two VPCs that are located in the us-west-2 Region within the same AWS account. The company needs to allow network traffic between these VPCs. A... |
| 559 | 4893 | 559Topic 1 |
| 560 | 4909 | A company's solutions architect is designing an AWS multi-account solution that uses AWS Organizations. The solutions architect has organized the company's a... |
| 561 | 4921 | A company's website handles millions of requests each day, and the number of requests continues to increase. A solutions architect needs to improve the respo... |
| 562 | 4930 | A solutions architect needs to ensure that API calls to Amazon DynamoDB from Amazon EC2 instances in a VPC do not travel across the internet. |
| 563 | 4939 | clusters and workloads from a central location. |
| 564 | 4948 | A company is building an ecommerce application and needs to store sensitive customer information. The company needs to give customers the ability to complete... |
| 565 | 4958 | A company has an on-premises MySQL database that handles transactional data. The company is migrating the database to the AWS Cloud. The migrated database mu... |
| 566 | 4968 | A company runs multiple Amazon EC2 Linux instances in a VPC across two Availability Zones. The instances host applications that use a hierarchical directory ... |
| 567 | 4977 | A solutions architect is designing a workload that will store hourly energy consumption by business tenants in a building. The sensors will feed a database t... |
| 568 | 4988 | A solutions architect is designing the storage architecture for a new web application used for storing and viewing engineering drawings. All application comp... |
| 569 | 5000 | An Amazon EventBridge rule targets a third-party API. The third-party API has not received any incoming traffic. A solutions architect needs to determine whe... |
| 570 | 5007 | A company has a large workload that runs every Friday evening. The workload runs on Amazon EC2 instances that are in two Availability Zones in the us-east-1 ... |
| 571 | 5016 | A company is creating a REST API. The company has strict requirements for the use of TLS. The company requires TLSv1.3 on the API endpoints. The company also... |
| 572 | 5024 | A company runs an application on AWS. The application receives inconsistent amounts of usage. The application uses AWS Direct Connect to connect to an on-pre... |
| 573 | 5035 | A company wants to use an event-driven programming model with AWS Lambda. The company wants to reduce startup latency for Lambda functions that run on Java 1... |
| 574 | 5047 | A financial services company launched a new application that uses an Amazon RDS for MySQL database. The company uses the application to track stock market tr... |
| 575 | 5056 | A company deploys its applications on Amazon Elastic Kubernetes Service (Amazon EKS) behind an Application Load Balancer in an AWS Region. The application ne... |
| 576 | 5065 | A company is building a RESTful serverless web application on AWS by using Amazon API Gateway and AWS Lambda. The users of this web application will be geogr... |
| 577 | 5074 | A company uses an Amazon CloudFront distribution to serve content pages for its website. The company needs to ensure that clients use a TLS certificate when ... |
| 578 | 5085 | A company deployed a serverless application that uses Amazon DynamoDB as a database layer. The application has experienced a large increase in users. The com... |
| 579 | 5094 | A company runs an application that uses Amazon RDS for PostgreSQL. The application receives traffic only on weekdays during business hours. The company wants... |
| 580 | 5103 | A company uses locally attached storage to run a latency-sensitive application on premises. The company is using a lift and shift method to move the applicat... |
| 581 | 5112 | A company runs a stateful production application on Amazon EC2 instances. The application requires at least two EC2 instances to always be running. |
| 582 | 5121 | An ecommerce company uses Amazon Route 53 as its DNS provider. The company hosts its website on premises and in the AWS Cloud. The company's on-premises data... |
| 583 | 5130 | A company has 5 PB of archived data on physical tapes. The company needs to preserve the data on the tapes for another 10 years for compliance purposes. The ... |
| 584 | 5140 | A company is deploying an application that processes large quantities of data in parallel. The company plans to use Amazon EC2 instances for the workload. Th... |
| 585 | 5149 | A solutions architect is designing a disaster recovery (DR) strategy to provide Amazon EC2 capacity in a failover AWS Region. Business requirements state tha... |
| 586 | 5158 | A company has five organizational units (OUs) as part of its organization in AWS Organizations. Each OU correlates to the five businesses that the company ow... |
| 587 | 5166 | A company is designing a solution to capture customer activity in different web applications to process analytics and make predictions. Customer activity in ... |
| 588 | 5177 | An ecommerce company wants a disaster recovery solution for its Amazon RDS DB instances that run Microsoft SQL Server Enterprise Edition. The company's curre... |
| 589 | 5186 | A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer that has sticky sessions enabled. The w... |
| 590 | 5195 | A company migrated a MySQL database from the company's on-premises data center to an Amazon RDS for MySQL DB instance. The company sized the RDS DB instance ... |
| 591 | 5206 | A company runs a container application by using Amazon Elastic Kubernetes Service (Amazon EKS). The application includes microservices that manage customers ... |
| 592 | 5216 | A company uses AWS and sells access to copyrighted images. The company’s global customer base needs to be able to access these images quickly. The company mu... |
| 593 | 5226 | A solutions architect is designing a highly available Amazon ElastiCache for Redis based solution. The solutions architect needs to ensure that failures do n... |
| 594 | 5236 | A company plans to migrate to AWS and use Amazon EC2 On-Demand Instances for its application. During the migration testing phase, a technical team observes t... |
| 595 | 5245 | A company's applications run on Amazon EC2 instances in Auto Scaling groups. The company notices that its applications experience sudden traffic increases on... |
| 596 | 5254 | An ecommerce application uses a PostgreSQL database that runs on an Amazon EC2 instance. During a monthly sales event, database usage increases and causes da... |
| 597 | 5263 | A company hosts an internal serverless application on AWS by using Amazon API Gateway and AWS Lambda. The company’s employees report issues with high latency... |
| 598 | 5272 | A research company uses on-premises devices to generate data for analysis. The company wants to use the AWS Cloud to analyze the data. The devices generate .... |
| 599 | 5289 | A company wants to use Amazon Elastic Container Service (Amazon ECS) clusters and Amazon RDS DB instances to build and run a payment processing application. ... |
| 600 | 5298 | A company is planning to migrate a TCP-based application into the company's VPC. The application is publicly accessible on a nonstandard TCP port through a h... |
| 601 | 5308 | A company runs its critical database on an Amazon RDS for PostgreSQL DB instance. The company wants to migrate to Amazon Aurora PostgreSQL with minimal downt... |
| 602 | 5318 | A company's infrastructure consists of hundreds of Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) storage. A solutions architect must ... |
| 603 | 5329 | A company recently migrated to the AWS Cloud. The company wants a serverless solution for large-scale parallel on-demand processing of a semistructured datas... |
| 604 | 5338 | A company will migrate 10 PB of data to Amazon S3 in 6 weeks. The current data center has a 500 Mbps uplink to the internet. Other on-premises applications s... |
| 605 | 5347 | A company has several on-premises Internet Small Computer Systems Interface (ISCSI) network storage servers. The company wants to reduce the number of these ... |
| 606 | 5356 | A solutions architect is designing an application that will allow business users to upload objects to Amazon S3. The solution needs to maximize object durabi... |
| 607 | 5365 | A company has migrated a two-tier application from its on-premises data center to the AWS Cloud. The data tier is a Multi-AZ deployment of Amazon RDS for Ora... |
| 608 | 5376 | A company has an application that serves clients that are deployed in more than 20.000 retail storefront locations around the world. The application consists... |
| 609 | 5384 | A company is building a data analysis platform on AWS by using AWS Lake Formation. The platform will ingest data from different sources such as Amazon S3 and... |
| 610 | 5393 | A company deploys Amazon EC2 instances that run in a VPC. The EC2 instances load source data into Amazon S3 buckets so that the data can be processed in the ... |
| 611 | 5403 | A company has an application with a REST-based interface that allows data to be received in near-real time from a third-party vendor. Once received, the appl... |
| 612 | 5415 | A company has an application that runs on Amazon EC2 instances in a private subnet. The application needs to process sensitive information from an Amazon S3 ... |
| 613 | 5424 | A company uses Amazon Elastic Kubernetes Service (Amazon EKS) to run a container application. The EKS cluster stores sensitive information in the Kubernetes ... |
| 614 | 5433 | A company is designing a new multi-tier web application that consists of the following components: |
| 615 | 5448 | A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service (Amazon EKS). The application has a microservices architecture. T... |
| 616 | 5457 | A company has deployed its newest product on AWS. The product runs in an Auto Scaling group behind a Network Load Balancer. The company stores the product’s ... |
| 617 | 5472 | A company wants to migrate an on-premises data center to AWS. The data center hosts a storage server that stores data in an NFS-based file system. The storag... |
| 618 | 5486 | A company wants to use Amazon FSx for Windows File Server for its Amazon EC2 instances that have an SMB file share mounted as a volume in the us-east-1 Regio... |
| 619 | 5498 | A solutions architect is designing a security solution for a company that wants to provide developers with individual AWS accounts through AWS Organizations,... |
| 620 | 5508 | A company is planning to deploy a business-critical application in the AWS Cloud. The application requires durable storage with consistent, low-latency perfo... |
| 621 | 5518 | An online photo-sharing company stores its photos in an Amazon S3 bucket that exists in the us-west-1 Region. The company needs to store a copy of all new ph... |
| 622 | 5527 | A company is creating a new web application for its subscribers. The application will consist of a static single page and a persistent database layer. The ap... |
| 623 | 5540 | A company uses Amazon API Gateway to manage its REST APIs that third-party service providers access. The company must protect the REST APIs from SQL injectio... |
| 624 | 5549 | A company wants to provide users with access to AWS resources. The company has 1,500 users and manages their access to on-premises resources through Active D... |
| 625 | 5558 | A company is hosting a website behind multiple Application Load Balancers. The company has different distribution rights for its content around the world. A ... |
| 626 | 5568 | A company stores its data on premises. The amount of data is growing beyond the company's available capacity. |
| 627 | 5580 | A company wants to migrate two DNS servers to AWS. The servers host a total of approximately 200 zones and receive 1 million requests each day on average. Th... |
| 628 | 5590 | A global company runs its applications in multiple AWS accounts in AWS Organizations. The company's applications use multipart uploads to upload data to mult... |
| 629 | 5600 | A company runs a production database on Amazon RDS for MySQL. The company wants to upgrade the database version for security compliance reasons. Because the ... |
| 630 | 5607 | A solutions architect is creating a data processing job that runs once daily and can take up to 2 hours to complete. If the job is interrupted, it has to res... |
| 631 | 5616 | A social media company wants to store its database of user profiles, relationships, and interactions in the AWS Cloud. The company needs an application to mo... |
| 632 | 5628 | A company is creating a new application that will store a large amount of data. The data will be analyzed hourly and will be modified by several Amazon EC2 L... |
| 633 | 5637 | A company manages an application that stores data on an Amazon RDS for PostgreSQL Multi-AZ DB instance. Increases in traffic are causing performance problems... |
| 634 | 5646 | A company collects 10 GB of telemetry data daily from various machines. The company stores the data in an Amazon S3 bucket in a source data account. |
| 635 | 5657 | A company uses Amazon FSx for NetApp ONTAP in its primary AWS Region for CIFS and NFS file shares. Applications that run on Amazon EC2 instances access the f... |
| 636 | 5666 | A development team is creating an event-based application that uses AWS Lambda functions. Events will be generated when files are added to an Amazon S3 bucke... |
| 637 | 5674 | A solutions architect is designing a new service behind Amazon API Gateway. The request patterns for the service will be unpredictable and can change suddenl... |
| 638 | 5687 | A company collects and shares research data with the company's employees all over the world. The company wants to collect and store the data in an Amazon S3 ... |
| 639 | 5696 | A company is building a new furniture inventory application. The company has deployed the application on a fleet ofAmazon EC2 instances across multiple Avail... |
| 640 | 5707 | A company has an application workflow that uses an AWS Lambda function to download and decrypt files from Amazon S3. These files are encrypted using AWS Key ... |
| 641 | 5717 | A company wants to monitor its AWS costs for financial review. The cloud operations team is designing an architecture in the AWS Organizations management acc... |
| 642 | 5726 | A company wants to run a gaming application on Amazon EC2 instances that are part of an Auto Scaling group in the AWS Cloud. The application will transmit da... |
| 643 | 5735 | A company runs several websites on AWS for its different brands. Each website generates tens of gigabytes of web traffic logs each day. A solutions architect... |
| 644 | 5744 | An international company has a subdomain for each country that the company operates in. The subdomains are formatted as example.com, country1.example.com, an... |
| 645 | 5757 | A company is required to use cryptographic keys in its on-premises key manager. The key manager is outside of the AWS Cloud because of regulatory and complia... |
| 646 | 5765 | solutions architect needs to host a high performance computing (HPC) workload in the AWS Cloud. The workload will run on hundreds of Amazon EC2 instances and... |
| 647 | 5774 | A gaming company is building an application with Voice over IP capabilities. The application will serve traffic to users across the world. The application ne... |
| 648 | 5783 | A weather forecasting company needs to process hundreds of gigabytes of data with sub-millisecond latency. The company has a high performance computing (HPC)... |
| 649 | 5794 | An ecommerce company runs a PostgreSQL database on premises. The database stores data by using high IOPS Amazon Elastic Block Store (Amazon EBS) block storag... |
| 650 | 5803 | A company wants to migrate its on-premises Microsoft SQL Server Enterprise edition database to AWS. The company's online application uses the database to pro... |
| 651 | 5811 | A company stores a large volume of image files in an Amazon S3 bucket. The images need to be readily available for the first 180 days. The images are infrequ... |
| 652 | 5824 | A company has a large data workload that runs for 6 hours each day. The company cannot lose any data while the process is running. A solutions |
| 653 | 5833 | A company maintains an Amazon RDS database that maps users to cost centers. The company has accounts in an organization in AWS |
| 654 | 5843 | A company recently migrated its web application to the AWS Cloud. The company uses an Amazon EC2 instance to run multiple processes to host |
| 655 | 5854 | A company runs a web application on Amazon EC2 instances in an Auto Scaling group that has a target group. The company designed the |
| 656 | 5865 | A company runs a website that stores images of historical events. Website users need the ability to search and view images based on the year |
| 657 | 5875 | A company has multiple AWS accounts in an organization in AWS Organizations that different business units use. The company has multiple |
| 658 | 5886 | A company uses an on-premises network-attached storage (NAS) system to provide le shares to its high performance computing (HPC) |
| 659 | 5896 | A company is relocating its data center and wants to securely transfer 50 TB of data to AWS within 2 weeks. The existing data center has a Site-to- |
| 660 | 5905 | A company hosts an application on Amazon EC2 On-Demand Instances in an Auto Scaling group. Application peak hours occur at the same time |
| 661 | 5915 | A company runs applications on AWS that connect to the company's Amazon RDS database. The applications scale on weekends and at peak |
| 662 | 5924 | A company uses AWS Cost Explorer to monitor its AWS costs. The company notices that Amazon Elastic Block Store (Amazon EBS) storage and |
| 663 | 5934 | A company is developing a new application on AWS. The application consists of an Amazon Elastic Container Service (Amazon ECS) cluster, an |
| 664 | 5945 | A company has a web application that runs on premises. The application experiences latency issues during peak hours. The latency issues occur |
| 665 | 5956 | A company has customers located across the world. The company wants to use automation to secure its systems and network infrastructure. The |
| 666 | 5965 | A startup company is hosting a website for its customers on an Amazon EC2 instance. The website consists of a stateless Python application and |
| 667 | 5975 | A company is moving its data and applications to AWS during a multiyear migration project. The company wants to securely access data on |
| 668 | 5985 | A company created a new organization in AWS Organizations. The organization has multiple accounts for the company's development teams. The |
| 669 | 5997 | A company runs its databases on Amazon RDS for PostgreSQL. The company wants a secure solution to manage the master user password by |
| 670 | 6006 | A company performs tests on an application that uses an Amazon DynamoDB table. The tests run for 4 hours once a week. The company knows |
| 671 | 6016 | A company runs its applications on Amazon EC2 instances. The company performs periodic nancial assessments of its AWS costs. The |
| 672 | 6027 | A marketing company receives a large amount of new clickstream data in Amazon S3 from a marketing campaign. The company needs to analyze |
| 673 | 6036 | A company runs an SMB le server in its data center. The le server stores large les that the company frequently accesses for up to 7 days after |
| 674 | 6045 | A company runs a web application on Amazon EC2 instances in an Auto Scaling group. The application uses a database that runs on an Amazon |
| 675 | 6055 | A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to run an application. The company creates one |
| 676 | 6065 | A company's application uses Network Load Balancers, Auto Scaling groups, Amazon EC2 instances, and databases that are deployed in an |
| 677 | 6075 | A company is developing an application that will run on a production Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster |
| 678 | 6086 | A company stores sensitive data in Amazon S3. A solutions architect needs to create an encryption solution. The company needs to fully control |
| 679 | 6095 | A company wants to back up its on-premises virtual machines (VMs) to AWS. The company's backup solution exports on-premises backups to an |
| 680 | 6104 | A solutions architect needs to copy les from an Amazon S3 bucket to an Amazon Elastic File System (Amazon EFS) le system and another S3 |
| 681 | 6114 | A company uses Amazon EC2 instances and stores data on Amazon Elastic Block Store (Amazon EBS) volumes. The company must ensure that |
| 682 | 6123 | A company needs a solution to enforce data encryption at rest on Amazon EC2 instances. The solution must automatically identify noncompliant |
| 683 | 6132 | A company is migrating its multi-tier on-premises application to AWS. The application consists of a single-node MySQL database and a multi-node |
| 684 | 6142 | A company wants to migrate its web applications from on premises to AWS. The company is located close to the eu-central-1 Region. Because of |
