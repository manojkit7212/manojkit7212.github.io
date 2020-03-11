



$.getJSON('./resources/data/data.json', function (data) {
  $('#name').append('<span>' + data.name + '</span>');
  $('#designation').append('<span>' + data.designation + '</span>');
  $('#department').append('<span>' + data.department + '</span>');
  $('#college').append('<span>' + data.college + '</span>');
  education = data.education
  education.sort(function (a, b) {
    return a.year - b.year;
  }
  );
  education.reverse()
  $.each(education, function (key, value) {
    $('#educationtimeline').append(
      '<li><span class="bl">' + education[key].name + ' </span> \
                  <span href="#" class="float-right bl">'+ education[key].year + '</span><br> \
                  <span>' + education[key].schoolname + '</span> <br> \
		  <span>' + education[key].Percentage + '</span></li>');
  });

  experience=data.experience
  experience.sort(function (a, b) {
    return a.From - b.From;
  }
  );
  
  $.each(experience, function (key, value) {
    $('#experiencetimeline').append(
      '<li><span class="bl">' + experience[key].Name + ' </span> \
                  <span href="#" class="float-right bl">'+ experience[key].From + ' - '+experience[key].To +'</span><br> \
                  <span>' + experience[key].Designation + '</span> <br> \
		  <span>' + experience[key].Department + '</span></li>');
  });
  
  $.each(data.publications, function (key, value) {
   
    $('#publication').append(
      
      '<li class="list-group-item">'+data.publications[key]+'</li>'
    );
  });

  $.each(data.skills, function (key, value) {
   
    $('#skill').append(      
      '<tr><td>'+data.skills[key].name+'</td><td>:</td><td>'+data.skills[key].value+'</td><tr>'
    );
  });




});




