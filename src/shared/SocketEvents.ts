import {
    GameDataDTO,
    PlayerDTO,
    PlayerInputDTO,
    ProjectSelectionDataDTO,
    RootMessageDTO
} from "./DTOs"
import {Socket} from "socket.io"

export type ConnectedEventCallback = (socket: Socket) => void
export class ConnectedEvent {
    static readonly key = "connection"
}

export type DisconnectedEventCallback = () => void
export class DisconnectedEvent {
    static readonly key = "disconnect"
}

export type NewPlayerJoinedEventCallback = (player: PlayerDTO) => void
export class NewPlayerJoinedEvent {
    static readonly key = "new_player_joined"
    static emitterParams(player: PlayerDTO): any[] {
        return [player]
    }
}

export type PlayerLoggingInEventCallback = (name: string) => void
export class PlayerLoggingInEvent {
    static readonly key = "player_logging_in"
    static emitterParams(name: string): any[] {
        return [name]
    }
}

export type PlayerLeftEventCallback = (player: PlayerDTO) => void
export class PlayerLeftEvent {
    static readonly key = "player_signed_out"
    static emitterParams(player: PlayerDTO): any[] {
        return [player]
    }
}

export type YouLoggedInEventCallback = (you: PlayerDTO) => void
export class YouLoggedInEvent {
    static readonly key = "you_logged_in"
    static emitterParams(you: PlayerDTO): any[] {
        return [you]
    }
}

export type StartReceivingGameDataEventCallback = () => void
export class StartReceivingGameDataEvent {
    static readonly key = "start_receiving_game_data"
}

export type StopReceivingGameDataEventCallback = () => void
export class StopReceivingGameDataEvent {
    static readonly key = "stop_receiving_game_data"
}

export type GameDataEventCallback = (gameData: GameDataDTO) => void
export class GameDataEvent {
    static readonly key = "game_data"
    static emitterParams(gameData: GameDataDTO): any[] {
        return [gameData]
    }
}

export type PlayerInputEventCallback = (playerInput: PlayerInputDTO) => void
export class PlayerInputEvent {
    static readonly key = "player_input"
    static emitterParams(playerInput: PlayerInputDTO): any[] {
        return [playerInput]
    }
}

export type StartReceivingProjectSelectionDataEventCallback = () => void
export class StartReceivingProjectSelectionDataEvent {
    static readonly key = "start_receiving_project_selection_data"
}

export type StopReceivingProjectSelectionDataEventCallback = () => void
export class StopReceivingProjectSelectionDataEvent {
    static readonly key = "stop_receiving_project_selection_data"
}

export type ProjectSelectionDataEventCallback = (projectSelectionData: ProjectSelectionDataDTO) => void
export class ProjectSelectionDataEvent {
    static readonly key = "project_selection"
    static emitterParams(projectSelectionData: ProjectSelectionDataDTO): any[] {
        return [projectSelectionData]
    }
}

export type RequestRootEventCallback = (password: string) => void
export class RequestRootEvent {
    static readonly key = "request_root"
    static emitterParams(password: string): any[] {
        return [password]
    }
}

export type RequestUnrootEventCallback = () => void
export class RequestUnrootEvent {
    static readonly key = "request_unroot"
}

export type RootMessageEventCallback = (rootMessage: RootMessageDTO) => void
export class RootMessageEvent {
    static readonly key = "root_message"
    static emitterParams(rootMessage: RootMessageDTO): any[] {
        return [rootMessage]
    }
}