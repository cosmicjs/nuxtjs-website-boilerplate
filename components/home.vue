<template>
  <div>
      <div class="container-fluid">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
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
        </div>
        <div class="row">
            <div class="col-sm-12 text-center mt-10">
                <h1>Medicenter Cares for You</h1>
                <p>We offer services for any patient that needs to get well</p>
            </div>
        </div>
  </div>
</template>
