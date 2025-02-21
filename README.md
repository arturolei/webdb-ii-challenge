# Web DB II Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Project Set Up

Follow these steps for starting your project.

- [X] Fork this repository and **clone your fork**.
- [X] Add your project manager as collaborator on your fork.
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [X] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [X] Add your project manager as a reviewer on the pull-request
- [X] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [X] Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- [X] Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module. 
- [X] Write a set of endpoints to support `CREATE` and `READ` operations on the `cars` resource. 
- [X] Use a rest client like _Insomnia_ or _Postman_ to test your API.

## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information (REQUIRED) for each car is:
    - [X] VIN, unique, string?, not nullable
    - [X] make, not nullable
    - [X] model, number, not nullable
    - [X] mileage, number, not nullable
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known. 
    - [X] Transmission, string?, nullable/not required 
    - [X] Title Status, string?, nullable/not required

## Stretch Problems

- [X] Add seed data to the database using `knex seeds`
- [] Add `UPDATE` and `DELETE` operations to your API.
- [] Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold. 
