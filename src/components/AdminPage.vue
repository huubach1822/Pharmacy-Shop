<template>
    <div class="page-wrapper chiller-theme toggled">

        <nav ref="sidebaradmin" id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <div class="sidebar-brand" style="display: flex; justify-content: center; align-items: center;">
                    <div v-show="!sidebar" style="cursor: pointer;" v-on:click="showsidebar()">
                        <div class="menuicon"></div>
                        <div class="menuicon"></div>
                        <div class="menuicon"></div>
                    </div>
                    <a v-show="sidebar" href="#">Admin Site</a>
                    <div v-show="sidebar" id="close-sidebar" v-on:click="closesidebar()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="sidebar-header">
                    <div style="display: flex; justify-content: center; align-items: center; text-align: center;">
                        <img ref="imgAvatar" width="95px" height="85px" style="display: block; margin-left: auto; margin-right: auto;"
                            src="assets/img/user.png"
                            alt="User picture">
                    </div>
                    <div v-show="sidebar" class="user-info">
                        <span class="user-name">
                            <strong>{{ this.username }}</strong>
                        </span>
                        <span class="user-role">{{ this.userrole }}</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-search">
                    <div>
                        <div v-if="sidebar" class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search..." style="width: 165px;">
                            <!-- <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div> -->
                            <i class="fa fa-search" aria-hidden="true" style=" z-index: 10; position: absolute; top: 30%; right: 5%; color: #525965;"></i>
                        </div>
                        <div class="sidebar-menu" v-else >
                            <ul>
                                <li>
                                    <a>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-menu">
                    <ul style="margin-top: 5px;">
                        <li  class="header-menu">
                            <span v-show="sidebar">General</span>
                        </li>
                        <!-- <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                                <span class="badge badge-pill badge-warning">New</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Dashboard 1
                                            <span class="badge badge-pill badge-success">Pro</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <span>E-commerce</span>
                                <span class="badge badge-pill badge-danger">3</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Products

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Credit cart</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="far fa-gem"></i>
                                <span>Components</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">General</a>
                                    </li>
                                    <li>
                                        <a href="#">Panels</a>
                                    </li>
                                    <li>
                                        <a href="#">Tables</a>
                                    </li>
                                    <li>
                                        <a href="#">Icons</a>
                                    </li>
                                    <li>
                                        <a href="#">Forms</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-chart-line"></i>
                                <span>Charts</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Pie chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Line chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Bar chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Histogram</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-globe"></i>
                                <span>Maps</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Google maps</a>
                                    </li>
                                    <li>
                                        <a href="#">Open street map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="header-menu">
                            <span>Extra</span>
                        </li> -->
                        <!-- <li>
                            <a href="#">
                                <i class="fa fa-book"></i>
                                <span>Documentation</span>
                                <span class="badge badge-pill badge-primary">Beta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-calendar"></i>
                                <span>Calendar</span>
                            </a>
                        </li> -->
                        <!-- <li>
                            <router-link to="/LoginForm" class="nav-link" style="position: relative;">
                                <i class="fa fa-folder"></i>
                                <span class="DelaySideBar">Login</span>
                            </router-link>

                        </li> -->
                        <!-- <li class="menu-sidebar">
                            <router-link to="/DashBroad" class="nav-link" style="position: relative;">
                                <i class="fa fa-folder"></i>
                                <span class="DelaySideBar">DashBroad</span>
                            </router-link>

                        </li> -->
                        <li class="menu-sidebar">
                            <router-link to="/ListProduct" class="nav-link" style="position: relative;">
                                <i class="fa fa-laptop"></i>
                                <span class="DelaySideBar">List Product</span>
                            </router-link>
                        </li>
                        <li class="menu-sidebar">
                            <router-link to="/ListInventory" class="nav-link" style="position: relative;">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="DelaySideBar">List Inventory</span>
                            </router-link>
                        </li>
                        <li class="menu-sidebar">
                            <router-link to="/ListOrder" class="nav-link" style="position: relative;">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="DelaySideBar">List Order</span>
                            </router-link>
                        </li>
                       
                        
                        
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
            <!-- sidebar-content  -->
            <div class="sidebar-footer">
                <!-- <a href="#">
                    <i class="fa fa-bell"></i>
                    <span class="badge badge-pill badge-warning notification">3</span>
                </a>
                <a href="#">
                    <i class="fa fa-envelope"></i>
                    <span class="badge badge-pill badge-success notification">7</span>
                </a>
                <a href="#">
                    <i class="fa fa-cog"></i>
                    <span class="badge-sonar"></span>
                </a> -->
                <a style="cursor: pointer;">
                    <i class="fa fa-power-off" v-on:click="logout"></i>
                </a>
            </div>
        </nav>
        <!-- sidebar-wrapper  -->
        <main ref="pagecontent" style="padding-left: 300px; padding-top: 15px;">    
            <div class="container-fluid">
                
                <router-view></router-view>

                <!-- <hr>
                <footer class="text-center">
                    <div class="mb-2">
                        <small>
                            © 2020 made with <i class="fa fa-heart" style="color:red"></i> by - <a target="_blank"
                                rel="noopener noreferrer" href="https://azouaoui.netlify.com">
                                Team 1
                            </a>
                        </small>
                    </div>
                    <div>
                        <a href="https://github.com/azouaoui-med" target="_blank">
                            <img alt="GitHub followers"
                                src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social" />
                        </a>
                        <a href="https://twitter.com/azouaoui_med" target="_blank">
                            <img alt="Twitter Follow"
                                src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social" />
                        </a>
                    </div>
                </footer> -->
            </div>
        </main>
        <!-- page-content" -->

    </div>
</template>
<script>

export default {
    
    name: "AdminSite",
    data(){
        return{
            zero:"",
            username: localStorage.getItem('username'),
            userrole: localStorage.getItem('role'),
            // userimg: localStorage.getItem('userimg'),
            sidebar: true,
        }
    },
    methods: {
        logout(){

            this.$store.state.userLogined = '';
            localStorage.setItem('accessToken', '')
            localStorage.setItem('role', '')
            localStorage.setItem('username', '')
            localStorage.setItem('useremail', '')
            localStorage.setItem('id', '')
            setTimeout(location.reload.bind(location), 90);
            this.$router.push({ path: '/' })
        },
        closesidebar(){
            this.sidebar = false
            this.$refs.sidebaradmin.style.width="60px"
            this.$refs.imgAvatar.style.width="45px"
            this.$refs.imgAvatar.style.height="45px"
            this.$refs.imgAvatar.style.borderRadius="50%"
            this.$refs.pagecontent.style.paddingLeft="100px"


            const boxes = document.querySelectorAll('.DelaySideBar');
            boxes.forEach(box => {
            box.style.display="none";
            });
        },
        showsidebar(){
            this.sidebar = true
            this.$refs.sidebaradmin.style.width="260px"
            this.$refs.imgAvatar.style.width="120px"
            this.$refs.imgAvatar.style.height="90px"
            this.$refs.imgAvatar.style.borderRadius="0%"
            this.$refs.pagecontent.style.paddingLeft="300px"

            const boxes = document.querySelectorAll('.DelaySideBar');
            setTimeout(function(){
                boxes.forEach(box => {
                box.style.display="inline-block";
                });
            }, 100);

        },
        },
    }


</script>
<style scoped>
@keyframes swing {
    0% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(10deg);
    }

    30% {
        transform: rotate(0deg);
    }

    40% {
        transform: rotate(-10deg);
    }

    50% {
        transform: rotate(0deg);
    }

    60% {
        transform: rotate(5deg);
    }

    70% {
        transform: rotate(0deg);
    }

    80% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@keyframes sonar {
    0% {
        transform: scale(0.9);
        opacity: 1;
    }

    100% {
        transform: scale(2);
        opacity: 0;
    }
}
.menu-sidebar {
    margin-top: 15px;
    /* padding-left: 15px; */
}

.DelaySideBar {
    display: inline-block;
    font-size: 16px;
    text-transform: capitalize;
}

.menuicon {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;    
}

body {
    font-size: 0.9rem;
}

.page-wrapper .sidebar-wrapper,
.sidebar-wrapper .sidebar-brand>a,
.sidebar-wrapper .sidebar-dropdown>a:after,
.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,
.sidebar-wrapper ul li a i,
.page-wrapper .page-content,
.sidebar-wrapper .sidebar-search input.search-menu,
.sidebar-wrapper .sidebar-search .input-group-text,
.sidebar-wrapper .sidebar-menu ul li a,
#show-sidebar,
#close-sidebar {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

/*----------------page-wrapper----------------*/

.page-wrapper {
    height: 100vh;
}

.page-wrapper .theme {
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 4px;
    margin: 2px;
}

.page-wrapper .theme.chiller-theme {
    background: #1e2229;
}

/*----------------toggeled sidebar----------------*/

.page-wrapper.toggled .sidebar-wrapper {
    left: 0px;
}

@media screen and (min-width: 768px) {
    .page-wrapper.toggled .page-content {
        padding-left: 300px;
    }
}

/*----------------show sidebar button----------------*/
#show-sidebar {
    position: fixed;
    left: 0;
    top: 10px;
    border-radius: 0 4px 4px 0px;
    width: 35px;
    /* transition-delay: 0.3s; */
}

.page-wrapper.toggled #show-sidebar {
    left: -40px;
}

/*----------------sidebar-wrapper----------------*/

.sidebar-wrapper {
    width: 260px;
    height: 100%;
    max-height: 100%;
    position: fixed;
    top: 0;
    left: -300px;
    z-index: 999;
}

.sidebar-wrapper ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar-wrapper a {
    text-decoration: none;
}

/*----------------sidebar-content----------------*/

.sidebar-content {
    max-height: calc(100% - 30px);
    height: calc(100% - 30px);
    overflow-y: auto;
    position: relative;
}

.sidebar-content.desktop {
    overflow-y: hidden;
}

/*--------------------sidebar-brand----------------------*/

.sidebar-wrapper .sidebar-brand {
    padding: 10px 20px;
    display: flex;
    align-items: center;
}

.sidebar-wrapper .sidebar-brand>a {
    text-transform: uppercase;
    font-weight: bold;
    flex-grow: 1;
}

.sidebar-wrapper .sidebar-brand #close-sidebar {
    cursor: pointer;
    font-size: 20px;
}

/*--------------------sidebar-header----------------------*/

.sidebar-wrapper .sidebar-header {
    padding: 20px;
    overflow: hidden;
}

.sidebar-wrapper .sidebar-header .user-pic {
    float: left;
    width: 60px;
    padding: 2px;
    border-radius: 12px;
    margin-right: 15px;
    overflow: hidden;
}

.sidebar-wrapper .sidebar-header .user-pic img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.sidebar-wrapper .sidebar-header .user-info {
    float: left;
}

.sidebar-wrapper .sidebar-header .user-info>span {
    display: block;
}

.sidebar-wrapper .sidebar-header .user-info .user-role {
    font-size: 12px;
}

.sidebar-wrapper .sidebar-header .user-info .user-status {
    font-size: 11px;
    margin-top: 4px;
}

.sidebar-wrapper .sidebar-header .user-info .user-status i {
    font-size: 8px;
    margin-right: 4px;
    color: #5cb85c;
}

/*-----------------------sidebar-search------------------------*/

.sidebar-wrapper .sidebar-search>div {
    padding: 10px 15px;
}

/*----------------------sidebar-menu-------------------------*/

.sidebar-wrapper .sidebar-menu {
    padding-bottom: 0px;
}

.sidebar-wrapper .sidebar-menu .header-menu span {
    font-weight: bold;
    font-size: 14px;
    padding: 15px 20px 5px 20px;
    display: inline-block;
}

.sidebar-wrapper .sidebar-menu ul li a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    position: relative;
    /* padding: 8px 30px 8px 20px; */
}

.sidebar-wrapper .sidebar-menu ul li a i {
    margin-right: 10px;
    font-size: 12px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
}

.sidebar-wrapper .sidebar-menu ul li a:hover>i::before {
    display: inline-block;
    animation: swing ease-in-out 0.5s 1 alternate;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown>a:after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f105";
    font-style: normal;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: 0 0;
    position: absolute;
    right: 15px;
    top: 14px;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {
    padding: 5px 0;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {
    padding-left: 25px;
    font-size: 13px;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {
    content: "\f111";
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
    font-style: normal;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 10px;
    font-size: 8px;
}

.sidebar-wrapper .sidebar-menu ul li a span.label,
.sidebar-wrapper .sidebar-menu ul li a span.badge {
    float: right;
    margin-top: 8px;
    margin-left: 5px;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,
.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {
    float: right;
    margin-top: 0px;
}

.sidebar-wrapper .sidebar-menu .sidebar-submenu {
    display: none;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a:after {
    transform: rotate(90deg);
    right: 17px;
}

/*--------------------------side-footer------------------------------*/

.sidebar-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
}

.sidebar-footer>a {
    flex-grow: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
    position: relative;
}

.sidebar-footer>a .notification {
    position: absolute;
    top: 0;
}

.badge-sonar {
    display: inline-block;
    background: #980303;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 0;
}

.badge-sonar:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #980303;
    opacity: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: sonar 1.5s infinite;
}

/*--------------------------page-content-----------------------------*/

.page-wrapper .page-content {
    display: inline-block;
    width: 100%;
    padding-left: 0px;
    padding-top: 20px;
}

.page-wrapper .page-content>div {
    padding: 20px 40px;
}

.page-wrapper .page-content {
    overflow-x: hidden;
}

/*------scroll bar---------------------*/

::-webkit-scrollbar {
    width: 5px;
    height: 7px;
}

::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
}

::-webkit-scrollbar-thumb {
    background: #525965;
    border: 0px none #ffffff;
    border-radius: 0px;
}

::-webkit-scrollbar-thumb:hover {
    background: #525965;
}

::-webkit-scrollbar-thumb:active {
    background: #525965;
}

::-webkit-scrollbar-track {
    background: transparent;
    border: 0px none #ffffff;
    border-radius: 50px;
}

::-webkit-scrollbar-track:hover {
    background: transparent;
}

::-webkit-scrollbar-track:active {
    background: transparent;
}

::-webkit-scrollbar-corner {
    background: transparent;
}


/*-----------------------------chiller-theme-------------------------------------------------*/

.chiller-theme .sidebar-wrapper {
    background: #31353D;
}

.chiller-theme .sidebar-wrapper .sidebar-header,
.chiller-theme .sidebar-wrapper .sidebar-search,
.chiller-theme .sidebar-wrapper .sidebar-menu {
    border-top: 1px solid #3a3f48;
}

.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
    border-color: transparent;
    box-shadow: none;
}

.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,
.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,
.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,
.chiller-theme .sidebar-wrapper .sidebar-brand>a,
.chiller-theme .sidebar-wrapper .sidebar-menu ul li a,
.chiller-theme .sidebar-footer>a {
    color: #818896;
}

.chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,
.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,
.chiller-theme .sidebar-wrapper .sidebar-header .user-info,
.chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,
.chiller-theme .sidebar-footer>a:hover i {
    color: #b8bfce;
}

.page-wrapper.chiller-theme.toggled #close-sidebar {
    color: #bdbdbd;
}

.page-wrapper.chiller-theme.toggled #close-sidebar:hover {
    color: #ffffff;
}

.chiller-theme .sidebar-wrapper ul li:hover a i,
.chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,
.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,
.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {
    color: #16c7ff;
    text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);
}

.chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,
.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,
.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
    background: #3a3f48;
}

.chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {
    color: #6c7b88;
}

.chiller-theme .sidebar-footer {
    background: #3a3f48;
    box-shadow: 0px -1px 5px #282c33;
    border-top: 1px solid #464a52;
}

.chiller-theme .sidebar-footer>a:first-child {
    border-left: none;
}

.chiller-theme .sidebar-footer>a:last-child {
    border-right: none;
}
</style>