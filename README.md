# Forest Wilson - Homework 5 - Work Day Schedular

Does your busy lifestyle demand a high level of hourly planning? If so, this work day schedular is for you. You have the ability to submit events, meetings, or tasks on an hour-by-hour basis for each day's business hours. This planner shows you a visual representation of the days progress by display past, present, and future events. You may choose to clear all events once your day is completed so you can finally relax for those last 2-4 hours before having to start your life back up the next morning. 

## Comments

I found it hard to fully implement jquery into this project, I think becuase I've had to use Javascript for all previous projects so my familiarity with jquery is minimal. things that I thought would work (like using $(".btn) instead of document.querySelectAll) turned out to not work. I suspect it breaks when I am mixing jquery and vanilla js (like in the forEach), so this was the reason I couldnt fully implement jquery syntax.

I explained my use of Index + 9 in the js comments, but basically it was a hacky way to assign my list element time position and compare it to the current hour.

Part of my functions that are based on the current time were difficult to test becuase I couldn't find out how to manipulate the time in the chrome devtools to confirm functionality. if you know a good way for me to test this apart from adding adding more to my index in the if function please let me know!

I wanted to create functionality where if a new day starts, the page will automatically clear all events and start you with a fresh sheet, but I was unsure how/where I could put this, and without the ability to test at certain times I didnt know how I could confirm that it works, so instead I opted to create a button that clears all events for when you want to start a new day.

## Issues

Although the time displayed on the webpage is correct, it does not change until you refresh the page. I was unable to test if the classes will change when an hour has passed without refreshing the page, but my guess would be that it wont change until you refresh.

## Screenshots

![main page, regular size](./assets/images/planner-page-reg-size.png)
![main page, zoomed out to fit to screen](./assets/images/planner-page-fit-screen.png)

## Relevant links

[Live site](https://forestw70.github.io/hw5workdayscheduler/)
[Repo](https://github.com/ForestW70/hw5workdayscheduler)