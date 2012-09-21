Backbone.js Custom Builds
=========================
![Example](http://backbonejs.org/docs/images/backbone.png)

[Website](http://gregfranko.com/backbone/customBuild/)

##Description
Backbone.js Custom Builds allow you to individually download only the Backbone.js modules that your project needs (the only required module is the **Events** module).  With custom builds, you could use the Backbone Events class object as a standalone pub/sub solution, or only use Backbone Views to organize all of your app's event handlers, or use Backbone Models to store all of your applications data client-side, etc (all while minimizing your file size).  The possibilities are endless! (not really but you get the point) 

##Why This Project Was Created
Backbone is incredible, so I wanted to make it even easier for people who aren't completely sold on using it, to only take what they want/need.  Please read my article, [Backbone.js: Convincing the Boss Guide](http://gregfranko.com/blog/backbone-dot-js-convincing-the-boss-guide/) for further detail.

##How This Project Was Created
I looked at the Backbone codebase and split up all of the Backbone Class Objects into their own files. 

Backbone by default is not set up in a modular way and instead heavily uses local variables all scoped under one Immediately Invoked Function Expression (like most libraries). I had to make a few changes to the Backbone core to remove these local property dependencies so that they could be split into several files, but that was it.

#Unit Testing
I have made sure that my modularized version of Backbone passed all of the Backbone unit tests.

##FAQ

**Why doesn't Backbone allow you to do custom builds by default?**

I'm not sure. Hopefully in the future Backbone will provide this option. Until that happens, I will continue to support the project.



**What happens when Backbone upgrades to a different version?**


Unfortunately, I will also have to upgrade my code to match the changes.



**Where can I find all of the Backbone Module Code?**


You can find all of the Backbone modules inside of my Backbone Fork.



**How did you make this custom build UI?**


I used DownloadBuilder.js to make the custom build. I also wrote that library (shameless plug)

##Contributors
Greg Franko

## License
Copyright (c) 2012 Greg Franko  
Licensed under the MIT license.