const add_form = document.getElementById("add_form");
// const first_num = document.getElementById("fi").value;
// const second_num = document.getElementById("si").value;
const find_form = document.getElementById("find_form");

function nodeadd() {
    add_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open("post", `http://10.211.55.20/node/sha256?firstinput=${document.getElementById("fi").value}&secondinput=${document.getElementById("si").value}`)
        request.onload = function() {
            // console.log(request.responseText);

            document.getElementById("result_area").style.visibility = "visible";
            var obj = JSON.parse(request.responseText);
            if (typeof obj.message == "undefined") {
                document.getElementById("result").innerHTML = obj.result;
            } else {
                document.getElementById("result").innerHTML = obj.message;
            }

        }
        request.send(new FormData(add_form));
    })
}

function goadd() {
    add_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open("post", `http://10.211.55.20/go/sha256?firstinput=${document.getElementById("fi").value}&secondinput=${document.getElementById("si").value}`);
        request.onload = function() {

            document.getElementById("result_area").style.visibility = "visible";
            document.getElementById("result").innerHTML = request.responseText;
            var obj = JSON.parse(request.responseText);
            if (typeof obj.message == "undefined") {

                document.getElementById("result").innerHTML = obj.Result;
            } else {
                document.getElementById("result").innerHTML = request.responseText;
            }
            //   console.log(request.responseText);
        }
        request.send(new FormData(add_form));
    })
}


function nodefind() {
    find_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open("get", `http://10.211.55.20/node/write?input=${document.getElementById("ln").value}`)
        request.onload = function() {
            document.getElementById("find_area").style.visibility = "visible";
            document.getElementById("find_result").innerHTML = request.responseText;
            //     var obj = JSON.parse(request.responseText);
            //     if (typeof obj.message == "undefined") {
            //	document.getElementById("find_area").style.visibility = "visible";
            //        document.getElementById("find_result").innerHTML = obj.result;
            //    } else {
            //        document.getElementById("find_result").innerHTML = obj.message;
            //    }

            //    console.log(request.responseText);
        }
        request.send(new FormData(find_form));
    })

}

function gofind() {
    find_form.addEventListener("submit", (e) => {
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open("get", `http://10.211.55.20/go/write?input=${document.getElementById("ln").value}`)
        request.onload = function() {
            document.getElementById("find_area").style.visibility = "visible";

            document.getElementById("find_result").innerHTML = request.responseText;

        }
        request.send(new FormData(find_form));
    })
}