/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */ var app;
(function (app) {
    var dev;
    (function (dev) {
        var transpile;
        (function (transpile) {
            var ConcurrentSpinner = (function () {
                function ConcurrentSpinner(spinner) {
                    var _this = this;
                    this.spinner = spinner;
                    this.startRace().then(function (times) { return _this.onSuccess(times); }).catch(function (error) { return _this.onError(error); });
                }
                ConcurrentSpinner.main = function (args) {
                    window.onload = function (e) {
                        return new ConcurrentSpinner(document.getElementById("spinner"));
                    };
                };
                ConcurrentSpinner.prototype.onSuccess = function (times) {
                    this.onComplete();
                    document.getElementById("end-overlay").classList.add("visible");
                    return null;
                };
                ConcurrentSpinner.prototype.onError = function (error) {
                    this.onComplete();
                    alert("An error occurred: " + error);
                    return null;
                };
                ConcurrentSpinner.prototype.onComplete = function () {
                    console.log("example completed");
                };
                /**
                 * Create and start all progress bars
                 *
                 * @return a promise of the end of all progresses
                 */
                ConcurrentSpinner.prototype.startRace = function () {
                    var promises = (new Array());
                    promises.push(this.spawnProgressBar(0));
                    return Promise.all((promises));
                };
                /**
                 * Create a progress bar and start its race process
                 *
                 * @param index
                 * Progress bar's index
                 * @return A promise of progress end, whose result is the total time to
                 * completion, in millis
                 */
                ConcurrentSpinner.prototype.spawnProgressBar = function (index) {
                    var _this = this;
                    var progressBackground = document.createElement("div");
                    progressBackground.classList.add("background");
                    var progressText = document.createElement("div");
                    progressText.classList.add("text");
                    var progress = document.createElement("div");
                    progress.classList.add("progress");
                    progress.appendChild(progressBackground);
                    progress.appendChild(progressText);
                    var bar = document.createElement("div");
                    bar.classList.add("bar");
                    bar.id = "bar" + index;
                    bar.dataset["progress"] = "0";
                    bar.addEventListener("click", (function (bar) {
                        return function (event) {
                            var newProgress = Math.round((100 * (bar.clientWidth - event.clientX) / bar.clientWidth));
                            console.log("clicked on " + event.clientX + " percent=" + newProgress + " clientWidth=" + bar.clientWidth);
                            bar.dataset["progress"] = "" + newProgress;
                            return null;
                        };
                    })(bar));
                    bar.appendChild(progress);
                    this.spinner.appendChild(bar);
                    var startTime = new Date().getTime();
                    return (new Promise((function (bar, startTime) {
                        return function (resolve, reject) {
                            _this.onProgress(bar, resolve, reject, startTime);
                        };
                    })(bar, startTime)));
                };
                ConcurrentSpinner.prototype.onProgress = function (progressBar, resolve, reject, startTime) {
                    var _this = this;
                    var progress = parseInt(progressBar.dataset["progress"]);
                    var progressElement = progressBar.querySelector(".progress");
                    progressElement.style.height = "10%";
                    progressElement.style.width = progress + "%";
                    var text = progressBar.querySelector(".text");
                    text.textContent = progress + "%";
                    text.style.color = "rgb(" + (40 + (((100 - progress) / 100) * 215)) + ", " + (2 * progress / 100) * 255 +
                        ", 0)";
                    text.style.fontSize = ((progress + 20) / 55) + "em";
                    if (progress < 100) {
                        progressBar.dataset["progress"] = "" + (progress + 1);
                        var nextTick = 100 * Math.random();
                        setTimeout((function () {
                            _this.onProgress(progressBar, resolve, reject, startTime);
                        }), nextTick);
                    }
                    else {
                        text.style.fontSize = "";
                        progressBar.classList.add("loaded");
                        progressBar.classList.add("animation");
                        setTimeout((function () {
                            progressBar.classList.remove("animation");
                        }), 350);
                        resolve(new Date().getTime() - startTime);
                    }
                };
                return ConcurrentSpinner;
            }());
            transpile.ConcurrentSpinner = ConcurrentSpinner;
            ConcurrentSpinner["__class"] = "app.dev.transpile.ConcurrentSpinner";
        })(transpile = dev.transpile || (dev.transpile = {}));
    })(dev = app.dev || (app.dev = {}));
})(app || (app = {}));
app.dev.transpile.ConcurrentSpinner.main(null);
//# sourceMappingURL=ConcurrentSpinner.js.map