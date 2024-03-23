<script>
    import { Canvas } from "@threlte/core";
    import Scene from "./animations/SolarSystem.svelte";
    import Typewriter from "svelte-typewriter";
</script>

<div class="background-paralax">
    <Canvas>
        <Scene />
    </Canvas>
</div>

<div class="main-body">
    <div class="content-frame name-frame">
        <Typewriter interval={100} cursor={false}>
            <h1 id="name-text">Hachem H.</h1>
        </Typewriter>
    </div>
    <div class="content-frame about-frame">
        <div class="content-frame-data">
            <h1>Who am I?</h1>
            <p>
                Before launching this website, I hadn't really pondered the question of "who am I?" much. I guess I'm someone with a multitude of passions and interests. Music has been a part of my life from an early age. Computers and classical music have always fascinated me. Interestingly, my first foray into programming was with C, and it's amusing to realize that it's still my go-to language. I've always had a knack for tinkering and breaking things; at home, they jokingly called me "Mr. Break-It-All." I even managed to inadvertently render our family's first laptop useless by experimenting with an MBR overwrite in assembly code...<br><br>

                My youthful curiosity often led me to "accidentally" dismantle things in the pursuit of knowledge. Of course, lacking proper tools like soldering equipment or screwdrivers, I had to resort to more... creative methods. You could say I had a talent for finding unconventional solutions to my inquisitive dilemmas, much to the chagrin of our family's electronics.<br><br>

                Aside from my penchant for breaking things, my passion for music was evident from a very young age. I've always been drawn to classical music over what some might call "modern" music. I delved into composition even before I could read sheet music, jotting down note names with little regard for rhythm. That's how I ended up composing a suite of pieces dedicated to people to whom I felt immense gratitude.<br><br>

                I suppose that I am a human being condemned to trying to make sense of life.            </p>
        </div>
    </div>
    <div class="content-frame cs-frame">
        <div class="content-frame-data">
            <h1>Computer Science</h1>
            <p>
                My technical history was no shy of breaking stuff. My upbringing originally was towards cyber security and "hacking", first complete piece of software I wrote was an MBR overwrite. A couple of years later I got very involved with game development with Java. Made many, many, many games in java a long with a couple C++ game engines. I don't work on one specific type of software per say but I do have some degree of favoritism and that being of course, everything low level; all about kernel development, game engine development and all that lot. Below I provided some featured projects:
            </p>

            <div>
                <div id="cs-container">
                    <p id="iridis-description">
                        <a target="_blank" href="http://github.com/Hachem-H/Iridis" id="cs-header">Iridis</a> is an innovative programming language designed to cater to the needs of various domains, such as computational physics, kernel development, and game development, while remaining versatile enough to be applicable in many other areas. This language is built from the ground up to offer blazing fast performance, a modern development experience, and low-level control, empowering programmers to tackle complex problems efficiently and effectively.
                    </p>
                    <img id="iridis-image" src="https://raw.githubusercontent.com/Hachem-H/Iridis/main/Branding/TempLogo.png" alt="Iridis Logo">
                </div>
                <div id="cs-container">
                    <img id="excalibur-image" src="https://github.com/Hachem-H/Excalibur/raw/main/Branding/Logo.png" alt="Excalibur Logo">
                    <p id="excalibur-description">
                        <a target="_blank" href="http://github.com/Hachem-H/Excalibur" id="cs-header">Excalibur</a> is a highly deceptive software posing a severe risk to computer systems. Masquerading as an innocent-looking game, it cleverly gains access through an installer that demands administrative privileges for execution, just like legitimate installers. While the installation process appears ordinary, unbeknownst to the user, Excalibur secretly initiates a malicious operation in the background.
                    </p>
                </div>
            </div>

            <div id="cs-container">
                <a id="cs-button" target="_black" href="https://github.com/Hachem-H/">View more</a>
            </div>
        </div>
    </div>
    <div class="content-fame empty-frame"></div>
</div>

<style>
    @import "../css/global.css";
    @import "../css/about.css";
    @import "../css/cs.css"
</style>
