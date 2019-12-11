Cannauka.pl
================

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


Problems? Issues?
-----------

Your application contains diagnostics in the README file. Please provide a copy of the README file when reporting any issues.

Ruby on Rails
-------------

This application requires:

- Ruby 2.6.5
- Rails 6.0.1


Getting Started
---------------------
1. Be sure you got correct ruby versions [ you can check your ruby version with <code>rmv list</code>]
2. If not install it with <code>rvm install ruby-X.X.X</code> then use <code>rvm --default use ruby-X.X.X</code>
3. Be sure you got correct version of RAILS [ you can check version via <code>rails -v</code> ]
4. If not install it with <code>gem install ruby -v x.x.x</code>
5. Install additional software <code>ngrok</code> it's a client peace of software for getting callbacks __[ normaly you are requesting as localhost:3000 it's not valid for web services, because they don't know what localhost:3000 is ]__ ngrok makes you public with address that webservices can reach back.
6. Run <code>ngrok http 3000</code> with **port** used by your app **[ default one is :3000 ]**
7. Run <code>bundle install</code>
8. Run <code>rake db:setup</code> 
<br>**Here things get little trticky**
<br>First of all we are using postgres database, so if you don't have one please install it.
<br> 
<br> **moving on...**
<br>We got two files <code>config/application.example.yml</code> & <code>config/database.example.yml</code>
<br>This files are needed for configuring your app, please change names of both files.
<br> Do this by removing "example" from fileNames <code>application.example.yml</code> -> <code>application.yml</code>
<br> provide correct data inside those files, you will need some api keys

9. Run <code>rails s</code>
10. CELEBRATE small win of runnig app \\(^o^)/

Documentation and Support
-------------------------

Issues
-------------

Similar Projects
----------------

Contributing
------------

Credits
-------

License
-------

