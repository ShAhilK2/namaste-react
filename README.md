#NAMASTE REACT

#WebPack or parcel or vite or any other bundler do this task
#Parcel
Dev Build
Local Server
HMR Hot Module Replacement
File Watching Algorithm which is Written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling : Bundler
Compressing,Compress
Consistent Hashing
Code Spiliting
Differential Bundling - Support older Brwosers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles

#Default and Named Exports

#React Hooks
(Normal Js Utility Functions)
-useState()
=> State of a Component
//Whenever a state variable updates ,React re-render the components
//React will keep your UI layer async with data layer
//React will made Dom manipulation super fast and efficient

In React 16
//React use Reconcilation Algorithm is also known as React Fiber

//React will create a Vitual Dom
//Virtual Dom is representation of Actual Dom
//Actual Dom is Elements
//Vitual Dom is an Object (Normal JavaScript Object)

//Diff Algorithm
//Difference between updated Virtual DOM and Prevous Virtual DOM
//Difference between Old and new Virtual Dom and then it actuall update the dom

-useEffect()

<!-- useEffect is used for SideEffect and
have 3 dependency array
1.no dependency array then it called on every render
2.Empty Dependency = [ ] => Only Initial render

3.Dependancy array = [name] => if name is changes it render  -->

//IN Class Component

First,Constructor
then render is called

//Constructor
//render

//THis Phase is render phase

//componentDidMount
//componentDidUpdate
//componentWillUnmount

//this phase is commit phase

//Single Responsibilty Principal

//Modular
Resuable
Maintainable
Testable
