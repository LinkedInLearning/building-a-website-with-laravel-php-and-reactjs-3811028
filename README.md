# Building a Website with Laravel, PHP, and React.js
This is the repository for the LinkedIn Learning course `Building a Website with Laravel, PHP, and React.js`. The full course is available from [LinkedIn Learning][lil-course-url].

![lil-thumbnail-url]

Laravel is the most popular PHP framework, which should come as no surprise. It boasts an active user community and impressive ecosystem, making it the choice of many developers around the world. React, on the other hand, is a widely used front-end framework that’s maintained by Meta and a community of developers and companies. In this course, instructor Zuzana Kunckova shows you how to start leveraging these two technologies in tandem with Inertia to get better results and boost your career.</p><p>Learn how to build a blog by creating an API in Laravel, then building out a front end with React, before connecting the two frameworks to enable the flow of data between the front end and the back end. Zuzana demonstrates how to send data with Inertia, which offers many different server-side patterns and removes some of the complexity that comes with calling an API from React. Along the way, be sure to test out your new skills in the exercise challenges at the end of each section.

_See the readme file in the main branch for updated instructions and information._
## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
	- Laravel
	- Laravel Valet
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. For Chapter 3 exercise files, please use the repository: [building-a-website-with-laravel-php-and-reactjs-inertia][second-repo-url]


[0]: # (Replace these placeholder URLs with actual course URLs)
[second-repo-url]: https://github.com/LinkedInLearning/building-a-website-with-laravel-php-and-reactjs-inertia-3811028
[lil-course-url]: https://www.linkedin.com/learning/building-a-website-with-laravel-react-js-and-inertia/
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D560DAQH0U9RhFcnRJA/learning-public-crop_675_1200/0/1711144891773?e=2147483647&v=beta&t=C0x1I6T7vWPE80Ue_9sDnhLsGID_yzct7OhHEm3NUoo

