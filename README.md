# Welcome to the Complete Intro to React v4

This course is given by Brian Holt

# Parcel

Parcel is a relatively new bundler for JavaScript projects. Webpack is a fantastic piece of technology and you should definitely consider using it for your large applications; it's been around a long time and has a lot of support.

That being said, Parcel is an amazing tool that zero-config. It works with everything we want to do out of the box. Since this is a class on React and not build processes, this allows us to focus more on React.

Parcel reads .env file automatically

# Functions vs. Arrow Functions

functions have a new scope whenever it is called
scope can change depending on where you call this function

whereas if we have an arrow function, it will not create a new scope where it is

# Context

contecxt solves data tunneling or props drilling
you don't need to keep pushing props that you don't need down many layers until it is used
rather create a context and use it in any child component

# Portals

render in one component, but physically be in DOM at some other component  
thats when we use portals
