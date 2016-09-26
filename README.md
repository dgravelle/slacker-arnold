# Arnold Bot

DISCLAIMER: This is a super simple slack bot and still a work in progress.

Arnold bot is a simple slack bot that responds to slash commands with either one of his famous one liners or a motivational quote.

### Set up your Arnold Bot on Slack

First, you need to get your slack channel setup with a [custom slash command](https://api.slack.com/slash-commands). In your custom configuration, you'll want to take note of two things. The provided ```token``` and the URL which your custom slash command will ```POST``` to.

You should set your URL to: ```https://{{ your app name }}.herokuapp.com/arnold```. You'll create your app name when you deploy your Arnold bot to Heroku which we'll explain in just a minute.

### Install

Once your slack app is setup, copy this repo and run ```npm install```

### Slack Token

Head back to your Slack Channel's configuration for your Arnold bot and grab the provided Token and update the ```.env-example``` SLACK_TOKEN variable with your Slack Token. Then rename the ```.env-example``` to ```.env```.

### Run

Once your packages have been installed and your environment variables are set, you're ready to start your arnold bot! Just run```npm start```

```
$ npm start
come to port 8765 if you want to live
```

And you're all set! You should now be able to enter commands to Arnold Bot by entering ```/arnold oneliner``` or ```/arnold motivation``` to get one of Arnold's famous quotes returned to you.

### Deploy to Heroku

If you want to host your Arnold bot on Heroku, simply grab the [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-command-line) and run:

```
$ heroku create { your app name }
```

Once Heroku has initilized your app...

```
$ git push heroku master
```

And bam, your Arnold bot is now setup on Heroku!
