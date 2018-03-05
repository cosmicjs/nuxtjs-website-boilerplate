<template>
  <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top:-20px;">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                <div class="item active">
                    <img src="~/static/bg1.jpg" alt="Los Angeles" style="width:100%; height:500px;">
                </div>

                <div class="item">
                    <img src="~/static/bg2.jpg" alt="Chicago" style="width:100%; height:500px;">
                </div>
                
                <div class="item">
                    <img src="~/static/bg3.jpg" alt="New york" style="width:100%; height:500px;">
                </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        <div class="row">
            <div class="col-sm-12 text-center" style="margin-top:30px; margin-bottom:50px;">
                <p class="h1">Medicenter Cares for You</p>
                <p class="h4">We offer services for any patient that needs to get well</p>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="col-sm-4 text-center">
                    <p class="h3" style="margin-bottom:30px;">Our Services</p>
                    <img class="img-circle" height="300px;" width="300px;" src="~/static/bg1.jpg" alt="">
                    <p style="margin-top:30px;">
                        Aerobic activity alcoholism animal dander 
                        arthritis body type certified diabetes educators
                         (cdes) diagnosis ear canal external otitis genes 
                         glucagon growth hormone hormone ibuprofen joints 
                         keratin ketones myopia nebulizer optometrist retina 
                         rheumatologist sternutation varicella zoster violence virus.
                    </p>
                </div>
                <div class="col-sm-4 text-center">
                    <p class="h3" style="margin-bottom:30px;">Patient Care</p>
                    <img class="img-circle" height="300px;" width="300px;" src="~/static/bg1.jpg" alt="">
                    <p style="margin-top:30px;">
                        Aerobic activity alcoholism animal dander 
                        arthritis body type certified diabetes educators
                         (cdes) diagnosis ear canal external otitis genes 
                         glucagon growth hormone hormone ibuprofen joints 
                         keratin ketones myopia nebulizer optometrist retina 
                         rheumatologist sternutation varicella zoster violence virus.
                    </p>
                </div>
                <div class="col-sm-4 text-center">
                    <p class="h3" style="margin-bottom:30px;">Patient Reviews</p>
                   <img class="img-circle" height="300px;" width="300px;" src="~/static/bg1.jpg" alt="">
                   <p style="margin-top:30px;">
                        Aerobic activity alcoholism animal dander 
                        arthritis body type certified diabetes educators
                         (cdes) diagnosis ear canal external otitis genes 
                         glucagon growth hormone hormone ibuprofen joints 
                         keratin ketones myopia nebulizer optometrist retina 
                         rheumatologist sternutation varicella zoster violence virus.
                    </p>
                </div>
            </div>
        </div>
        <div class="row" style="margin-bottom:30px;">
            <div class="col-sm-12 text-center" style="margin-top:50px;">
                <p class="h1">Talk to a Medicenter Specialist</p>
                <p class="h4">Let’s Get Started!</p>
                <br>
                <button class="btn btn-default">Contact Us</button>
            </div>
        </div>
  </div>
</template>
