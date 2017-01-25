/**
 * Created by Daniel Lopes on 24/01/2017.
 */
var objectCounter = 0;

function getObjectIndex() {
    return objectCounter++;
}

function createObject(objectId, objectIndex){


    $("#board").append("<div id='"+ objectId +"' class=''>Objeto " + objectIndex +"</div>");

    $("#" + objectId).addClass("bg-primary");
    $("#" + objectId).addClass("object_textbox");
    $("#" + objectId).draggable({cursor: "move"});

    //$("#status").html(" Top : " + obj.top + ", Left :" + obj.left);
    //$("#status").append(obj);

//    var obj = new myTextbox(objectName,objectCounter);

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

    this.domObject.html("<input type='text' value=''>");
    var input = this.domObject.find("input").hide();
    var superClass = this;

    this.domObject.dblclick(function (e) {

        input.show();
        input.val(superClass.domObject.text());
    })
    this.domObject.on("keypress",function (e) {

            if (e.keyCode==13)
            {
                superClass.domObject.html(input.val());
                input.hide();
            }

    })

}


$("#newTextbox").click(function (e) {

    var obj = new myTextbox();

   // console.log(e);

});



