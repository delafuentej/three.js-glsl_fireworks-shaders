uniform sampler2D uTexture;
uniform vec3 uColor;

void main(){
    // to extract the color as vec4 textureColor from uTexture using texture() function;
    // as the texture is upside down we can play with gl_PointCoort but we are going to flip the texture in script.js
    // this textures are gray scale textures => we do not need the whole vec4(rgba)
    //vec4 textureColor = texture(uTexture, gl_PointCoord);
    //float textureAlpha = texture(1.0, 1.0, 1.0, gl_PointCoord).r;
    //Aplying uTexture:
     float textureAlpha = texture(uTexture, gl_PointCoord).r;
    

    //Final Color
   // gl_FragColor = textureColor;
   gl_FragColor = vec4(uColor, textureAlpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}