/**
 * Created by Daniel Lopes on 24/01/2017.
 */
var objectCounter = 0;

function getObjectIndex() {
    return objectCounter++;
}

function getTextSize (object1)
{

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var fontname = object1.css("font-family");
    var fontsize = object1.css("font-size");
    ctx.font = fontsize + " " + fontname;
    var textWidth = ctx.measureText(object1.text()).width;
    return textWidth;

}

function objectResize(superClass,spam,input)
{
    var textSize = getTextSize(spam);
    superClass.width(textSize);
    input.width(textSize);
}

function createObject(objectId, objectIndex){


    $("#board").append("<div id='"+ objectId +"'></div>");

    $("#" + objectId).addClass("object_textbox");
    $("#" + objectId).draggable({cursor: "move"});


    return $("#" + objectId);

}

function myTextbox () {

    this.index = getObjectIndex();
    this.id="object" + this.index;
    this.objectType = "myTextbox";
    this.domObject = createObject(this.id,this.index);
    this.offSetTop = this.domObject.offset().top;
    this.offSetLeft = this.domObject.offset().left;
    this.top = this.domObject.position().top;
    this.left = this.domObject.position().left;

    this.domObject.append("<input type='text' value=''>");
    this.domObject.append("<spam></spam>");

    var input = this.domObject.find("input").hide();
    input.addClass("object_input");

    var spam  = this.domObject.find("spam").show();
    spam.html(this.id);

    var superClass = this.domObject;

    this.domObject.dblclick(function (e) {

        input.show();
        spam.hide();

        superClass.removeClass("object_textbox").addClass("object_textbox_edit");

        input.val(superClass.text());
    })
    this.domObject.on("keypress",function (e) {


        if (e.keyCode==13)
        {
            superClass.removeClass("object_textbox_edit").addClass("object_textbox");
            spam.html(input.val());
            spam.show();
            input.hide();

            var textSize = 0;
            textSize = getTextSize(spam);
            console.log(textSize);
            superClass.width(textSize);
            input.width(textSize);

            objectResize(superClass,spam,input);

        }

    })
    this.domObject.on("click",function (e) {

        //destaca o objeto selecionado.
        if (superClass.hasClass("object_selected"))
            superClass.removeClass("object_selected").addClass("object_unselected");
        else
            superClass.removeClass("object_unselected").addClass("object_selected");

    })
}

$("#newTextbox").click(function (e) {

    var obj = new myTextbox();

   // console.log(e);

});



