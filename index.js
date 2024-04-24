import { register } from "@videosdk.live/react-native-sdk";
import VideoSDK from "./src/components/CarouselTwo/VideoSDK";
import { registerRootComponent } from "expo";

// Register the service
register();

registerRootComponent(App);
AppRegistry.registerComponent;
