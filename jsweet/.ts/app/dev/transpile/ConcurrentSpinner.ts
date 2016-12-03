/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */ namespace app.dev.transpile {     

      
      
      
      
      
      
      

      

      
      
      
      
      
      export class ConcurrentSpinner {         



public static main(args : string[]) {             
window.onload = (e) => {                 
return new ConcurrentSpinner(<HTMLDivElement>document.getElementById("spinner"));             };         }          



private spinner : HTMLDivElement;          

public constructor(spinner : HTMLDivElement) {             
this.spinner = spinner;             

this.startRace().then<any>(
(times) => { return this.onSuccess(times) }).catch<any>(
(error) => { return this.onError(error) });         }          


private onSuccess(times : number[]) : void {             
this.onComplete();             
document.getElementById("end-overlay").classList.add("visible");             
return null;         }          


private onError(error : any) : void {             
this.onComplete();             
alert("An error occurred: " + error);             
return null;         }          


private onComplete() {             
console.log("example completed");         }          








/**
 * Create and start all progress bars
 * 
 * @return a promise of the end of all progresses
 */
private startRace() : Promise<number[]> {             

let promises : Array<Promise<number>> = <any>(new Array<Promise<number>>());             
promises.push(this.spawnProgressBar(0));             
return Promise.all<any>((promises));         }          










/**
 * Create a progress bar and start its race process
 * 
 * @param index
 * Progress bar's index
 * @return A promise of progress end, whose result is the total time to
 * completion, in millis
 */
private spawnProgressBar(index : number) : Promise<number> {             

let progressBackground : HTMLDivElement = document.createElement("div");             
progressBackground.classList.add("background");             

let progressText : HTMLDivElement = document.createElement("div");             
progressText.classList.add("text");             

let progress : HTMLDivElement = document.createElement("div");             
progress.classList.add("progress");             
progress.appendChild(progressBackground);             
progress.appendChild(progressText);             

let bar : HTMLDivElement = document.createElement("div");             
bar.classList.add("bar");             
bar.id = "bar" + index;             
bar.dataset["progress"] = "0";             
bar.addEventListener("click", ((bar) => {                 return (event) => {                     
let newProgress : number = Math.round((100 * (bar.clientWidth - event.clientX) / bar.clientWidth));                     
console.log("clicked on " + event.clientX + " percent=" + newProgress + " clientWidth=" + bar.clientWidth);                     
bar.dataset["progress"] = "" + newProgress;                     
return null;                 }             })(bar));             

bar.appendChild(progress);             
this.spinner.appendChild(bar);             

let startTime : number = new Date().getTime();             
return <any>(new Promise<number>(
((bar,startTime) => {                 return (resolve, reject) => {                     
this.onProgress(bar, resolve, reject, startTime);                 }             })(bar,startTime)));         }          



private onProgress(progressBar : HTMLDivElement, resolve : (p1: number) => void, reject : (p1: any) => void, 
startTime : number) {             
let progress : number = parseInt(progressBar.dataset["progress"]);             


let progressElement : HTMLElement = <HTMLElement>progressBar.querySelector(".progress");             
progressElement.style.height = "10%";             
progressElement.style.width = progress + "%";             

let text : HTMLElement = <HTMLElement>progressBar.querySelector(".text");             
text.textContent = progress + "%";             
text.style.color = "rgb(" + (40 + (((100 - progress) / 100) * 215)) + ", " + (2 * progress / 100) * 255 + 
", 0)";             
text.style.fontSize = ((progress + 20) / 55) + "em";             

if(progress < 100) {                 

progressBar.dataset["progress"] = "" + (progress + 1);                 
let nextTick : number = 100 * Math.random();                 
setTimeout((() => {                     
this.onProgress(progressBar, resolve, reject, startTime);                 }), 
nextTick);             } else 
{                 


text.style.fontSize = "";                 
progressBar.classList.add("loaded");                 
progressBar.classList.add("animation");                 
setTimeout((() => {                     
progressBar.classList.remove("animation");                 }), 
350);                 

resolve(new Date().getTime() - startTime);             }         }     }     ConcurrentSpinner["__class"] = "app.dev.transpile.ConcurrentSpinner";  } 

app.dev.transpile.ConcurrentSpinner.main(null);
