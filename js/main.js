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

               // append data to the array
               myArr.push(inputBioAdam);

               var pval = "";

               for(i = 0; i < myArr.length; i++)
               {
                   pval = pval + myArr[i] + "<br/>";
               }

               // display array data
               document.getElementById('pText').innerHTML = pval;
           }
