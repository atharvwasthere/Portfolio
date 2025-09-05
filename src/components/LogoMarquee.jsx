import { ReactLogo, CppLogo,Kubernetes , TailwindCSSLogo, TypeScriptLogo, JavaScriptLogo, ExpressLogo, MongoDBLogo, GoLogo, NodejsLogo, PostmanLogo, GitHubLogo , SQLLogo , DockerLogo, RedisLogo, AwsLogo, CloudflareLogo } from "@/components/ui/logos";
import '../pages/logo.css'
import { useEffect } from "react";
const LogoMarquee = () => {

        useEffect(() => { 
        // Firefox CQW fix
        const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
        
        if (isFirefox) {
            const marqueeElements = document.querySelectorAll('.marquee');
            
            marqueeElements.forEach(marquee => {
                const numItemsStyle = marquee.style.getPropertyValue('--numItems');
                const numItems = parseInt(numItemsStyle) || 11;
                
                // Get CSS custom property values or use defaults
                const computedStyle = getComputedStyle(marquee);
                const itemWidth = parseInt(computedStyle.getPropertyValue('--item-width')) || 60;
                const itemGap = parseInt(computedStyle.getPropertyValue('--item-gap')) || 27;
                
                // Calculate track width
                const trackWidth = (itemWidth + itemGap) * numItems;
                const animationDistance = trackWidth + (itemWidth + itemGap);
                
                // Set Firefox-specific properties
                marquee.style.setProperty('--firefox-track-width', `${trackWidth}px`);
                marquee.style.setProperty('--firefox-animation-distance', `-${animationDistance}px`);
                
                // Apply Firefox-specific CSS
                const tracks = marquee.querySelectorAll('.marquee-track');
                tracks.forEach(track => {
                    track.style.width = `${trackWidth + (itemWidth + itemGap)}px`;
                });
            });
        }
    }, []);
    return (
        <div className="wrapper hidden lg:block">
            <div className="marquee fadeout-horizontal" style={{ "--numItems": "11" }}>
                <div className="marquee-track">
                    <div className="marquee-item" style={{ "--item-position": "1" }}>
                        <ReactLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "2" }}>
                        <NodejsLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "3" }}>
                        <TailwindCSSLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "4" }}>
                        <CloudflareLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "5" }}>
                        <CppLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "6" }}>
                        <JavaScriptLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "7" }}>
                        <TypeScriptLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "8" }}>
                        <MongoDBLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "9" }}>
                        <ExpressLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "10" }}>
                        <GoLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "11" }}>
                        <PostmanLogo />
                    </div>
                </div>
            </div>

            <div
                className="marquee fadeout-horizontal"
                style={{ "--numItems": "11", "--direction": "reverse" }}
            >
                <div className="marquee-track">
                <div className="marquee-item" style={{ "--item-position": "1" }}>
                        <ReactLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "2" }}>
                        <GitHubLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "3" }}>
                        <TailwindCSSLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "4" }}>
                        <DockerLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "5" }}>
                        <SQLLogo/>
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "6" }}>
                        <RedisLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "7" }}>
                        <AwsLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "8" }}>
                        <MongoDBLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "9" }}>
                        <Kubernetes />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "10" }}>
                        <GoLogo />
                    </div>
                    <div className="marquee-item" style={{ "--item-position": "11" }}>
                        <PostmanLogo />
                    </div>
                </div>
            </div>
        </div>
    )
}




export default LogoMarquee;