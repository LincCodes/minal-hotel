
<body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="54">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
        <div class="container"><a class="navbar-brand" href="/">Minal Hotel</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto text-uppercase">
                    <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                    <li class="nav-item"><a class="nav-link" href="#rooms">ROOMS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#photos">PHOTOS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
                </ul><a class="btn btn-primary" href="/login">LOGIN</a>
            </div>
        </div>
    </nav>
    <header class="masthead" style="background-image:url('back.jpg');background-position:top center;">
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in"><span><strong>Welcome To Minal Hotel Online Booking!</strong></span></div>
                <div class="intro-heading text-uppercase"><span>Providing the best of services</span></div><a class="btn btn-primary btn-xl text-uppercase" role="button" href="#book">BOOK NOW!</a>
            </div>
        </div>
    </header>
    <section id="rooms" class="article-list" style="padding: 50px 0;">
        <div class="container">
            <div class="intro">
                <h1 class="text-center">ROOMS</h1>
                <p class="text-center">Check out our rooms and their corresponding pricing</p>
            </div>
            <div class="row articles" style="padding: 0;">
                <div class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="single.jpg"></a>
                    <h3 class="name">Single</h3>
                    <p class="description">$100</p>
                </div>
                <div class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="fam.jpg"></a>
                    <h3 class="name">Family</h3>
                    <p class="description">$250</p>
                </div>
                <div class="col-sm-6 col-md-4 item"><a href="#"><img class="img-fluid" src="pres.jpg"></a>
                    <h3 class="name">Presidential</h3>
                    <p class="description">$400</p>
                </div>
            </div>
        </div>
    </section>
    <div class="container" id="photos" style="padding: 0;padding-bottom: 50px;">
        <h1 class="text-center">Photos</h1>
        <div class="simple-slider" style="padding-top: 20px;">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background: url(1.jpg) center center / cover no-repeat;"></div>
                    <div class="swiper-slide" style="background: url(2.jpg) center center / cover no-repeat;"></div>
                    <div class="swiper-slide" style="background: url(3.jpg) center center / cover no-repeat;"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
    <section id="book" class="contact-clean">
        <form method="post">
            <h2 class="text-center">Make a Reservation</h2>
            <div class="mb-3"><label class="form-label">Name:</label><input class="form-control" type="text" name="name" placeholder="Enter your name..."></div>
            <div class="mb-3"><label class="form-label">Email:</label><input class="form-control" type="email" name="email" placeholder="Enter your email..."></div>
            <div class="mb-3"><label class="form-label">Phone:</label><input class="form-control" type="tel" name="phone" placeholder="Enter your phone no..."></div>
            <div class="mb-3"><label class="form-label">Check-in</label><input class="form-control" type="date"></div>
            <div class="mb-3"><label class="form-label">Check-out</label><input class="form-control" type="date"></div>
            <div class="mb-3"><label class="form-label">Adults:</label><input class="form-control" type="number" name="phone" placeholder="0" value="0" min="0"></div>
            <div class="mb-3"><label class="form-label">Children:</label><input class="form-control" type="number" name="phone" placeholder="0" value="0" min="0"></div>
            <div class="mb-3"><button class="btn btn-primary" type="submit">send </button></div>
        </form>
    </section>
    <footer class="footer-basic">
        <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Home</a></li>
            <li class="list-inline-item"><a href="#">Services</a></li>
            <li class="list-inline-item"><a href="#">About</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Minal Hotel © 2022</p>
    </footer>
</body>