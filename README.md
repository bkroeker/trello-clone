# README

This Trello Clone was built as a take-home exercise for a job application.  I chose to implement it in Rails and React.

## Requirements:
* boards APIs - CRUD operations (each board has a name / title)
* columns APIs - CRUD operations (each column belongs to a board and will have a name / title)
* tasks APIs - CRUD operations (each task belongs to a column and will have a name / title)
* basic UI that will use these APIs (nothing fancy)
* Allow reordering of items from an application that will use this API (the order must be persisted in the DB). Can skip UI for dragging items if desired, but API endpoints must support this

You're free to use any technology you want on the backend, and any SPA framework on the frontend.

## To install:
* $ gem install foreman
* $ bundle install
* $ bundle exec rake db:create db:migrate
* $ foreman start -f Procfile.dev
* Go to http://localhost:3000

Note: Columns and tasks are prefixed with their database positions, to demonstrate that they are updating correctly when dragged around.

Note: It is possible to drag tasks from one column to another as long as the destination column already has at least one task.

## Testing:
I added some simple rspec tests to demonstrate how I traditionally test things.  Ideally I'd have a more comprehensive suite including javascript testing, but I had to prioritize my time for this example exercise.

* $ bundle exec rspec
