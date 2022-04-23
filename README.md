### EXPRESS APP TEMPLATE GUIDE

---

- **Github Config**
  - Change the folder name "github" to ".github"
  - In the files inside the .github/workflow you will something like this
    ```yaml
    ECR_REPOSITORY: ecr-repo-name
    ```
    change "ecr-remo-name" to your ECR repo
  - Add .gitignore
- **Dockerfile**
  - In both files (Dockerfile inse local and pord) change the port to your needs.
- **ENV FILE**
  - Use cp env.copy .env and add the envs to your needs.
- **VALIDATIOS MIDDLEWARE**
  - For each _foo.routes.js_ file you could create a _foo.validator.js_ inside _src/middlewares/validators/_ and add it as a middleware to execute req validations.
  - The foo.validator.js must contains to functions (userValidationRules(action),validate), one to add validations rules and the second one to validate those validations.
    - In _example.validations.js_ you will find a template to understand better how it works.
  - And in the route add the functions ass middlewares
  ```js
  app.post("/sms/example", userValidationRules("POST"), validate, example);
  ```
