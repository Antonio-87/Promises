import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
    static load() {
        return read().then((data) => json(data))
            .then((value) => {
                const valPars = JSON.parse(value);
                const gamesaving = new GameSaving(
                    valPars.id,
                    valPars.created,
                    valPars.userInfo.id,
                    valPars.userInfo.name,
                    valPars.userInfo.level,
                    valPars.userInfo.points,
                );
                return gamesaving;
            });
    }
}
