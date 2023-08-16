import React from "react";

function AdminHeader(){

    return (
        <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <a class="navbar-brand" href="/AdminPanel">Zoo management system</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    
     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
     <li class="nav-item ">
         <a class="nav-link" href="/">Home</a>
       </li>
       <li class="nav-item ">
         <a class="nav-link" href="/attemptquestion">Take a quiz </a>
       </li>
       <li class="nav-item active">
         <a class="nav-link" href="/viewevent"><span class="sr-only">(current)</span>Events</a>
       </li>
      
     </ul>
     
     <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
       <li class="nav-item">
         <a class="nav-link" href="/user">User</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/signin">Sign In</a>
       </li>
     </ul>

   </div>
 </nav>
 </div>

    );
}

export default AdminHeader;