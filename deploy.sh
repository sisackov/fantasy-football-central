#!/bin/sh
sudo git pull 
sudo npm run heroku-postbuild
sudo systemctl restart nginx
sudo pm2 restart all