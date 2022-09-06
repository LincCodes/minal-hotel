<script>

    import { supabase } from '../supabaseClient'
    import {goto} from '$app/navigation';
    
        // @ts-ignore
    async function signup(e) {

        const email = e.target.email.value;
        const password = e.target.password.value;
        const pass = e.target.pass.value;
        if(password==pass){
            const { user, error } = await supabase.auth.signUp({email,password,})
            console.log("user",user);
            console.log("error",error);
            goto("/")
        }
        
    }
</script>

<body>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark" id="mainNav">
        <div class="container"><a class="navbar-brand" href="/">Minal Hotel</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto text-uppercase">
                    <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"><a class="nav-link" href="#">ABOUT</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">CONTACT</a></li>
                </ul><a class="btn btn-primary" href="/login">LOGIN</a>
            </div>
        </div>
    </nav>
    <section class="register-photo">
        <div class="form-container">
            <div class="image-holder"></div>
            <form on:submit|preventDefault={signup}>
                <h2 class="text-center">CREATE AN ACCOUNT</h2>
                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email"></div>
                <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Password"></div>
                <div class="mb-3"><input class="form-control" type="password" name="pass" placeholder="Confirm Password"></div>
                <div class="mb-3">
                    <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox">I agree to the license terms.</label></div>
                </div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Sign Up</button></div><a class="already" href="login">You already have an account? Login here.</a>
            </form>
        </div>
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
        <p class="copyright">Company Name © 2022</p>
    </footer>
</body>
