# PokéCupid #

**Created by:**
- [Moe Hussein](https://github.com/okaymoe) 
- [Niels Griedel](https://github.com/jngriedel) 
- [Connor Burns](https://github.com/ConnorBurns1993) 
- [Matilda Zhang](https://github.com/matilda-142857)

**Created using:** 
- ***Python***
- ***Flask***
- ***Javascript***
- ***React***
- ***Redux***
- ***PostgreSQL***
- ***CSS***

Welcome to PokéCupid! A principal clone of okcupid. With PokéCupid, users are able to create an account and connect to other users for multitudes of purposes, some including finding a significant other, a 'training partners', or simply friends!

**Explore PokéCupid!:** https://pokecupid-aa.herokuapp.com/

## **Home** ##
Upon landing on the home page, you may sign up (or log in if you already have an account). If you wish to not create an account for convenience or confidential reasons, you may click the "Log In as a Guest" button on the Log In modal, which can be previewed below.

![home](https://user-images.githubusercontent.com/97005259/181859725-571bdeec-340f-42cd-a768-614548554f01.PNG)

## **Log In & Demo User** ##
![login](https://user-images.githubusercontent.com/97005259/181859764-7a78dd8a-865d-4491-885b-76ab1ab16444.PNG)


## **Sign Up & Questionnaire** ##
If you click the "Join PokéCupid" Button on the Home Page, you are taken to a form where you will be prompt to enter your account details. You may also choose a starter Pokémon, select any of the original 150 Pokémon! You will also be asked to fill out a questionnaire, which is a 20-question survey to assess your match type!
![signup](https://user-images.githubusercontent.com/97005259/182003794-57233731-1426-4179-9242-bbf5fa112786.PNG)
![questionnaire](https://user-images.githubusercontent.com/97005259/181859776-0ac8b82e-1a8f-49ec-a955-571f6f18255a.PNG)


## **Discover** ##
Upon logging in or completing your sign up, you will be taken to the Discover page. Here, you can view all the other users and choose to "Like" or "Pass" them. If you like the user, and the user chooses to like you back, this user will be pushed to the "Matches" (explained below) page which shows you all of the people you matched with. If you passed on the person, you will not be shown this person again. 
![d](https://user-images.githubusercontent.com/97005259/182004140-d7ee72d9-5b29-4d81-a578-daa826d6fa3d.PNG)


## **My Profile** ##
While you're logged in, you will see a "My Profile" button on the top of the website. Click this to take you to your profile, where you may view and edit your information, and even change your Pokémon. You are also given the choice to upload a picture of yourself, which you can edit later if you wish. If you want to edit any details, you can click the edit buttons respectively to do so.
![pokecupid-aa herokuapp com_profile (1)](https://user-images.githubusercontent.com/97005259/181860864-49fc4eff-60ad-427b-8ba3-40b68878953e.png)

## **Matches & Messaging** ##
If you've matched with anyone, you can click the "Matches" tab in the navigation bar. This will take you to your matches, where you will see a list of users you've liked that have liked you back. From here, you can click on a user and message them! Clicking on the user's profile picture will take you to their profile. Oops...did you message something you wish you hadn't? Not to worry! Simply click the respective buttons next to your message to edit or delete. We have you covered!
![AAAA](https://user-images.githubusercontent.com/97005259/181860457-2905a418-b3c4-4dc3-8cf4-e49f44d4ca83.PNG)


## **Code Snippet** ##
```
return (
    showQuestionnaire && (
      <div className="questions-form">
        <>
          {}
          <div className="question-section">
            <div className="question-number">
              <span>Question {currentQuestion} </span>/ 20
            </div>
            <div className="progressbar">
              <span></span>
            </div>
            <div className="question-title-a">
              {questionObj[currentQuestion].Question}
            </div>
          </div>
          <div className="answer-section">
            {Object.values(questionObj[currentQuestion].Options).map(
              (answerOptions, i) => (
                <button key={i} type="button" id="question-button" value={i} onClick={handleAnswer}>
                  {answerOptions}
                </button>
              )
            )}
          </div>
          <div>
            Select One
          </div>
        </>
      </div>
    )
  );
  ```



# Flask React Project

This is the starter for the Flask React project.

## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Dev Containers (OPTIONAL for M1 Users)
The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed. 
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer. 
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code. 
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner. 
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

## Deploy to Heroku
This repo comes configured with Github Actions. When you push to your main branch, Github will automatically pull your code, package and push it to Heroku, and then release the new image and run db migrations. 

1. Write your Dockerfile. In order for the Github action to work effectively, it must have a configured Dockerfile. Follow the comments found in this [Dockerfile](./Dockerfile) to write your own!

2. Create a new project on Heroku.

3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".

4. Configure production environment variables. In your Heroku app settings -> config variables you should have two environment variables set:

   |    Key          |    Value    |
   | -------------   | ----------- |
   | `DATABASE_URL`  | Autogenerated when adding postgres to Heroku app |
   | `SECRET_KEY`    | Random string full of entropy |

5. Generate a Heroku OAuth token for your Github Action. To do so, log in to Heroku via your command line with `heroku login`. Once you are logged in, run `heroku authorizations:create`. Copy the GUID value for the Token key.

6. In your Github Actions Secrets you should have two environment variables set. You can set these variables via your Github repository settings -> secrets -> actions. Click "New respository secret" to create
each of the following variables:

   |    Key            |    Value    |
   | -------------     | ----------- |
   | `HEROKU_API_KEY`  | Heroku Oauth Token (from step 6)|
   | `HEROKU_APP_NAME` | Heroku app name    |

7. Push to your `main` branch! This will trigger the Github Action to build your Docker image and deploy your application to the Heroku container registry. Please note that the Github Action will automatically upgrade your production database with `flask db upgrade`. However, it will *not* automatically seed your database. You must manually seed your production database if/when you so choose (see step 8).

8. *Attention!* Please run this command *only if you wish to seed your production database*: `heroku run -a HEROKU_APP_NAME flask seed all`

## Helpful commands
|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |
| `heroku login -i`      | Authenticate your heroku-cli using the command line. Drop the -i to authenticate via the browser |
| `heroku authorizations:create` | Once authenticated, use this to generate an Oauth token |
| `heroku run -a <app name>` | Run a command from within the deployed container on Heroku |
