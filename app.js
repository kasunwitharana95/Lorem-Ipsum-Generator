const generateBtn = document.getElementById("generate_Btn");
const copyBtn = document.getElementById("copy_Btn");
const generatedPara = document.getElementById("para");

const apikey = "xne+YEpDUKvIM85UwTjnCQ==alewxUxigVIU9LzK";

let options = {
  method: "GET",
  headers: { "X-Api-Key": apikey },
};

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let generateParas = () => {
  let noOfParas = document.getElementById("no_of_para").value;
  let finalURL = url + noOfParas;
  fetch(finalURL, options)
    .then((response) => response.json())
    .then((data) => {
      generatedPara.innerText = data.text;
    });
};

generateBtn.addEventListener("click", generateParas);

//* Copy functionality
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(generatedPara.innerText);
  alert("Text copied!");
});
