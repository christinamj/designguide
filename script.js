window.addEventListener("load", start);

function start(){
    fetchPalet();
  }

  async function fetchPalet(){
    let response = await fetch("img/palet.svg");
    let mySvgData = await response.text();
    document.querySelector(".thepalet").innerHTML = mySvgData;
    showValues();
  }

  function showValues(){

    document.querySelectorAll("#Rectangle_310, .prime-1").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #26424F";
            document.querySelector(".rgb").textContent = "RGB = 38, 66, 79";
            document.querySelector(".hsl").textContent = "Hsl = 199, 52%, 23%";
        });
    });
    //   document.querySelectorAll("#Rectangle_310", "prime-2").addEventListener("click", function(){
    //       document.querySelector(".hex").textContent = "Hex = #26424F";
    //       document.querySelector(".rgb").textContent = "RGB = 38, 66, 79";
    //       document.querySelector(".hsl").textContent = "Hsl = 199, 52%, 23%";
    //    });


    document.querySelectorAll("#Path_1336, .secondary-1").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #2F5160";
            document.querySelector(".rgb").textContent = "RGB = 47, 81, 96";
            document.querySelector(".hsl").textContent = "Hsl = 198, 51%, 28%";
        });
    });

    document.querySelectorAll("#Rectangle_312, .secondary-2").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #3D6274";
            document.querySelector(".rgb").textContent = "RGB = 61, 98, 116";
            document.querySelector(".hsl").textContent = "Hsl = 200, 47%, 35%";
        });
    });

    document.querySelectorAll("#Rectangle_313, .secondary-3").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #467186";
            document.querySelector(".rgb").textContent = "RGB = 70, 113, 134";
            document.querySelector(".hsl").textContent = "Hsl = 200, 48%, 40%";
        });
    });


    document.querySelectorAll("#Path_1674, .secondary-4").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #53839b";
            document.querySelector(".rgb").textContent = "RGB = 83, 131, 155";
            document.querySelector(".hsl").textContent = "Hsl = 200, 46%, 47%";
        });
    });



     document.querySelector("#Path_1337").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #5A8CA5";
        document.querySelector(".rgb").textContent = "RGB = 90, 140, 165";
        document.querySelector(".hsl").textContent = "Hsl = 200, 45%, 50%";
     });

     document.querySelectorAll("#Path_1338, .prime-2").forEach(div => {
        div.addEventListener('click', () => {
        document.querySelector(".hex").textContent = "Hex = #2B4546";
        document.querySelector(".rgb").textContent = "RGB = 43, 69, 70";
        document.querySelector(".hsl").textContent = "Hsl = 182, 39%, 22%";
        });
    });

    document.querySelectorAll("#Rectangle_316, .secondary-5").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #375759";
            document.querySelector(".rgb").textContent = "RGB = 55, 87, 89";
            document.querySelector(".hsl").textContent = "Hsl = 184, 38%, 28%";
        });
    });

    document.querySelectorAll("#Rectangle_317, .secondary-6").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #3F6669";
            document.querySelector(".rgb").textContent = "RGB = 63, 102, 105";
            document.querySelector(".hsl").textContent = "Hsl = 184, 40%, 33%";
        });
    });


    document.querySelectorAll("#Rectangle_318, .secondary-7").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #4b7274";
            document.querySelector(".rgb").textContent = "RGB = 75, 114, 116";
            document.querySelector(".hsl").textContent = "Hsl = 183, 35%, 37%";
        });
    });


    document.querySelectorAll("#Rectangle_319, .secondary-8").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #668989";
            document.querySelector(".rgb").textContent = "RGB = 102, 137, 137";
            document.querySelector(".hsl").textContent = "Hsl = 180, 26%, 47%";
        });
    });

    document.querySelectorAll("#Rectangle_324, .secondary-9").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #b7babb";
            document.querySelector(".rgb").textContent = "RGB = 183, 186, 187";
            document.querySelector(".hsl").textContent = "Hsl = 195, 2%, 73%";
        });
    });

    document.querySelectorAll("#Rectangle_323, .secondary-10").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #c7cacb";
            document.querySelector(".rgb").textContent = "RGB = 199, 202, 203";
            document.querySelector(".hsl").textContent = "Hsl = 195, 2%, 79%";
        });
    });


    document.querySelectorAll("#Path_1339, .secondary-11").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #d9ddde";
            document.querySelector(".rgb").textContent = "RGB = 217, 221, 222";
            document.querySelector(".hsl").textContent = "Hsl = 192, 2%, 86%";
        });
    });

    document.querySelectorAll("#Rectangle_322, .secondary-12").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #e5e9ea";
            document.querySelector(".rgb").textContent = "RGB = 229, 233, 234";
            document.querySelector(".hsl").textContent = "Hsl = 192, 2%, 91%";
        });
    });

     document.querySelector("#Rectangle_320").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #edf0f2";
        document.querySelector(".rgb").textContent = "RGB = 237, 240, 242";
        document.querySelector(".hsl").textContent = "Hsl = 204, 2%, 94%";
     });


    document.querySelectorAll("#Image_1-2, .black").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #373839";
            document.querySelector(".rgb").textContent = "RGB = 55, 56, 57";
            document.querySelector(".hsl").textContent = "Hsl = 210, 4%, 22%";
        });
    });

    document.querySelectorAll("#Image_1, .contrast").forEach(div => {
        div.addEventListener('click', () => {
            document.querySelector(".hex").textContent = "Hex = #c8423c";
            document.querySelector(".rgb").textContent = "RGB = 200, 66, 60";
            document.querySelector(".hsl").textContent = "Hsl = 3, 70%, 51%";
        });
    });

     document.querySelector(".white").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #F4F4F4";
        document.querySelector(".rgb").textContent = "RGB = 244, 244, 244";
        document.querySelector(".hsl").textContent = "Hsl = 0, 0%, 96%";
     });
     
     

     


     
  }