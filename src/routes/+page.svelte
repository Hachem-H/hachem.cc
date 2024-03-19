<script>
    import { Canvas } from "@threlte/core";
    import Scene from "./BackgroundScene.svelte";
</script>

<div style="width:100vw; height:100vh; position: absolute;">
    <Canvas>
        <Scene />
    </Canvas>
</div>
<div style="position:fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white">
    <h1>About me</h1>
</div>
