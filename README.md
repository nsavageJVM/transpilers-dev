# Transplier Pattern for Modern Software Engineering  

## Install Instructions  

### Windows with no java installed  

  Extract the file java-windows.zip into a directory `java-windows`  

`export JAVA_HOME=~/transpilers-dev/java-windows` 
`./gradlew install`

## install node and npm debendencies

### Module  Node Tasks  

   `./gradlew tasks`  

    `nodeSetup - Download and install a local node/npm version.`  
    `npmInstall - Install node packages from package.json.`  
    `npmSetup - Setup a specific version of npm to be used by the build.`  
    
#### run the java commands with  

    `" $JAVA_HOME/bin"/java -version`  

### Node Example usage

Install node dependecies for closure module

`./gradlew :closure:nodeSetup`  

Install npm dependencies for closure module  

`./gradlew :closure:npmInstall`  

### Java Example usage  

Run closure compiler in cloure workflow  

`"$JAVA_HOME/bin"/java -jar compiler.jar --compilation_level=ADVANCED --closure_entry_point=dev.app \^`  
                      ` --only_closure_dependencies  --js=./node_modules/google-closure-library \^`  
                      ` --js src/main.js --js src/component.js --js_output_file  dist/app.min.js `



### Linux

 run as typical java gradle project   




