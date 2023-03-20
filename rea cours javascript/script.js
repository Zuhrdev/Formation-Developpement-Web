window.onload = function()
{
    var canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas);

    var context = canvas.getContext('2d');
    context.fillStyle = "#ff0000";
    context.fillRect(30, 30, 100, 50); // premier et seconde arguments = position depuis le coin haut gauche du canvas, deux seconds , largeur et hauteur 
}