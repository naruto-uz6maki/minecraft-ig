var canvas=new fabric.Canvas('mycanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_img(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypress=e.keyCode;
if(e.shiftKey==true&&keypress=='80'){
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true&&keypress=='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(keypress=='38'){
    up();
}
if(keypress=='40'){
    down();
}
if(keypress=='37'){
    left();
}
if(keypress=='39'){
    right();
}
if(keypress=='87'){
    new_img("wall.jpg");
}
if(keypress=='71'){
    new_img("ground.png");
}
if(keypress=='76'){
    new_img("light_green.png");
}
if(keypress=='84'){
    new_img("trunk.png");
}
if(keypress=='82'){
    new_img("roof.jpg");
}
if(keypress=='89'){
    new_img("yellow_wall.png");
}
if(keypress=='68'){
    new_img("dark_green.png");
}
if(keypress=='85'){
    new_img("unique.png");
}
if(keypress=='67'){
    new_img("cloud.jpg");
}
}
function up(){
    if(player_y >=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >=0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x >=0){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}