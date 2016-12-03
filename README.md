# A Collation of Transplier Patterns  

*  Closure  
*  React  
*  JSweet  


## Install Instructions  

### Windows with no java installed  

  Use the exe `jre_installer.exe ` to extract the bundled java into  
  the directory `java-windows` then in a git bash terminal set the JAVA_HOME env  
  to point to this directory  

`export JAVA_HOME=~/transpilers-dev/java-windows`  

#### run the java commands with  

    ` "$JAVA_HOME/bin"/java -version `  

## Install node and npm debendencies

`./gradlew install`  

 the first time this downloads the gradle wrapper  
  
### Module Node Tasks  
    
    run `./gradlew tasks`  

    `nodeSetup - Download and install a local node/npm version.`  
    `npmInstall - Install node packages from package.json.`  
    `npmSetup - Setup a specific version of npm to be used by the build.`  

### Node amd npm example usage

Install node dependecies for closure module

`./gradlew :closure:nodeSetup`  

Install npm dependencies for closure module  

`./gradlew :closure:npmInstall`  

### react module  

    Run the dev server from the top level directory   

    `./gradlew :react:runDevServer`

### closure module  

    in the closure module transpiile the js source
    `"$JAVA_HOME/bin"/java -jar compiler.jar --compilation_level=ADVANCED --closure_entry_point=dev.app --only_closure_dependencies  --js=./node_modules/google-closure-library --js src/main.js --js src/component.js --js_output_file  dist/app.min.js `
  
    run the test  
    "C:\Program Files (x86)/Mozilla Firefox"/firefox.exe Test.html

### jsweet module  


### Linux

 run as typical java gradle project   




