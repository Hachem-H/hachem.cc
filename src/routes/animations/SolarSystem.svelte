<script lang="ts">
    import { T, useThrelte, useTask, useRender } from "@threlte/core";
    import { OrbitControls } from "@threlte/extras";
    import { Camera, Mesh } from "three";
    import {
        EffectComposer,
        EffectPass,
        RenderPass,
        SMAAEffect,
        SMAAPreset,
        BloomEffect,
        KernelSize,
    } from "postprocessing";

    let { scene, renderer, camera, size } = useThrelte();
    renderer.setClearColor(0x000000);

    const composer = new EffectComposer(renderer);
    const setupEffectComposer = (camera: Camera) => {
        composer.removeAllPasses();
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(
            new EffectPass(
                camera,
                new BloomEffect({
                    intensity: 1,
                    luminanceThreshold: 0.15,
                    height: 512,
                    width: 512,
                    luminanceSmoothing: 0.08,
                    mipmapBlur: true,
                    kernelSize: KernelSize.MEDIUM,
                })
            )
        );
        composer.addPass(
            new EffectPass(
                camera,
                new SMAAEffect({
                    preset: SMAAPreset.LOW,
                })
            )
        );
    };

    $: setupEffectComposer($camera);
    $: composer.setSize($size.width, $size.height);
    useRender((_, delta) => {
        composer.render(delta);
    });

    let meshes: Mesh[] = [];
    let angles: number[] = [];
    let radii: number[] = [];

    for (let i = 0; i < 20; i++) {
        let mesh = new Mesh();
        let angle = Math.random() * Math.PI * 2;
        let radius = Math.random() * 2 - 1 + i;

        mesh.position.set(
            radius * Math.cos(angle),
            radius * Math.sin(angle),
            0
        );
        meshes.push(mesh);
        angles.push(angle);
        radii.push(radius);
    }

    useTask((delta) => {
        for (let i = 0; i < meshes.length; i++) {
            angles[i] += delta;
            meshes[i].position.set(
                radii[i] * Math.cos(angles[i]),
                radii[i] * Math.sin(angles[i]),
                0
            );
        }
    });
</script>

<T.PerspectiveCamera makeDefault position={[10, -10, 10]} lookAt.y={1.5}>
    <OrbitControls enableDamping autoRotate rotateSpeed={1.5} />
</T.PerspectiveCamera>

<T.PointLight position={[0, 0, 0]} power={1000} />

<T.Mesh position={[0, 0, 0]} scale={0.1}>
    <T.SphereGeometry />
    <T.MeshBasicMaterial />
</T.Mesh>

{#each meshes as mesh}
    <T.Mesh bind:ref={mesh} scale={0.05}>
        <T.SphereGeometry />
        <T.MeshStandardMaterial />
    </T.Mesh>
{/each}
