$(document).ready(function(){
         
  $(".add-row").click(function(){
    
    let name = $("#name").val();
    let age = $("#age").val();
    let occupation = $("#occupation").val();
    let education = $("#education").val();
    let markup = '<tr><td><input type="checkbox" name="record"></td><td>' + name + '</td><td>' + age + '</td><td>' + occupation + '</td><td>' + education + '</td><td>';
     
    $("tbody").append(markup);
    
    $('input[name=name').val('');
    $('input[name=age').val('');
    $('input[name=occupation').val('');
    $('input[name=education').val(''); 
     
  });
  
     $(".delete-row").click(function(){
       if (confirm("Are you sure?")) {
      $("table tbody").find('input[name="record"]').each(function(){
          if($(this).is(":checked")){
              $(this).parents("tr").remove();
          }
      });
    }  
  });
});

