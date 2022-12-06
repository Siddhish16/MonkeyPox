let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let final_points=0;
if(user_points<=60){
    final_points="  You Do not Have High Chance of Getting Affected"
}
else{
    final_points=" You are at a high risk of getting affected"
}
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = final_points;