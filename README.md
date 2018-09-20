# NgTwitter

This project is a test from the company which I had an interview with. but it's also a project of learning Angular framework for me, due to I had no Angular2, 3, 4, 5, 6 experience before. I take this project as a practice to figure out how things work in Angular such as data structure, writing components, uni testing... etc. I believe it can also be taken as an inspiration of implementing Observable Data Service.

###### Main Idea: Decoupling and single source of truth
In Angular, there are mainly three ways to share states between different components. 

1. Passing down and pushing up states between parent components and child components by using `@Input()` and `@Output()` decorators.
2. Passing down states from parent components by useing `@ViewChild()` decorator.

But those caseses mainly mean states are handled by the components. Personally, I prefer to decouple the relationship betweens components and services similar to what we do in React and Redux. So...

3. Observable Data Service. 

In this simple app, the TweetService handles the states and methods what are relatived to tweets(fetched from api). Every component only subscribes the needed states from TweetService by `Observable.subscribe()`. If the state of TweetService was changed, components will receive the newest states. So there is no specific relationship between components, they don't have to know each other even though Paginator component and Table component are actually inside the SearchForm component.


![image](https://github.com/ReacherYin/ngTwitter/blob/master/app_structure.png)

## Installing the project
Run `git clone git@github.com:ReacherYin/ngTwitter.git` to download the repository, and go to the root directory, run `npm start` to start the app on your local machine.

You are gonna see the app on your browser at http://localhost:4200/

![image](https://github.com/ReacherYin/ngTwitter/blob/master/FireShot%20Capture%20006%20-%20NgTwitter%20-%20http___localhost_4200_hashtag_search.jpg)

## About the Project
Use [Allow-Control-Allow-Origin: * ](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-ntp-icon) chrome plugin to allow CORS, then search by keywords, you will get the results.
![image](https://github.com/ReacherYin/ngTwitter/blob/master/FireShot%20Capture%20005%20-%20NgTwitter%20-%20http___localhost_4200_hashtag_search.jpg)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io/index.html).

***As you see, Jasmine put a chrome browser inside Angular by defualt, if you are going to run tests in Docker or continuous integration servers, it will cause some problems. So you have to run the tests with headless browser by `ng test --browsers ChromeHeadless` or PhantomJS.***

![image](https://github.com/ReacherYin/ngTwitter/blob/master/jasmine.png)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
 
