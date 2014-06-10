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
        
        
                // ==========================
        // TEMPL - Projects Template  
        
        //test if contacts object exists
        if (retrievedBiz1.projects.length > 0) {
            // TEMPL - Project Template
            var projectTemplate = _.template(
                "<li class = 'comp'>" +
                "<aside><div title='Code: 0xe812' class='the-icons span3'><i class='icon-bookmark-empty'></i><span class='i-name'></span><span class='i-code'></span></div></aside>" +
                "<div>" +
                "<h3><%= jobName %></h3>" +
                "<p>Job Type: <%= jobType %></p>" +
                "<p> Date: <%= jobDate %></p>" +
                "<p> Status: <%= status %></p>" +
                "</div>" +
                "<aside>" +
                "<span class = 'show-detail'></span>" +
                "</aside>" +
                "</li>" +
                "</script>"
            );

            var projectItems = "";

            for (var i = 0; i < retrievedBiz1.projects.length; i++) {
                projectItems += projectTemplate(retrievedBiz1.projects[i]);
            };

            // output to html    
            $('#projectsList').html(projectItems);

        }
        
        // END TEMPL - Projects Template
        // ==============================
        

    }

});

