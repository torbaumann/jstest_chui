//version 4
// V3 adds the member construction 
// V4 adds project construction

// 
// Utility functions
//


// ///////////////////////////////
// NEW Client BUTTON
// ///////////////////////////////
$(function () {
    // Attach event to 'goToNewClientButton' button:
    $("#goToNewClientButton").on("singletap", function () {
        $.UIGoToArticle("#newClientArticle");
    });
})


// ///////////////////////////////
// NEW BUSINESS BUTTON
// ///////////////////////////////
$(function () {
    // Attach event to 'goToNewBusinessButton' button:
    $("#goToNewBusinessButton").on("singletap", function () {
        $.UIGoToArticle("#newBusiness");
    });
})

// ///////////////////////////////
// SAVE BUSINESS BUTTON
// ///////////////////////////////
$(function () {
    // Attach event to 'saveNewBusinessButton' button:
    $("#saveNewBusinessButton").on("singletap", function () {
        $.UIGoBackToArticle("#busSetup");
    });
})


// ///////////////////////////////
// DELETE BUSINESS BUTTON
// ///////////////////////////////

function deleteBusiness() {

    //test if the myPerson object exists in local Storage
    if (localStorage.getItem("newBiz") !== null) {
        // delete the item 
        localStorage.removeItem("newBiz")

    }

}

// ///////////////////////////////
// NEW MEMBER BUTTON
// ///////////////////////////////
$(function () {
    // Attach event to 'goToNewMemberButton' button:
    $("#goToNewMemberButton").on("singletap", function () {
        $.UIGoToArticle("#newMemberArticle");
    });
})


// ///////////////////////////////
// NEW ENQUIRY BUTTON
// ///////////////////////////////
$(function () {
    // Attach event to 'goToEnquiryButton' button:
    $("#goToEnquiryButton").on("singletap", function () {
        $.UIGoToArticle("#newEnquiry");
    });
})






// ///////////////////////////////
// PAGELOAD CHECK
// check if a person already exists
// if so load it instead of waiting to re-enter
// ///////////////////////////////
window.onload = function () {

    //test if the myPerson object exists in local Storage
    if (localStorage.getItem("newBiz") !== null) {


        // read myPerson string back into an object
        var retrievedBiz = JSON.parse(localStorage.getItem('newBiz'));

        // build our html output
        busOutput = "<ul class='list' id='busSavedList'><li id='bizListItem' class='comp'><div><h3>" +
            retrievedBiz.name + "</h3>" + "<p>Tel: " +
            retrievedBiz.phone + "</p><p>Email: " +
            retrievedBiz.email + "</p><h3>Address</h3><p>Street: " +
            retrievedBiz.address.street + "</p><p>Suburb: " +
            retrievedBiz.address.suburb + "</p><p>City: " +
            retrievedBiz.address.city + "</p><p>State: " +
            retrievedBiz.address.state + "</p><p>Country: " +
            retrievedBiz.address.country + "</p><p>Postcode: " +
            retrievedBiz.address.postcode + "</p></div></li></ul>";

        // assign html output to div
        document.getElementById("businessOutputDiv").innerHTML = busOutput;

    }
};






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
//SAVE TO LOCALSTORAGE
// ///////////////////////////////
function updateStorage() {
    localStorage.setItem('newBiz', JSON.stringify(newBiz));
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
var theBiz = {};
var retrievedBizOutput = "";
var busMembersOutput = "";
var contactOutput = "";
var memberData = {};
var pname = "";
var ptype = "";
var cfname = "";
var clname = "";
var cphone = "";
var cemail = "";
var cstreet = "";
var csuburb = "";
var ccity = "";
var cstate = "";
var ccountry = "";
var cgender = "";
var memberData = "";


// ///////////////////////////////
// business constructor
// ///////////////////////////////
function NewBusiness() {

    newBiz.name = document.getElementById("biz_name_field").value;
    newBiz.phone = document.getElementById("biz_phone_field").value;
    newBiz.email = document.getElementById("biz_email_field").value;
    newBiz.address = {
        street: document.getElementById("street_address_field").value,
        suburb: document.getElementById("suburb_address_field").value,
        city: document.getElementById("city_address_field").value,
        state: document.getElementById("state_address_field").value,
        country: document.getElementById("country_address_field").value,
        postcode: document.getElementById("postcode_address_field").value
    };
    newBiz.members = [];
    newBiz.projects = [];
    newBiz.contacts = [];

    // call update storage function
    updateStorage();

    // build our html output
    busOutput = '<b>Business Name: </b>' + newBiz.name + '<br>' + '<b>Phone Number: </b>' + newBiz.phone + '<br><b>Email: </b>' + newBiz.email + '<br><b>Address</b><br><b>Street:</b> ' + newBiz.address.street + '<br><b>Suburb:</b> ' + newBiz.address.street + '<br><b>City:</b> ' + newBiz.address.city + '<br><b>State:</b> ' + newBiz.address.state + '<br><b>Country:</b> ' + newBiz.address.country + '<br><b>Postcode:</b> ' + newBiz.address.postcode + '<hr>';

    // assign html output to div
    document.getElementById("businessOutputDiv").innerHTML = busOutput;
}



// ///////////////////////////////
// new member constructor
// ///////////////////////////////
function NewMember() {
    bizmember = new Object();
    bizmember.firstName = document.getElementById("member_first_name_field").value;
    bizmember.lastName = document.getElementById("member_last_name_field").value;
    bizmember.fullName = bizmember.firstName + " " + bizmember.lastName;
    bizmember.phoneNumber = document.getElementById("member_phone_number_field").value;
    bizmember.email = document.getElementById("member_email_field").value;
    // add it to the newBiz.members array
    newBiz.members.push(bizmember);

    //call update storage function
    updateStorage();

    // build our html output
    busMembersOutput = '<b>Business Members</b>' + '<br><b>Name: </b>' + newBiz.members[0].fullName + '<br><b>Phone: </b>' + newBiz.members[0].phoneNumber + '<br><b>Email: </b>' + newBiz.members[0].email + '<hr>';

    // assign html output to div
    document.getElementById("membersOutputDiv").innerHTML = busMembersOutput;
}



// jquery
// get member data from form
// ///////////////////////////////


function makeNewMember() {
    memberData = $('#newMemberForm').formParams();

    theBiz.members.push(memberData);

    //call update storage function
    // updateStorage();

}



// ///////////////////////////////
//PROJECT CONSTRUCTOR
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
// PROJECT OBJECT FROM FORM
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
// EVENT CONSTRUCTOR
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


// ///////////////////////////////
//CONTACT CONSTRUCTOR
// ///////////////////////////////
function Contact(firstName, lastName, phoneNumber, email, street, suburb, city, state, country, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.firstName + " " + this.lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address.street = street;
    this.address.suburb = suburb;
    this.address.city = city;
    this.address.state = state;
    this.address.country = country;
    this.gender = gender;
    this.notes = [];
    this.id = createGuid();
}

// build contact object from form data
function newContact() {
    cfname = document.getElementById("contact_first_name_field").value;
    clname = document.getElementById("contact_last_name_field").value;
    cphone = document.getElementById("contact_phone_field").value;
    cemail = document.getElementById("contact_email_field").value;
    cstreet = document.getElementById("contact_street_field").value;
    csuburb = document.getElementById("contact_suburb_field").value;
    ccity = document.getElementById("contact_city_field").value;
    cstate = document.getElementById("contact_state_field").value;
    ccountry = document.getElementById("contact_country_field").value;
    cgender = document.getElementById("contact_gender_field").value;


    //call our Contact constructor
    var cont1 = new Contact(cfname, clname, cphone, cemail, cstreet, csuburb, ccity, cstate, ccountry, cgender);

    // add it to the newBiz.contacts array
    // contacts belong to the business object, not the project
    // even though we will call them from the project
    newBiz.contacts.push(cont1);

    //call update storage function
    updateStorage();

}



// ///////////////
// Templating
// ///////////////

$(document).ready(function () {
    var retrievedBiz1 = JSON.parse(localStorage.getItem('newBiz'));

    var template1 = _.template(
        "<li class = 'comp'>" +
        "<div>" +
        "<h3><%= name %></h3>" +
        "<p>Tel: <%= tel %></p>" +
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
        memberItems += template1(retrievedBiz1.members[i]);
    }



    $('#busMembersList').html(memberItems);

});