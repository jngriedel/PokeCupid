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

![unknown](https://user-images.githubusercontent.com/97005259/182004195-13bd95d0-9761-46df-b5c3-988d2d895038.png)

## **Log In & Demo User** ##

![login](https://user-images.githubusercontent.com/97005259/181859764-7a78dd8a-865d-4491-885b-76ab1ab16444.PNG)


## **Sign Up & Questionnaire** ##
If you click the "Join PokéCupid" Button on the Home Page, you are taken to a form where you will be prompt to enter your account details. You may also choose a starter Pokémon, select any of the original 150 Pokémon! You will also be asked to fill out a questionnaire, which is a 20-question survey to assess your match type!
Upon completing the questionnaire, you will be shown your profile information one last time before submission.

![signup]![image](https://user-images.githubusercontent.com/99449721/182056404-cad9fe77-12fa-454e-8230-7fee10042f08.png)

![questionnaire](https://user-images.githubusercontent.com/97005259/181859776-0ac8b82e-1a8f-49ec-a955-571f6f18255a.PNG)


## **Discover** ##
Upon logging in or completing your sign up, you will be taken to the Discover page. Here, you can view all the other users and choose to "Like" or "Pass" them. If you like the user, and the user chooses to like you back, this user will be pushed to the "Matches" (explained below) page which shows you all of the people you matched with. If you passed on the person, you will not be shown this person again. 

![d](https://user-images.githubusercontent.com/97005259/182004140-d7ee72d9-5b29-4d81-a578-daa826d6fa3d.PNG)


## **My Profile** ##
While you're logged in, you will see a "My Profile" button on the top of the website. Click this to take you to your profile, where you may view and edit your information, and even change your Pokémon. You are also given the choice to upload a picture of yourself, which you can edit later if you wish. If you want to edit any details, you can click the edit buttons respectively to do so.

![pokecupid-aa herokuapp com_profile (1)]![image](https://user-images.githubusercontent.com/99449721/182057528-691aff4b-ffff-488b-ab17-043adb084383.png)
![image](https://user-images.githubusercontent.com/99449721/182057784-5f340e0e-0f5b-4d3f-a9fe-7dec02d25f49.png)

## **Matches & Messaging** ##
If you've matched with anyone, you can click the "Matches" tab in the navigation bar. This will take you to your matches, where you will see a list of users you've liked that have liked you back. From here, you can click on a user and message them! Clicking on the user's profile picture will take you to their profile. Oops...did you message something you wish you hadn't? Not to worry! Simply click the respective buttons next to your message to edit or delete. We have you covered!

![image](https://user-images.githubusercontent.com/99449721/182057935-a5dfbab6-7076-4c80-8459-dd87522ab5cd.png)


## **Code Snippet** ##
Using websockets, we were able to create a live chat experience where users will instantly see the messages of other users without refreshing the page. 
```
useEffect(() => {
  //automatically scroll to bottom
    if (focusRef) {
      focusRef.current.addEventListener("DOMNodeInserted", (e) => {
        const { currentTarget: target } = e;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(messagesActions.getMatchMessages(matchId))
      .then((res)=>{
        setTimeout(() => {
            setMessagesChanged(true)
          }, 300)
    });
    }

    socket = io();


    //receive
    socket.on("chat", (chat) => {
      dispatch(messagesActions.addEditMessage(chat));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, matchId, setMessagesChanged, user]);
  ```



# Set up Locally


## Getting started
1. Clone this repository 

   ```bash
   git clone https://github.com/jngriedel/PokeCupid.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
   
4. Setup your PostgreSQL user, password and database and make sure it matches the **.env** file

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

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2.
***

### Dev Containers (OPTIONAL for M1 Users)
The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed. 
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer. 
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/jngriedel/PokeCupid.git
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






