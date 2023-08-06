//your parameter variables go here!

let night = true	  ; // if set false makes it day

let starNumber = 500;  //higher number more stars
let cloudNumber = 300; //higher more clouds
let smallClouds = true; 

let graySky = false	; //if set false sky is light blue

let moon = true;   
let sunny = true;  

let left_Mountain = true;

let gridSize = 200;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);  //DEVELOP_GLYPH //GRID_WALLPAPER //GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN); //NINE_PORTRAIT //NINE_LANDSCAPE
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = gridSize; 
  pWallpaper.grid_settings.cell_height = gridSize;
  pWallpaper.grid_settings.row_offset  = gridSize/2;
}
function paintStars()
      {
       
      fill(255,255,255);     //stars
      noStroke();

      for(let i = 0; i < starNumber; ++i){    
        
       
        
        let angle = Math.random()*Math.PI*2;
        let radius = Math.random()*gridSize/2 - gridSize/33;
        

        x = Math.cos(angle)*radius + gridSize/2;
        y = Math.sin(angle)*radius + gridSize/2;

        

        
        circle(x,y,gridSize/100);
  

      }
    }

function night_Lake_creation(r,g,b) 
    {
      strokeWeight(gridSize/33);
      stroke(r-10, g-16, b-5);    //lake colours
      fill(r, g, b);
    
    
    
      arc(gridSize/2, gridSize/2, gridSize, gridSize, 0,  180,);
          //  x           y            w          h      sta  stop
      line(gridSize - gridSize,gridSize/2, gridSize, gridSize/2 );
    }

function day_Lake_creation(r,g,b)
{
  strokeWeight(gridSize/33);
      stroke(r-10, g-16, b-5);    //lake colours
      fill(r, g, b);
    
    
    
      arc(gridSize/2, gridSize/2, gridSize, gridSize, 0,  180,);
          //  x           y            w          h      sta  stop
      line(gridSize - gridSize,gridSize/2, gridSize, gridSize/2 );
}

function mainCircle()
{
  ellipse(gridSize/2,gridSize/2,gridSize,gridSize);
}

function showMoon()
{
  stroke(240);       //240                //moon
  strokeWeight(gridSize/150);
  fill(255); //255
  
  circle(gridSize/3.2,gridSize/7,gridSize/10); //gridsize/7 //10
}

function moonMountain()
{
  stroke(191,193,253);
  strokeWeight(gridSize/40/1.5);
  fill(53, 54, 112);
  
  beginShape();
  
  vertex(gridSize/6,gridSize/2);
  vertex(gridSize/3,gridSize/2);
  vertex(gridSize/4,gridSize/5);
  vertex(gridSize/5.8,gridSize/5);
  

  vertex(gridSize/5.7,gridSize/5);
  vertex(gridSize/7,gridSize/3.2);
  vertex(gridSize/15,gridSize/2.7);
  vertex(gridSize/20,gridSize/2);
  
  endShape();

  stroke(41, 42, 89);
  strokeWeight(gridSize/36/1.5);
  
  line(gridSize/5.7,gridSize/5,gridSize/7,gridSize/3.2);

  line(gridSize/7,gridSize/3.2,gridSize/15,gridSize/2.7);
  line(gridSize/15,gridSize/2.7,gridSize/20,gridSize/2);
}
function mountain()
{
  stroke(50, 51, 89);
  strokeWeight(gridSize/40/1.5);
  fill(59,62,104);
  
  beginShape();
  
  vertex(gridSize/6,gridSize/2);
  vertex(gridSize/3,gridSize/2);
  vertex(gridSize/4,gridSize/5);
  vertex(gridSize/5.5,gridSize/5);
  vertex(gridSize/5.5,gridSize/5);

  
  vertex(gridSize/5.7,gridSize/5);
  vertex(gridSize/7,gridSize/3.2);
  vertex(gridSize/15,gridSize/2.7);
  
  vertex(gridSize/20,gridSize/2);
  
  endShape();
}

function sun()
{
  stroke(252, 246, 230);                       
  strokeWeight(gridSize/150);
  fill(252, 214, 124);
  
  ellipse(gridSize/3.2,gridSize/7,gridSize/10,gridSize/10);

}

function sunMountain()
{
  stroke(199, 125, 72);          //186, 151, 105
  strokeWeight(gridSize/40/1.5);
  fill(186, 151, 105);
  
  beginShape();
  
  vertex(gridSize/6,gridSize/2);
  vertex(gridSize/3,gridSize/2);
  vertex(gridSize/4,gridSize/5);
  vertex(gridSize/5.8,gridSize/5);
  

  vertex(gridSize/5.7,gridSize/5);
  vertex(gridSize/7,gridSize/3.2);
  vertex(gridSize/15,gridSize/2.7);
  vertex(gridSize/20,gridSize/2);
  
  endShape();

  stroke(171, 115, 60);
  strokeWeight(gridSize/36/1.5);
  
  line(gridSize/5.7,gridSize/5,gridSize/7,gridSize/3.2);

  line(gridSize/7,gridSize/3.2,gridSize/15,gridSize/2.7);
  line(gridSize/15,gridSize/2.7,gridSize/20,gridSize/2);
}

function dayMountain()
{
  stroke(199, 125, 72);          //186, 151, 105
  strokeWeight(gridSize/40/1.5);
  fill(186, 151, 105);
  
  beginShape();
  
  vertex(gridSize/6,gridSize/2);
  vertex(gridSize/3,gridSize/2);
  vertex(gridSize/4,gridSize/5);
  vertex(gridSize/5.8,gridSize/5);
  

  vertex(gridSize/5.7,gridSize/5);
  vertex(gridSize/7,gridSize/3.2);
  vertex(gridSize/15,gridSize/2.7);
  vertex(gridSize/20,gridSize/2);
  
  endShape();
}

function clouds()
{
  fill(255,255,255);     
      noStroke();

      for(let i = 0; i < cloudNumber; ++i){    
        
       
        
        let angle = Math.random()*Math.PI*2;
        let radius = Math.random()*gridSize/2 - gridSize/33;
        

        x = Math.cos(angle)*radius + gridSize/2;
        y = Math.sin(angle)*radius + gridSize/2;

        ellipse(x,y,gridSize/10,gridSize/25);
        if(smallClouds == true)
        {
          for(let c = 0; c < cloudNumber/120; ++c )
          {
            

            let angle = Math.random()*Math.PI*2;
            let radius = Math.random()*gridSize/2 - gridSize/20;
        

            x = Math.cos(angle)*radius + gridSize/2;
            y = Math.sin(angle)*radius + gridSize/2;

            circle(x,y,gridSize/20,);

          }

        }
        
  

      }
}

function wallpaper_background()         //Main function. Calls the other functions
{     
  if(night == true){
    
   background(0);
  }
  if(night == false){

    if(graySky == true)
    //background(230, 253, 255);
    background(170);
    else
    {
      background(230, 253, 255);
    }
    
  }

}




function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  if(night == true){

    strokeWeight(gridSize/33);
    
    //if(nightSky1 == false){
    //will be black and white

    //}
    //else if(nightSky1 == true){
      stroke(13, 28, 119);  
      fill(61, 63, 173); 
      
      mainCircle();
      paintStars();
      
      //}
      

      if(moon){
        
        showMoon();
  
        }

      if(left_Mountain == true){
      
      if(moon){
      moonMountain();
      
      }
      else{
      
      mountain();
      }
    
    }
    night_Lake_creation(44, 100, 180); //lake colour
  }
  else if(night == false){
    //if(day){
    //background(230, 253, 255);

    stroke(173, 255, 255);  
    fill(173, 255, 243); 
    
    mainCircle();

    if(sunny == true)
    {
      clouds();
      sun();
      if(left_Mountain == true)
      {
        sunMountain();
      }
      

    }
    else if(sunny == false)
    {
      clouds();
      
      if(left_Mountain == true)
      {
      dayMountain();
      }
    }

    
    day_Lake_creation(121, 224, 220);



  }
  
//wallpaper_background();      
  

  
}
