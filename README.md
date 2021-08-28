# The Sorting Algorithm Visualizer

<!-- What was your motivation, why did you build this project, what problem does it solve, what did you learn, what makes this stand out/features section -->

Welcome to the Sorting Algorithm Visualizer! This React.js web application allows you to visualize the steps of some of the most famous sorts, including bubble sort, selection sort, insertion sort, shell sort, merge sort, and quick sort. You can easily see, step by step, how these algorithms sort arrays of numbers ranging from 1 to 100. You can also import your own data or customize random data to see how these algorithms work for different data sets.

Visit the Sorting Algorithm Visualizer at [https://sorting-algo-viz.netlify.app/](https://sorting-algo-viz.netlify.app/)

## Features

* Input your own comma-separated list of numbers to be sorted
* Or create randomized data based upon your parameters (array size, minimum value, maximum value)
* Play sorts at speeds ranging from 30 milliseconds to 1 second
* Further adjust speed with speed adjustment dropdown under the scroll bar
* Quickly scroll through sort by using the bottom scroll bar
* Or move frame-by-frame by clicking the forwards and backwards buttons under the scroll bar
* Use keyboard controls to navigate through the sorting (space to pause, left and right arrows to move frame-by-frame)

## Technologies
* This project is primarily built using [React.js](https://reactjs.org/), a JavaScript library for building user interfaces. 
  * The entire project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  *  This app uses exclusively functional components and makes extensive use of React hooks such as useEffect, useState, and useRef.
* This site was styled using vanilla CSS and [Material-UI](https://material-ui.com/), which provided pre-built components for layout, inputs, and navigation.
* Client-side routing for this application used [React Router](https://reactrouter.com/)'s react-router-dom library.
* Charts, used on the home page to show the Running time for each algorithm, were made with [Chart.js](https://www.chartjs.org/) and [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2), a React wrapper for Chart.js.
* This site is deployed on [netlify](https://netlify.app/) using Contiuous Deployment upon pushes to [this project's github page](https://github.com/jasongir/sorting-algorithm-visualizer).
