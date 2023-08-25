export interface MoonTrack {
    /**
     * If set to `true`, this track's playback will loop on completion. This defaults to the value specified by the author of this sequence, and should be set explicitly if expected to behave one way or the other.
     */
    Looped: boolean,

    /**
     * Fires upon all of the track's elements completing their playback.
     */
    readonly Completed: RBXScriptSignal,

    /**
     * Starts playing the track's elements.
     * 
     * **Note**: Has no effect if the track is already playing
     */
    Play(): void;

    /**
     * Stops all playing track elements.
     * 
     ***Note:** Has no effect if the track is already stopped.
     */
    Stop(): void;

    /**
     * Manually resets all element's properties to their expected defaults. Returns `true` if the reset was successful.
     * 
     * **Note:** This will only work if the track is not playing.
     */
    Reset(): void;

    /**
     * @returns `true` if the track has any elements playing.
     */
    IsPlaying(): boolean;

    /**
     * @returns an array of instances that can be modified by this track during playback.
     */
    GetElements(): Instance[];

    /**
     * Adds a mutex lock to the provided element, disabling it from being modified by the track's playback.
     * 
     * **Note**: If provided, the value of lock must be a truthy type (i.e. not `false` or `nil`), otherwise it will fallback to `"Default"`. 
     * 
     * **Warning**: Calling this while the track is playing won't take effect until the track plays again.
     * 
     * @returns `true` if the element is valid and successfully locked.
     */
    LockElement(inst?: Instance, lock?: "Default" | string): boolean;

    /**
     * Removes a mutex lock from the provided element, enabling it to be modified again if there are no other locks on it.
     * 
     * **Note**: If provided, the value of lock must be a truthy type (i.e. not `false` or `nil`), otherwise it will fallback to `"Default"`. 
     * 
     * **Warning**: Calling this while the track is playing won't take effect until the track plays again.
     * 
     * @returns `true` if the element is valid and no longer has the provided lock.
     */
    UnlockElement(inst?: Instance, lock?: "Default" | string): boolean;

    /**
     * 
     * @returns `true` if there are any locks on the provided element.
     */
    IsElementLocked(inst?: Instance): boolean;

    /**
     * **Warning:** The result of this function depends on the order of elements in the authored sequence. If there are multiple elements with the same name, this may produce unexpected behavior.
     * @returns the first element in this track whose name matches the provided name, if one can be found. Otherwise returns `nil`.
     */
    FindElement(name: string): Instance | void;

    /**
     * **Warning**: The result of this function depends on the order of elements in the authored sequence. If there are multiple elements that satisfy `element:IsA(typeName)`, this may produce unexpected behavior.
     * 
     * @returns the first element in this track which satisfies `element:IsA(typeName)`, or `nil` if no such element can be found.
     */
    FindElementOfType<T extends keyof Instances>(typeName: string): this is Instances[T];

    /**
     * Attempts to replace an element by its defined absolute path with a specific Instance.
     */
    ReplaceElementByPath(path: string, replacement: Instance): void;

    /**
     * This function returns an [event](https://developer.roblox.com/en-us/api-reference/datatype/RBXScriptSignal).Fires when a specified [KeyframeMarker](https://developer.roblox.com/en-us/api-reference/class/KeyframeMarker) has been hit in an `MoonTrack`.
     */
    GetMarkerReachedSignal(name: string): RBXScriptSignal<(value: string) => void>;
}
