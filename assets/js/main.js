let CURRENT_PAGE = 0;

function Change(page)
{
    let breadcrumbs = document.querySelectorAll('#breadcrumbs');
    let title = document.querySelectorAll('#title');
    let description = document.querySelectorAll('#description');

    if (page == 0)
    {
        breadcrumbs[0].innerHTML = "Innovations";
        title[0].innerHTML = "Welder";
        description[0].innerHTML = "Industrial high energy X-ray and E-beam applications and inspections up to 600kV.";
        ActiveColor(0);
    }
    else if (page == 1)
    {
        breadcrumbs[0].innerHTML = "Applications";
        title[0].innerHTML = "Radiology Equipment";
        description[0].innerHTML = "Cutting-edge radiology equipment for medical diagnosis, including MRI, CT, and PET scanners.";
        ActiveColor(1);
    }
    else if (page == 2)
    {
        breadcrumbs[0].innerHTML = "Products";
        title[0].innerHTML = "NanoCoating Solution";
        description[0].innerHTML = "Advanced nanotechnology coating solution for enhanced surface protection and durability.";
        ActiveColor(2);
    }
    else if (page == 3)
    { 
        breadcrumbs[0].innerHTML = "Technology";
        title[0].innerHTML = "Advanced Materials";
        description[0].innerHTML = "Cutting-edge materials for aerospace, automotive, and electronic applications, engineered for optimal performance.";
        ActiveColor(3);
    }
    else if (page == 4)
    {
        breadcrumbs[0].innerHTML = "All Categories";
        title[0].innerHTML = "Comprehensive Offerings";
        description[0].innerHTML = "Browse through our complete range of products, technologies, and applications across various industries.";
        ActiveColor(4);
    }
}

function ActiveColor(page)
{
    ShowVideos(page);
    CURRENT_PAGE = page;

    for (let i = 0; i <= 4; i++) 
    {
        let elements = document.querySelectorAll('#i' + i);
        elements.forEach(function(element) 
        {
            element.classList.remove('active');
        });
    }

    if (page == 0 || page == 1 || page == 2 || page == 3 || page == 4)
    {
        let elements = document.querySelectorAll('#i' + page);
        elements.forEach(function(element) 
        {
            element.classList.add('active');
        });
    }
}

function ChangePrev()
{
    if (CURRENT_PAGE == 0)
    {
        ActiveColor(4);
        Change(4);
    }
    else
    {
        ActiveColor(CURRENT_PAGE - 1);
        Change(CURRENT_PAGE);
    }
}

function ChangeNext()
{
    if (CURRENT_PAGE == 4)
    {
        ActiveColor(0);
        Change(0);
    }
    else
    {
        ActiveColor(CURRENT_PAGE + 1);
        Change(CURRENT_PAGE);
    }
}

function NoneOther()
{
    let elements = document.querySelectorAll('#new, #applications, #products, #technology');
    elements.forEach(function(element) 
    {
        element.style.display = "none";
    });
}

function ShowVideos(page)
{
    if (page == 0)
    {
        NoneOther();
        let elements = document.querySelectorAll('#new');
        elements.forEach(function(element) 
        {
            element.style.display = "block";
        });
    }
    else if (page == 1)
    {
        NoneOther();
        let elements = document.querySelectorAll('#applications');
        elements.forEach(function(element) 
        {
            element.style.display = "block";
        });
    }
    else if (page == 2)
    {
        NoneOther();
        let elements = document.querySelectorAll('#products');
        elements.forEach(function(element) 
        {
            element.style.display = "block";
        });
    }
    else if (page == 3)
    {
        NoneOther();
        let elements = document.querySelectorAll('#technology');
        elements.forEach(function(element) 
        {
            element.style.display = "block";
        });
    }
    else if (page == 4)
    {
        let elements = document.querySelectorAll('#new, #applications, #products, #technology');
        elements.forEach(function(element) 
        {
            element.style.display = "block";
        });
    }
}