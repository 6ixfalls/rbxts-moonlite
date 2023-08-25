import { MoonTrack } from "./types";

/**
 * Loads the provided save file to be played back. 
 * The `save` is a StringValue normally stored in `game.ServerStorage.MoonAnimator2Saves`, but you'll need to store it elsewhere to play the sequence back on the client.
 */
declare const CreatePlayer: (save: StringValue, root?: Instance) => MoonTrack;

declare namespace Moonlite {
	export { CreatePlayer }
}

export = Moonlite; 
