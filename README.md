# NgTwitter

This project is a test project from the company which I had an interview with. It's also a project of learning Angular framework for me, due to I had no Angular2, 3, 4, 5, 6 experience before. I take this project as a practice to figure out how things work in Angular such as data structure, writing components, uni testing... etc. I believe it can also be taken as an inspiration of implementing Observable Data Service.

###### Main Idea: Decouple
In Angular, there are mainly three ways to share states between different components. 

1. Passing down and up states from parents by using `@Input()` and `@Output()` decorators.
2. Passing down states from parents by useing `@ViewChild()` decorator.

But those caseses mainly mean states are handled by the parent components. Personally, I prefer decouple the relationship betweens components and services exactly like what we do in React and Redux. So...

3. Observable Data Service. 

In simple app, the TweetService handles the states and operations what are relatived to tweets. Every component only subscribes the needed state from TweetService. If the state of TweetService was changed, components will receive the newist states. So there is no specific relations between components, they don't have to know each others.

## Intalling the project
Run `git clone git@github.com:ReacherYin/ngTwitter.git` to download the repository, and go to the root directory, run `npm start` to start the app on your local machine.

You are gonna see the app on your browser at http://localhost:4200/
![image](https://github.com/ReacherYin/ngTwitter/blob/master/FireShot%20Capture%20006%20-%20NgTwitter%20-%20http___localhost_4200_hashtag_search.jpg)

## About the Project
Use [Allow-Control-Allow-Origin: * ](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-ntp-icon) chrome plugin to allow CORS, then search by keyword, you will get the results.
![image](https://github.com/ReacherYin/ngTwitter/blob/master/FireShot%20Capture%20005%20-%20NgTwitter%20-%20http___localhost_4200_hashtag_search.jpg)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

![image](https://github.com/ReacherYin/ngTwitter/blob/master/jasmine.png)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
 
