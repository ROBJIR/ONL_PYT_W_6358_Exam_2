# ONL_PYT_W_6358_Exam_2

# EXAM 2
author: robert.jiranek@gmail.com
created: # ONL_PYT_W_6358_Exam_2

EXAM 2
author: robert.jiranek@gmail.com
created: 2026-10-03 09:15

![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)

# Important information

Read the following guidelines before doing the exercises.

## How do you begin?

1. [*Fork*](https://guides.github.com/activities/forking/) the repository containing exercises.
2. Clone the repository onto your computer using the command: `git clone repository_address`.
   You will find the address of the repository by pressing "Clone or download" button on its webpage.
3. Complete the exercises and commit changes to your repository using the commands below.
   `git add filename` will add a single file which you have changed.
   If you want to add all the changed files at once, use `git add .`.
   Remember that the fullstop (dot) at the end of this command is important!
   Next, commit changes using `git commit -m "description_of_changes"`.
4. Push changes to your repository on GitHub by typing: `git push origin main`.
5. Create a [*pull request*](https://help.github.com/articles/creating-a-pull-request) to the original repository when you have finished all the exercises.

### Do the exercises in appropriate files.

**The repository with the exercises will be removed 2 weeks after the end of the course. This will result in the removal of all forks made from this repository.**


## JavaScript - Task 1 (2.5 pts)

**Do not use the DOMContentLoaded event. The script is loaded into the html file before the end of the body.**

Write a function named biggestSumOfTwoElements(array) that takes an array of numbers and returns the sum of the two largest elements of that array.

For simplicity, you can assume that the passed array contains numbers only - no validation is needed.

If the array contains only one element, the function should return the value of that element.  
If the array contains zero elements, the function should return the logical value **false**.

**Example:**
```js
biggestSumOfTwoElements([1,2,3,4]) // => 7
biggestSumOfTwoElements([]) // => false
biggestSumOfTwoElements([76]) // => 76
biggestSumOfTwoElements([23,45,17,12]) // => 68
```

## JavaScript - Task 2 (3.5 pts)

**Do not use the DOMContentLoaded event. The script is loaded into the html file before the end of the body.**

- For each subsection, create a corresponding function with the name given in the task instruction.
- Each function should return an array filled with appropriate elements. (Remember that returning is different from displaying!)

Run the following commands:

1 - Search for tag names:
- find all elements with the class sample_class and save them in the variable **task1EL**,
- create a function named getTag(elements) to which you pass the found elements as an argument,
- create an array in this function and fill it with tag names. Get them from the elements passed as an argument,
- return the array.

2 - Search for class names:
- find the element with id sample_id and save it in the variable **task2EL**,
- create a function named getClass(element) to which you pass the found element as an argument,
- create an array in the function and fill it with class names. Get the classes from the element passed as an argument,
- return the array.

3 - Search for text:
- find all list elements found in the element with class sample_class_2 and save them in the variable **task3EL**,
- create a function named getInnerText(elements) to which you pass the found elements as an argument,
- create an array in the function and fill it with the texts taken from the elements passed as an argument,
- return the array.

4 - Search for link addresses:
- find all links and save them in the variable **task4EL**,
- create a function named getAddress(elements) to which you pass the found elements as an argument,
- create an array in the function and fill it with addresses (if the link has an address) taken from the elements passed as an argument,
- return the array.

5 - Search for child tags:
- find all the children of an element with class sample_class_3 and save them in the variable **task5EL**,
- pass the found children as an argument to the function that searches for element tags.


## JavaScript - task 3 (4 points)

Use the address [https://fer-api.coderslab.pl/v1/be-exam/movies](https://fer-api.coderslab.pl/v1/be-exam/movies) to load information about movies on the page.

Add subsequent movies to a list.  
Load film titles into h2 elements and year of production into h3 elements.

Create these elements and insert them into the DOM.

Notice that the data loaded from this address is in the form of an array.
Use a loop to load all the movies.

**Hint:**
See in the console what the object you get as a response looks like before you insert the content into the page.



# Python - task 1 &ndash; models (2 points)

In the application named `exam_app` you will find the file `models.py`. There is a `User` model created in it, that has 3 attributes:
* `username` &ndash; unique user name,
* `password` &ndash; user password stored as text;
    **this is a simplification for the purpose of the exam, never do this in real code!**
* `last_update` &ndash; date the model was last modified (auto-filled).

Add a model that stores user settings:

* **Settings**:
    * `setting_key`: string, max 64 characters,
    * `value`: string, max. 64 characters.

Link the newly added model by an appropriate relation, so that each user can have multiple properties. A property can only belong to one user.

Remember to create and execute the migration!


# Python - task 2 &ndash; form and cookies (6 points)

Write a view and make it available at `/login`. The view should behave as follows:

* when accessed using the GET method:
    * display a login form, and the following fields in it:
        * `username` (text type field),
        * `password` (password type field).
* when accessed using the POST method:
    * check if there is a user with a name and a password as those entered in the form,
    * if it exists:
        * **set** a cookie named **logged_in**,
        * the cookie should live for 24 hours,
        * show the message "Logged in".
    * if it does not exist:
        * **delete** the cookie named **logged_in**,
        * show the message "Login error".
    

Solve the task using view classes.


# Python - task 3 &ndash; view (2 points)

Write a view that:
* will be available at: `/divide/{a}/{b}/` (a and b are numbers),
* when accessed using the **GET** method, will display on the page the result of dividing `a` by `b`,
* when dividing by zero, will display the message "Cannot divide by 0!" on the page.


