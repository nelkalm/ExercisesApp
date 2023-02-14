# ExercisesApp
A full-stack MERN exercise tracker app built using React.

<br/>
<p align="center">
  <h3 align="center">YouTrain App</h3>

  <p align="center">
    Track Your Performance
    <br/>
    <br/>
  </p>
</p>



## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](https://github.com/nelkalm/ExercisesApp/blob/main/youtrain-photos-gif/youtrain-overview.png?raw=true)

YouTrain is a full-stack MERN App, a Single Page Application that tracks exercises completed by the user. User can create their exercise data by inputting using a form, with data fields including the name of the exercise performed, the number of reps, the amount of weight, the weight unit, and the date the exercise was performed. The exercise data is then populated onto a table on the Home page. User can then click on the pencil icon to edit the exercise, or click on the trash icon to delete the exercise.

## Built With

The frontend was built with Node and React, and global design features. The backend was built with MongoDB persistence, Mongoose, Express, REST, and Node.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/nelkalm/ExercisesApp.git
```

2. Install NPM packages in the frontend folder

```sh
cd frontend
npm install
```

3. Install NPM packages in the backend folder

```sh
cd backend
npm install
```

4. Create a .env file in the frontend folder, and specify the port number PORT=8000.

5. Create a .env file in the backend folder, specify the port number PORT=3000, as well as the Mongo Connection String.

6. Start the project in the backend folder with NPM

```sh
npm start
```

## Usage

Create an exercise by clicking on CREATE on the nav link.

![Create an exercise](https://github.com/nelkalm/ExercisesApp/blob/main/youtrain-photos-gif/create-exercise_AdobeExpress.gif?raw=true)

Edit an exercise by clicking on the pencil icon in the exercises table.

<img src="https://github.com/nelkalm/ExercisesApp/blob/main/youtrain-photos-gif/edit-exercise_AdobeExpress.gif?raw=true" width="400"/>

Delete an exercise by clicking on the trash icon in the exercises table.

<img src="https://github.com/nelkalm/ExercisesApp/blob/main/youtrain-photos-gif/delete-exercise_AdobeExpress.gif?raw=true" width="400"/>

## License

Distributed under the MIT License. See [LICENSE](https://github.com/nelkalmlu/ExerciseApp/blob/main/LICENSE.md) for more information.

## Author

* **Nelson Lu** - *OSU Computer Science Student* - [Nelson Lu](https://github.com/nelkalm) - *Created the YouTrain App*
