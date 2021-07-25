# Intro

Hello, my name is Josh and I would like to share with you a simple demonstration of the Google Sheets API.
The purpose of this demo is to show how we can use google sheets as a database of sorts, and retrieve the data on an application we code ourselves.

## Motivation

I think this is a idea worth pursuing because it bridges the gap between technical and non technical people in a really easy way. Google sheets is a really simple tool that almost everyone can use, and it's really easy to get started with. On the other hand, with access to the data through an API, it allows us to be pretty creative with the data we get. This demo is going to be a relatively simple one, but I hope it inspires you guys to think about the possibilities with this technique.

## Demo

So let's jump right into it. On the left I have the google sheet, and on the right I have the demo application we are using to query data from the google sheet.

What's running in the background is a server I have running as a Deta Micro. This is a free service I am using to host simple apps on the cloud. This is essentially the middleman between the Google Sheets and our application; for the more technically inclined, it is a node.js server that sends the google sheets data once a specific endpoint is fetched through HTTPS.

Let's see this in action. We notice that the table in our application shows the correct data, even if we reload. Let's add a new row to the column, and wait for the google sheets to save. Once we reload, which will take a while, since I'm using a free service to host the server, we now get the updated results.

How does the server know how many rows to query? I have a metadata sheet that has a cell counting the amount of nonempty rows there are in the Content sheet, using a function I found online. If we delete the row, it should automatically update. The server reads this cell and knows how many rows to read from the spreadsheet.

## Caveats

There are a couple caveats I should mention before I close off. The setup I have only allows me to read google sheets that the canada summer worker google account owns. To read data that is shared with the account, I'll have to use a differnt authentication strategy, and I have yet to look into that.

Another caveat is that the formatting is gone when you receiev the data from the google sheets. There is a way to preserve formatting, but it is a lot more difficult, and I figured it was out of the scope of this simple demo.

## Conclusion

But that concludes this demonstration. The website where the demo is will be linked below, and you should also be able to access and edit the google sheet via the link on the web page. I hope you found this interesting, and that it spraks some new ideas for you. Thank you.
