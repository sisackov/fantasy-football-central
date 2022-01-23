# fantasy-football-central

## System Design

-   The **mockup outline** can be found [here](./docs/page-outline.pdf).

*   ### **Pages**

    | Page Component | Page Route         | Component Hierarchy Tree |
    | -------------- | ------------------ | ------------------------ |
    | LandingPage    | /                  | [PlayerTables]()         |
    | LoginPage      | /login             | [Login]()                |
    | SignUpPage     | /signup            |                          |
    | LeaguesGrid    | /leagues/          | [UsersLeagues]()         |
    | LeagueView     | /league/:league_id | [LeagueView]()           |
    | Search         | /search            | [Search]()               |
    | PlayerView     | /player/:player_id | [PlayerView]()           |
    | TeamView       | /team/:team_id     | [TeamView]()             |
    | SimulationView | /simulation        | [SimulationView]()       |
    | Settings       | /settings          | [Settings]()             |

*   ### **Components**

    | Component        | Props                                                |
    | ---------------- | ---------------------------------------------------- |
    | NavBar           |                                                      |
    | Footer           |                                                      |
    | ButtonComponent  | clickHandler, style                                  |
    | SocialLink       | clickHandler, style                                  |
    | FormComponent    | array of formObjects`{label,inputType}`, saveHandler |
    | HamburgerMenu    |                                                      |
    | SearchBar        |                                                      |
    | TableCard        |                                                      |
    | PlayerChart      | player stats                                         |
    | PlayerStatsTable | player stats                                         |

*   ### **REST API**

    | Endpoint                               | Details                                                      |
    | -------------------------------------- | ------------------------------------------------------------ |
    | playerData                             | gets general data of players(name, image, college etc.)      |
    | player/:player_id                      | gets complete info about the player including fantasy scores |
    | topPlayers/?position=[POS]             | gets list of top players at their position                   |
    | topPlayers/?position=[POS]&year=[YEAR] | gets list of top players at their position in a given year   |
    | users                                  | gets list of registered users                                |
    | users/:user_id                         | gets info of requested user                                  |
    | leagues/:user_id                       | gets list of user's leagues                                  |
    | teams/:league_id                       | gets list of of teams from the requested league              |

-   ### **Contexts**

    -   LoginContext
    -   WindowSize?

## **Timeline**

| Type             | Feature         | Task            | Done                  | Time        | Day |
| ---------------- | --------------- | --------------- | --------------------- | ----------- | --- |
| **Must Have**    |                 |                 |                       |             |     |
|                  | **plan :)**     |                 | :white_check_mark:    | **3 hours** |     |
|                  | **Server**      |                 | :black_square_button: | **4 days**  |     |
|                  |                 | routing         | :black_square_button: | 1 Day       |     |
|                  | **APIs**        |                 | :black_square_button: | **3 days**  |     |
|                  |                 | playerData      | :black_square_button: | 1 Day       |     |
|                  |                 | player          | :black_square_button: | 5 hours     |     |
|                  |                 | topPlayers      | :black_square_button: | 4 hours     |     |
|                  |                 | users           | :black_square_button: | 8 hours     |     |
|                  |                 | leagues         | :black_square_button: | 4 hours     |     |
|                  |                 | teams           | :black_square_button: | 3 hours     |     |
|                  | **Deployment**  |                 | :black_square_button: | **6 hours** |     |
|                  | **Pages**       |                 | :black_square_button: | **5 days**  |     |
|                  |                 | LandingPage     | :black_square_button: | 6 hours     |     |
|                  |                 | LoginPage       | :black_square_button: | 3 hours     |     |
|                  |                 | SignUpPage      | :black_square_button: | 3 hours     |     |
|                  |                 | LeaguesGrid     | :black_square_button: | 4 hours     |     |
|                  |                 | LeagueView      | :black_square_button: | 4 hours     |     |
|                  |                 | Search          | :black_square_button: | 6 hours     |     |
|                  |                 | PlayerView      | :black_square_button: | 4 hours     |     |
|                  |                 | TeamView        | :black_square_button: | 3 hours     |     |
| **Nice To Have** |                 |                 |                       |             |     |
|                  | **Pages**       |                 | :black_square_button: | **1 day**   |     |
|                  |                 | SimulationView  | :black_square_button: | ?           |     |
|                  |                 | Settings        | :black_square_button: | ?           |     |
|                  | **Hamburger**   |                 | :black_square_button: | **3 hours** |     |
|                  | **Footer**      |                 | :black_square_button: | **2 hours** |     |
|                  | **Testing**     |                 | :black_square_button: | **3 hours** |     |
|                  | **SocialLinks** |                 | :black_square_button: | **2 hours** |     |
|                  |                 | RecipeEdit      | :black_square_button: | 2 hours     |     |
|                  |                 | IngredientsForm | :black_square_button: | 2 hours     |     |
| **Future**       |                 |                 |                       |             |     |
|                  | **scroll** \*   |                 | :black_square_button: |             |     |

#### **Notes**

\* add infinite scroll to landing page/RecipeGrid
