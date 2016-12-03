# Transpile Java 

see [The javascript transpile dialectic part 1](http://nsavagejvm.netlify.com/2016/12/the-javascript-transpile-dialectic-part-1/)

[jsweet](http://www.jsweet.org/)   
 

## Set up

see top level [readme](https://github.com/nsavageJVM/transpilers-dev) for general instructions  
1 needs java  [windows with no local java](https://github.com/nsavageJVM/transpilers-dev) for general instructions  
2 install dependencies `./gradlew :jsweet:npmInstall`    
3 need java on the path see top level [readme](https://github.com/nsavageJVM/transpilers-dev)  


## Transpile  
    
    1 build the java source `./gradlew :jsweet:build`
    2 transpile  `./gradlew :jsweet:jsweet`  

## Test 
   1 assemble the artifacts  `./gradlew :jsweet:deployStatic`  
   2 open  Test.html  in the jsweet module `staging` directory  