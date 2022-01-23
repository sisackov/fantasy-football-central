# fantasy-football-central

## System Design

-   The **mockup outline** can be found [here](./docs/page-view-diagram.pdf).

*   ### **Pages**

    | Page Component    | Page Route                  | Component Hierarchy Tree                                   |
    | ----------------- | --------------------------- | ---------------------------------------------------------- |
    | LandingPage       | /                           | [App](./misc/app-diagram.pdf)                              |
    | LoginPage         | /login                      | [Login](./misc/login-diagram.pdf)                          |
    | SignUpPage        | /signup                     |                                                            |
    | Search            | /search                     | [Search](./misc/search-diagram.pdf)                        |
    | RecipeView        | /recipe/:recipe_id          | [RecipeView](./misc/recipe-view-diagram.pdf)               |
    | RecipeEdit        | /recipe/edit/:recipe_id     | [RecipeEdit](./misc/recipe-edit-diagram.pdf)               |
    | CollectionsList   | /collections                | [CollectionsList](./misc/collection-list-diagram.pdf)      |
    | CollectionRecipes | /collections/:collection_id | [CollectionRecipes](./misc/collection-recipes-diagram.pdf) |
    | ShopCart          | /cart                       | [ShopCart](./misc/shop-cart-diagram.pdf)                   |
    | BakingCalculator  | /calculator                 | [BakingCalculator](./misc/calculator-diagram.pdf)          |

*   ### **Components**

    | Component             | Props                                                |
    | --------------------- | ---------------------------------------------------- |
    | NavBar                |                                                      |
    | Footer                |                                                      |
    | ButtonComponent       | clickHandler, style                                  |
    | SocialLink            | clickHandler, style                                  |
    | FormComponent         | array of formObjects`{label,inputType}`, saveHandler |
    | HamburgerMenu         |                                                      |
    | SearchBar             |                                                      |
    | RecipeCard            | recipeData                                           |
    | RecipeSummary         | recipe ingredients#, prep time, calories#            |
    | NutrientsCard         | recipe ingredients array                             |
    | IngredientsView       | recipe ingredients array                             |
    | RelatedCarousel       | recipe title, ingredients array                      |
    | IngredientsForm       | recipe ingredients array                             |
    | CollectionCard        | collectionData`{title, recipeId array }`             |
    | CollectionRecipesCard | recipeId                                             |
    | ShopCartForm          | array of cartItems`{ingredient,quantity,unit}`       |
    | PrintButton           | array of cartItems?????                              |
    | CalculatorForm        | recipe ingredients array                             |

-   ### **Contexts**

    -   LoginContext
    -   WindowSize?

## **Timeline**

| Type             | Feature             | Task            | Done                  | Time           | Day          |
| ---------------- | ------------------- | --------------- | --------------------- | -------------- | ------------ |
| **Must Have**    |                     |                 |                       |                |              |
|                  | **APIs**            |                 | :white_check_mark:    | **3.5 hours**  | Thursday     |
|                  |                     | Edamam          | :white_check_mark:    | 2 hours        | Thursday     |
|                  |                     | FDC             | :white_check_mark:    | 0.5 hours      | Thursday     |
|                  |                     | Mockup          | :white_check_mark:    | 0.5 hours      | Thursday     |
|                  |                     | Spoonacular     | :white_check_mark:    | 0.5 hours      | Thursday     |
|                  | **Recipes**         |                 | :white_check_mark:    | **11.5 hours** |              |
|                  |                     | RecipeCard      | :white_check_mark:    | 2 hours        | Thursday     |
|                  |                     | RecipeView      | :white_check_mark:    | 2 hours        | Thursday     |
|                  |                     | RecipeSummary   | :white_check_mark:    | 0.5 hours      | Saturday eve |
|                  |                     | NutrientsCard   | :white_check_mark:    | 3 hours        | Saturday eve |
|                  |                     | IngredientsView | :white_check_mark:    | 2 hours        | Sunday       |
|                  | **Netlify**         |                 | :white_check_mark:    | **2 hours**    | Sunday       |
|                  | **Login**           |                 | :white_check_mark:    | **6 hours**    |              |
|                  |                     | LoginPage       | :white_check_mark:    | 3 hours        | Sunday       |
|                  |                     | SignUpPage      | :white_check_mark:    | 3 hours        | Monday       |
|                  | **Collections**     |                 | :white_check_mark:    | **6 hours**    | Monday       |
|                  |                     | List            | :white_check_mark:    | 2 hours        | Monday       |
|                  |                     | Recipes         | :white_check_mark:    | 2 hours        | Monday       |
|                  |                     | Create          | :white_check_mark:    | 2 hours        | Monday       |
|                  | **Search**          |                 | :white_check_mark:    | **4 hours**    | Monday       |
|                  |                     | SearchBar       | :white_check_mark:    | 3 hours        |              |
|                  |                     | SearchList      | :white_check_mark:    | 1 hours        |              |
|                  | **Styling**         |                 | :white_check_mark:    | **8 hours**    | Tuesday      |
| **Nice To Have** |                     |                 |                       |                |              |
|                  | **Hamburger**       |                 | :black_square_button: | **2 hours**    | Tuesday      |
|                  | **Shop Cart**       |                 | :black_square_button: | **3 hours**    | Tuesday      |
|                  | **Calculator**      |                 | :black_square_button: | **8 hours**    | Wednesday    |
|                  | **RelatedCarousel** |                 | :black_square_button: | **1.5 hours**  | Wednesday    |
|                  | **SocialLinks**     |                 | :black_square_button: | **1.5 hours**  | Wednesday    |
|                  |                     | RecipeEdit      | :black_square_button: | 2 hours        |              |
|                  |                     | IngredientsForm | :black_square_button: | 2 hours        |              |
| **Future**       |                     |                 |                       |                |              |
|                  | **scroll** \*       |                 | :black_square_button: |                |              |

#### **Notes**

\* add infinite scroll to landing page/RecipeGrid
