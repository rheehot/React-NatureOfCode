import {
    GameDataEvent,
    GameDataEventCallback,
    NewPlayerJoinedEvent,
    NewPlayerJoinedEventCallback, PlayerInputEvent, PlayerLeftEvent, PlayerLeftEventCallback,
    PlayerLoggingInEvent,
    StartReceivingGameDataEvent,
    StopReceivingGameDataEvent,
    YouLoggedInEvent,
    YouLoggedInEventCallback
} from "../shared/SocketEvents"
import {PlayerInputDTO} from "../shared/DTOs"

export class ClientSocketEventsHelper {

    public static subscribeYouJoinedEvent(socket: SocketIOClient.Emitter, callback: YouLoggedInEventCallback): void {
        socket.on(YouLoggedInEvent.key, callback)
    }

    public static unsubscribeYouJoinedEvent(socket: SocketIOClient.Emitter): void {
        socket.off(YouLoggedInEvent.key)
    }

    public static subscribeNewPlayerJoinedEvent(socket: SocketIOClient.Emitter, callback: NewPlayerJoinedEventCallback): void {
        socket.on(NewPlayerJoinedEvent.key, callback)
    }

    public static unsubscribeNewPlayerJoinedEvent(socket: SocketIOClient.Emitter, callback: NewPlayerJoinedEventCallback) {
        socket.off(NewPlayerJoinedEvent.key, callback)
    }

    public static subscribeGameDataEvent(socket: SocketIOClient.Emitter, callback: GameDataEventCallback): void {
        socket.on(GameDataEvent.key, callback)
    }

    public static unsubscribeGameDataEvent(socket: SocketIOClient.Emitter, callback: GameDataEventCallback): void {
        socket.off(GameDataEvent.key, callback)
    }

    public static onLogInClicked(socket: SocketIOClient.Emitter, name: string): void {
        socket.emit(PlayerLoggingInEvent.key, ...PlayerLoggingInEvent.emitterParams(name))
    }

    public static startReceivingGameData(socket: SocketIOClient.Emitter): void {
        socket.emit(StartReceivingGameDataEvent.key)
    }

    public static stopReceivingFrameData(socket: SocketIOClient.Emitter): void {
        socket.emit(StopReceivingGameDataEvent.key)
    }

    public static subscribePlayerLeftEvent(socket: SocketIOClient.Emitter, callback: PlayerLeftEventCallback): void {
        socket.on(PlayerLeftEvent.key, callback)
    }

    public static unsubscribePlayerLeftEvent(socket: SocketIOClient.Emitter, callback: PlayerLeftEventCallback): void {
        socket.off(PlayerLeftEvent.key, callback)
    }

    public static sendPlayerInput(socket: SocketIOClient.Emitter, playerInput: PlayerInputDTO): void {
        socket.emit(PlayerInputEvent.key, ...PlayerInputEvent.emitterParams(playerInput))
    }
}
