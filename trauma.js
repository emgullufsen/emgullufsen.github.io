// Eric Gullufsen

const chapters_array = [
  {
    text: "Relationship Building"
  },
  {
    text: "Policy Considerations"
  },
  {
    text: "Planning and Coordination of Schoolwide Efforts"
  },
  {
    text: "Deconstructing Trauma"
  },
  {
    text: "Professional Learning"
  },
  {
    text: "Schoolwide Practices and Climate"
  },
  {
    text: "Skill Instruction"
  },
  {
    text: "Support Services"
  },
  {
    text: "Cultural Integration and Community Co-creation"
  },
  {
    text: "Family Partnership"
  },
  {
    text: "Self-care"
  }
];

var div = 360 / 11;
var radius = 200;
var parentdiv = document.getElementById('parentdiv');
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2); //assumes parent is square
var offsetToChildCenter = 50; //
var totalOffset = offsetToParentCenter - offsetToChildCenter; // edge-to-edge
for (var i = 1; i <= 11; ++i) {
  var childdiv = document.createElement('div');
  childdiv.className = 'div2';
  childdiv.style.position = 'absolute';
  var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
  var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
  childdiv.style.top = (y + totalOffset).toString() + "px";
  childdiv.style.left = (x + totalOffset).toString() + "px";
  
  //childdiv.style.backgroundImage = 'url("./images/background.jpg")';
  
  var grandchilddiv = document.createElement('div');
  grandchilddiv.className = 'div3';
  grandchilddiv.innerText = chapters_array[i-1].text;
  
  parentdiv.appendChild(childdiv);
  childdiv.appendChild(grandchilddiv);
}