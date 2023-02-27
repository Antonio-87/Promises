import GameSavingLoader from '../app';

test.each([{
    expected: {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    },
}])('correct work of read and json and load method', async ({ expected }) => {
    GameSavingLoader.load().then((saving) => {
        expect(saving).toEqual(expected);
    });
});
