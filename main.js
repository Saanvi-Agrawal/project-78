var images=[
    "mom dad.png",
    "mom solo.png",
    "self.JPG",
    "sister.JPG",
    "brother.JPG"
];
var names=[
    "Mr.Sandeep Anand",
    "Mrs.Vaishali Anand",
    "Saanvi Agrawal",
    "Siddhi Agrawal",
    "Shaurya Agrawal"
];
var i=0;
function update(){
    i++;
    var number=4;
    if(i>number)
    {i=0;}
    var newimage=images[i];
    var newname=names[i];
    document.getElementById("family").src=newimage;
    document.getElementById("name").innerHTML=newname;
}