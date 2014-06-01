//version 4
// V3 adds the member construction 
// V4 adds project construction

// 
// Utility functions
//


// ///////////////////////////////
// BUTTONS
// ///////////////////////////////


// =======================
// NEW BUSINESS BUTTON
// =======================
$(function () {
    // Attach event to 'goToNewBusinessButton' button:
    $("#goToNewBusinessButton").on("singletap", function () {
        $.UIGoToArticle("#newBusiness");
    });
})


// =======================
// SAVE BUSINESS BUTTON
// =======================
$(function () {
    // Attach event to 'saveNewBusinessButton' button:
    $("#saveNewBusinessButton").on("singletap", function () {
        $.UIGoBackToArticle("#busSetup");
    });
})


// =======================
// DELETE BUSINESS BUTTON
// =======================
function deleteBusiness() {

    //test if the myPerson object exists in local Storage
    if (localStorage.getItem("newBiz") !== null) {
        // delete the item 
        localStorage.removeItem("newBiz")

    }

}


// =======================
// NEW MEMBER BUTTON
// =======================
$(function () {
    // Attach event to 'goToNewMemberButton' button:
    $("#goToNewMemberButton").on("singletap", function () {
        $.UIGoToArticle("#newMemberArticle");
    });
})


// =======================
// SAVE NEW MEMBER BUTTON
// =======================
$(function () {
    // Attach event to 'goToNewMemberButton' button:
    $("#saveMemberButton").on("singletap", function () {
        location.reload();
        $.UIGoToArticle("#busMembersSetup");
    });
})


// ==================
// NEW PROJECT BUTTON
// ==================
$(function () {
    // Attach event to 'goToNewProjectButton' button:
    $("#goToNewProjectButton").on("singletap", function () {
        $.UIGoToArticle("#newProjectArticle");
    });
})


// ==================
// NEW Client BUTTON
// ==================
$(function () {
    // Attach event to 'goToNewClientButton' button:
    $("#goToNewClientButton").on("singletap", function () {
        $.UIGoToArticle("#newClientArticle");
    });
})


// =======================
// SAVE NEW CLIENT BUTTON
// =======================
$(function () {
    // Attach event to 'goToNewMemberButton' button:
    $("#saveClientButton").on("singletap", function () {
        location.reload();
        $.UIGoToArticle("#clients");
    });
})


// ///////////////////////////////
// PAGELOAD CHECK
// check if a person already exists
// if so load it instead of waiting to re-enter
// ///////////////////////////////
window.onload = function () {

    //test if the myPerson object exists in local Storage
    if (localStorage.getItem("theBiz") !== null) {


        // read myPerson string back into an object
        retrievedBiz = JSON.parse(localStorage.getItem('theBiz'));

        // build our html output
        busOutput = "<ul class='list' id='busSavedList'><li id='bizListItem' class='comp'><div><h3>" +
            retrievedBiz.business.name + "</h3>" + "<p>Tel: " +
            retrievedBiz.business.phone + "</p><p>Email: " +
            retrievedBiz.business.email + "</p><h3>Address</h3><p>Street: " +
            retrievedBiz.business.address.street + "</p><p>Suburb: " +
            retrievedBiz.business.address.suburb + "</p><p>City: " +
            retrievedBiz.business.address.city + "</p><p>State: " +
            retrievedBiz.business.address.state + "</p><p>Country: " +
            retrievedBiz.business.address.country + "</p><p>Postcode: " +
            retrievedBiz.business.address.postcode + "</p></div></li></ul>";

        // assign html output to div
        document.getElementById("businessOutputDiv").innerHTML = busOutput;

        theBiz = retrievedBiz

    }
}






// ///////////////////////////////
// GUID CONSTRUCTOR
// our function to generate unique guids
// ///////////////////////////////
function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


// ///////////////////////////////
// SAVE TO LOCALSTORAGE
// ///////////////////////////////
function updateStorage() {
    localStorage.setItem('theBiz', JSON.stringify(theBiz));
}


// ///////////////////////////////
// HIDE ELEMENTS
// ///////////////////////////////
function hide(obj) {
    var el = document.getElementById(obj);
    if (el.style.display !== 'none' || el.style.display === null) {
        el.style.display = 'none';
    }

}


// ///////////////////////////////
// SHOW ELEMENTS
// ///////////////////////////////
function show(obj) {
    var el2 = document.getElementById(obj);
    if (el2.style.display !== 'block' || el.style.display === null) {
        el2.style.display = 'block';
    }

}



// ///////////////////////////////
// LOGIC functions
// ///////////////////////////////


// ///////////////////////////////
// DEFINE VARS
// ///////////////////////////////
var busOutput = "";



var retrievedBizOutput = "";
var busMembersOutput = "";
var contactOutput = "";
var memberData = {};
var pname = "";
var ptype = "";

var memberData = "";
var clientData = "";
// var retrievedBiz = "";
// var theBiz = retrievedBiz;




// ///////////////////////////////
// jquery
// make NEW BUSINESS from form data
// ///////////////////////////////
function makeNewBusiness() {

    var businessData = $('#newBusinessForm').formParams();

    theBiz = businessData;
    theBiz.members = [];
    theBiz.projects = [];
    theBiz.contacts = [];

    // call update storage function
    updateStorage();

    // This needs to be templatised
    // build our html output
    busOutput = '<b>Business Name: </b>' + theBiz.business.name + '<br>' + '<b>Phone Number: </b>' + theBiz.business.phone + '<br><b>Email: </b>' + theBiz.business.email + '<br><b>Address</b><br><b>Street:</b> ' + theBiz.business.address.street + '<br><b>Suburb:</b> ' + theBiz.business.address.suburb + '<br><b>City:</b> ' + theBiz.business.address.city + '<br><b>State:</b> ' + theBiz.business.address.state + '<br><b>Country:</b> ' + theBiz.business.address.country + '<br><b>Postcode:</b> ' + theBiz.business.address.postcode + '<hr>';

    // assign html output to div
    document.getElementById("businessOutputDiv").innerHTML = busOutput;

}


// ///////////////////////////////
// jquery
// get MEMBER data from form
// ///////////////////////////////


function makeNewMember() {
    memberData = $('#newMemberForm').formParams();
    
    memberData.name.full = memberData.name.first + " " + memberData.name.last;

    // push to our theBiz object members array
    theBiz.members.push(memberData);

    //call update storage function
    updateStorage();

    // build our html output


}


// ///////////////////////////////
// jquery
// get CLIENT data from form
// ///////////////////////////////


function makeNewClient() {
    clientData = $('#newClientForm').formParams();

    clientData.name.full = clientData.name.first + " " + clientData.name.last;
    
    // push to our theBiz object members array
    theBiz.contacts.push(clientData);
    
    // TODO sort the contacts array before punching
    // to localstorage
   //  _.sortBy(data, function(o) {return o.name.last; })

    //call update storage function
    updateStorage();

    // build our html output


}


// ////////////////////////////////////////////
//%PROJECT - Populate PROJECT form contact select data
// ////////////////////////////////////////////

// get the data into an array
// var selectListArray = _.map(retrievedBiz.contacts, function(currentObject) { return _.pick(currentObject, 'name')})







// ///////////////////////////////
//%PROJECT CONSTRUCTOR
// ///////////////////////////////
function Project(projectName, projectType) {
    this.projectId = createGuid();
    this.projectName = projectName;
    this.projectType = projectType;
    this.projectContacts = [];
    this.projectEvents = [];
    this.projectTasks = [];
    // The available stages. write code for user to create custom stages and sort the order
    this.projectStages = ["Enquiry", "Preparation", "Showtime", "Post Production", "Distribution"];
    // The current project stage value
    this.currentStage = this.projectStages[0];
    // A method to change the current project stage. 
    // Rewrite to build dynamically from projectStages
    this.stageChanger = function (selectedStage) {
        switch (selectedStage) {
        case "Enquiry":
            this.currentStage = this.projectStages[0];
            break;
        case "Preparation":
            this.currentStage = this.projectStages[1];
            break;
        case "Showtime":
            this.currentStage = this.projectStages[2];
            break;
        case "Post Production":
            this.currentStage = this.projectStages[3];
            break;
        case "Distribution":
            this.currentStage = this.projectStages[4];
            break;
        }
    }
}



// example usage
// newBiz.projects[0].stageChanger("Showtime")
// console.log(newBiz.projects[0].currentStage)
// >> Showtime 



// ///////////////////////////////
// %PROJECT OBJECT FROM FORM
// ///////////////////////////////
function newProject() {
    pname = document.getElementById("project_name_field").value;
    ptype = document.getElementById("project_type_field").value;
    var proj1 = new Project(pname, ptype);

    // add it to the newBiz.projects array
    newBiz.projects.push(proj1);

    //call update storage function
    updateStorage();

    // build our html output
    projOutput = '<b>Project</b>' + '<br><b>Name: </b>' + proj1.projectName + '<br><b>Type: </b>' + proj1.projectType + '<br><b>Stages: </b>' + proj1.projectStages + '<hr>';

    // assign html output to div
    document.getElementById("projectOutputDiv").innerHTML = projOutput;
}


// ///////////////////////////////
// %EVENT CONSTRUCTOR
// ///////////////////////////////
function Event(eventName, eventType, eventDate) {
    this.eventName = eventName;
    this.eventType = eventType;
    this.eventDate = eventDate;
    this.id = createGuid();
}

function newEvent() {
    ename = document.getElementById("event_name_field").value;
    etype = document.getElementById("event_type_field").value;
    edate = document.getElementById("event_date_field").value;

    // call our Event constructor
    var event1 = new Event(ename, etype, edate);


    // add it to the newBiz.projects array
    // contacts belong to the business object, not the project
    // even though we will call them from the project
    newBiz.projects.push(cont1);
}




// ///////////////
// %Templating
// ///////////////



$(document).ready(function () {
    if (localStorage.getItem("theBiz") !== null) {
        var retrievedBiz1 = JSON.parse(localStorage.getItem('theBiz'));

        
        // ========================
        // TEMPL - Members Template
        var memberTemplate = _.template(
            "<li class = 'comp'>" +
            "<div>" +
            "<h3><%= name.full %></h3>" +
            "<p>Tel: <%= phone %></p>" +
            "<p> Email: <%= email %></p>" +
            "</div>" +
            "<aside>" +
            "<span class = 'show-detail'></span>" +
            "</aside>" +
            "</li>" +
            "</script>"
        );

        var memberItems = "";

        for (var i = 0; i < retrievedBiz1.members.length; i++) {
            memberItems += memberTemplate(retrievedBiz1.members[i]);
        };

        // output to html
        $('#busMembersList').html(memberItems);

        // END TEMPL - Members Template
        // ============================
        
        
        // ==========================
        // TEMPL - Contacts Template       
        //test if contacts object exists
        if (retrievedBiz1.contacts.length > 0) {
            // TEMPL - Contact Template
            var contactTemplate = _.template(
                "<li class = 'comp'>" +
                "<div>" +
                "<h3><%= name.first %> <%= name.last %></h3>" +
                "<p>Tel: <%= phone.mobile %></p>" +
                "<p> Email: <%= email %></p>" +
                "</div>" +
                "<aside>" +
                "<span class = 'show-detail'></span>" +
                "</aside>" +
                "</li>" +
                "</script>"
            );

            var contactItems = "";

            for (var i = 0; i < retrievedBiz1.contacts.length; i++) {
                contactItems += contactTemplate(retrievedBiz1.contacts[i]);
            };

            // output to html    
            $('#clientsList').html(contactItems);

        }
        
        // END TEMPL - Contacts Template
        // ==============================

    }

});

