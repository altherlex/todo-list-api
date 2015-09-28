= TodoListapp = NODEJS WS Restful + RailsApp  

  # swagger docs api
  http://localhost:3001/docs/

== Jumperstart

  sequelize model:create --name Task --attributes description:string,start_at:date,duration:integer
  rails generate scaffold Task description:string start_at:datetime duration:integer


== Execute tests

  # for node
  mocha --recursive 

  # for rails
  rake test

== TODO

