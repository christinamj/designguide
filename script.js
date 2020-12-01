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
      document.querySelector("#Rectangle_310").addEventListener("click", function(){
          document.querySelector(".hex").textContent = "Hex = #26424F";
          document.querySelector(".rgb").textContent = "RGB = 38, 66, 79";
          document.querySelector(".hsl").textContent = "Hsl = 199, 52%, 23%";
       });

       document.querySelector("#Path_1336").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #2F5160";
        document.querySelector(".rgb").textContent = "RGB = 47, 81, 96";
        document.querySelector(".hsl").textContent = "Hsl = 198, 51%, 28%";
     });

     document.querySelector("#Rectangle_312").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #3D6274";
        document.querySelector(".rgb").textContent = "RGB = 61, 98, 116";
        document.querySelector(".hsl").textContent = "Hsl = 200, 47%, 35%";
     });

     document.querySelector("#Rectangle_313").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #467186";
        document.querySelector(".rgb").textContent = "RGB = 70, 113, 134";
        document.querySelector(".hsl").textContent = "Hsl = 200, 48%, 40%";
     });

     document.querySelector("#Path_1674").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #53839b";
        document.querySelector(".rgb").textContent = "RGB = 83, 131, 155";
        document.querySelector(".hsl").textContent = "Hsl = 200, 46%, 47%";
     });

     document.querySelector("#Path_1337").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #5A8CA5";
        document.querySelector(".rgb").textContent = "RGB = 90, 140, 165";
        document.querySelector(".hsl").textContent = "Hsl = 200, 45%, 50%";
     });


     document.querySelector("#Path_1338").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #2B4546";
        document.querySelector(".rgb").textContent = "RGB = 43, 69, 70";
        document.querySelector(".hsl").textContent = "Hsl = 182, 39%, 22%";
     });


     document.querySelector("#Rectangle_316").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #375759";
        document.querySelector(".rgb").textContent = "RGB = 55, 87, 89";
        document.querySelector(".hsl").textContent = "Hsl = 184, 38%, 28%";
     });

     document.querySelector("#Rectangle_317").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #3F6669";
        document.querySelector(".rgb").textContent = "RGB = 63, 102, 105";
        document.querySelector(".hsl").textContent = "Hsl = 184, 40%, 33%";
     });

     document.querySelector("#Rectangle_318").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #4b7274";
        document.querySelector(".rgb").textContent = "RGB = 75, 114, 116";
        document.querySelector(".hsl").textContent = "Hsl = 183, 35%, 37%";
     });

     document.querySelector("#Rectangle_319").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #668989";
        document.querySelector(".rgb").textContent = "RGB = 102, 137, 137";
        document.querySelector(".hsl").textContent = "Hsl = 180, 26%, 47%";
     });
     document.querySelector("#Rectangle_324").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #b7babb";
        document.querySelector(".rgb").textContent = "RGB = 183, 186, 187";
        document.querySelector(".hsl").textContent = "Hsl = 195, 2%, 73%";
     });

     document.querySelector("#Rectangle_323").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #c7cacb";
        document.querySelector(".rgb").textContent = "RGB = 199, 202, 203";
        document.querySelector(".hsl").textContent = "Hsl = 195, 2%, 79%";
     });

     document.querySelector("#Path_1339").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #d9ddde";
        document.querySelector(".rgb").textContent = "RGB = 217, 221, 222";
        document.querySelector(".hsl").textContent = "Hsl = 192, 2%, 86%";
     });

     document.querySelector("#Rectangle_322").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #e5e9ea";
        document.querySelector(".rgb").textContent = "RGB = 229, 233, 234";
        document.querySelector(".hsl").textContent = "Hsl = 192, 2%, 91%";
     });

     document.querySelector("#Rectangle_322").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #e5e9ea";
        document.querySelector(".rgb").textContent = "RGB = 229, 233, 234";
        document.querySelector(".hsl").textContent = "Hsl = 192, 2%, 91%";
     });

     document.querySelector("#Rectangle_320").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #edf0f2";
        document.querySelector(".rgb").textContent = "RGB = 237, 240, 242";
        document.querySelector(".hsl").textContent = "Hsl = 204, 2%, 94%";
     });

     document.querySelector("#Image_1-2").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #373839";
        document.querySelector(".rgb").textContent = "RGB = 55, 56, 57";
        document.querySelector(".hsl").textContent = "Hsl = 210, 4%, 22%";
     });

     document.querySelector("#Image_1").addEventListener("click", function(){
        document.querySelector(".hex").textContent = "Hex = #c8423c";
        document.querySelector(".rgb").textContent = "RGB = 200, 66, 60";
        document.querySelector(".hsl").textContent = "Hsl = 3, 70%, 51%";
     });
     
     

     


     
  }