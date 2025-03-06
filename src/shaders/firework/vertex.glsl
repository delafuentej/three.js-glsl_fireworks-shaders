uniform float uSize;
uniform vec2 uResolution;
uniform float uProgress;

attribute float aSize;
attribute float aTimeMultiplier;

#include ../includes/remap.glsl

void main(){
    //creation a new progress
    float progress = uProgress * aTimeMultiplier;
    // update the position of the particles: newPosition 
    vec3 newPosition = position;

     //REMAP uProgress: 
     //1. EXPLODING Phase: between 0.0 and 0.1
     //float explodingProgress = remap(uProgress, 0.0, 0.1, 0.0, 1.0);
     float explodingProgress = remap(progress, 0.0, 0.1, 0.0, 1.0);
     //we need to clamp the value right after the remap:(containment after particle explosion)
     explodingProgress = clamp(explodingProgress, 0.0, 1.0);
     //to speed up the animation at the beginning and to slow down before reaching the end of transition: 1- pow(1-x)
     explodingProgress = 1.0 - pow( 1.0 - explodingProgress, 3.0);
     // we need to move the particles using explodingProgress:
     newPosition *= explodingProgress;

    //2. FALLING Phase: 
    //float fallingProgress = remap(uProgress, 0.1, 1.0, 0.0, 1.0);
     float fallingProgress = remap(progress, 0.1, 1.0, 0.0, 1.0);
    fallingProgress = clamp(fallingProgress, 0.0, 1.0);
    //to fall down fast and slow down
    fallingProgress = 1.0 - pow( 1.0 - fallingProgress, 3.0);
    newPosition.y -= fallingProgress * 0.2;

    //3. SCALING Phase: 
    //float sizeOpeningProgress = remap(uProgress, 0.0, 0.125, 0.0, 1.0);
     float sizeOpeningProgress = remap(progress, 0.0, 0.125, 0.0, 1.0);
   // float sizeClosingProgress = remap(uProgress, 0.125, 1.0, 1.0, 0.0);
    float sizeClosingProgress = remap(progress, 0.125, 1.0, 1.0, 0.0);
    // to get the min of the two values
    float sizeProgress = min(sizeOpeningProgress, sizeClosingProgress);
    // to clamp sizeProgress between 0 ans 1
    sizeProgress = clamp(sizeProgress, 0.0, 1.0);

    //4. TWINKLING Phase:
   //float twinklingProgress = remap(uProgress, 0.2, 0.8, 0.0, 1.0);
     float twinklingProgress = remap(progress, 0.2, 0.8, 0.0, 1.0);
    twinklingProgress = clamp(twinklingProgress, 0.0, 1.0);
    //put the twinklingProgress aside a try to make the particles twingle  all the time
    // to become a value from  0 to 1 => * 0.5 + 0.5
   // float sizeTwinkling = sin(uProgress * 30.0)  * 0.5 + 0.5;
     float sizeTwinkling = sin(progress * 30.0)  * 0.5 + 0.5;
    //Combination the twinklingProgress with the sizeTwinkling
     sizeTwinkling = 1.0 - sizeTwinkling * twinklingProgress;


    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);

   //we want the particles to twinkle a little after the particles start to scale down=>
   //the particles scale up and down quite fast
   // as if the fire burning them was fading out uncontrollably



    //vec4 modelPosition = modelMatrix * vec4(position, 1.0);
 
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    //Final Position
    gl_Position = projectedPosition;

    //Final Size
    //  uResolution.y because the field of view is vertical,  not horizontal (most cases)
    gl_PointSize = uSize * uResolution.y * aSize * sizeProgress * sizeTwinkling;
    // adding perspective to the particles:
    gl_PointSize *= 1.0 / - viewPosition.z;

    if(gl_PointSize < 1.0) gl_Position = vec4(9999.9);
}