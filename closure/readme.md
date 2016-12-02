## Under Construction
https://developers.google.com/closure/

https://github.com/google/closure-compiler
https://github.com/google/closure-compiler-js // includes webpack

https://github.com/kuzmisin/closurecheatsheet
http://anton.shevchuk.name/wp-demo/closure-tutorials/cheatsheet.html
http://www.closurecheatsheet.com/dom
https://github.com/google/closure-compiler/wiki/Managing-Dependencies
https://groups.google.com/forum/#!topic/closure-compiler-discuss/fgN8xKr9Kxs

npm install closure --save
npm install --save google-closure-compiler-js
npm install --save google-closure-library

java -jar closure-compiler-v20161024.jar --help

java -jar closure-compiler-v20161024.jar --compilation_level=WHITESPACE_ONLY  --closure_entry_point=dev.app  --only_closure_dependencies   --js=./closure-library  --js src/main.js --js_output_file  dist/app.min.js
java -jar closure-compiler-v20161024.jar --compilation_level=SIMPLE --closure_entry_point=dev.app  --only_closure_dependencies   --js=./closure-library  --js src/main.js --js_output_file  dist/app.min.js
java -jar closure-compiler-v20161024.jar --compilation_level=ADVANCED --closure_entry_point=dev.app  --only_closure_dependencies   --js=./closure-library  --js src/main.js --js_output_file  dist/app.min.js


/home/ubu/latest react_dev/transpilers_blog/closure/closure-library/closure/goog

builder/closurebuilder.py --root=/  --js src/main.js --namespace="tutorial.notepad" --output_mode=compiled --compiler_jar=compiler.jar --compiler_flags="--compilation_level=SIMPLE"  > dist/app.min.js




