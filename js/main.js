//create jar, name jar, place string in jar
//var firstName = "Marco";

//alert is method(built in function in JS)
//alert("Hello" + firstName);

//modern JS
//alert(`Hello ${firstName}`);

//console.log("Hello" + firstName);

console.log("Java Script Linked Up");

// create an array
           var myArr = ["Adam Goarley" + " " + "My name is Adam Goarley. I'm an 18 years old born in London, Ontario but raised in the small town of Ilderton, Ontario. I run a wedding photography business that I started when I was 14. I mostly just do photos of weddings but have just started also doing video. I also really love sailing! I have been sailing for over 8 years and have sailed all over ontario and just recently completed my first professional sailing event in Saint Barths."];

           function pushData()
           {
               // get value from the input text
               var inputText = document.getElementById('inputBioAdam').value;
               var x = document.getElementById("adamPhoto");

               // append data to the array
               myArr.push(inputBioAdam);

               var pval = "";

               for(i = 0; i < myArr.length; i++)
               {
                   pval = pval + myArr[i] + "<br/>";
               }


               if (x.style.display === "none") {
               x.style.display = "block";
                } else {
               x.style.display = "none";

               // display array data
               document.getElementById('pText').innerHTML = pval;
           }
        }




           // create an array 2
                      var lucasArr = ["Lucas" + "" + "My name is Lucas Mastroianni. I am 20 years old born in London, Ontario, but from a small town just outside of London, called Dorchester. I love sports - especially hockey. I have been playing since I was four years-old and I am also a big fan of the Toronto Maple Leafs. In my spare time, I like listening to music and playing guitar. I just recently started, but would love to be able to play old rock tunes in the future. That's all for now, thanks for reading! "];

                      function pushData2()
                      {
                          // get value from the input text
                          var inputText2 = document.getElementById('inputBioLucas').value;

                          // append data to the array
                          lucasArr.push(inputBioLucas);

                          var pval = "";

                          for(i = 0; i < lucasArr.length; i++)
                          {
                              pval = pval + lucasArr[i] + "<br/>";
                          }

                          // display array data
                          document.getElementById('text').innerHTML = pval;
                      }
